'''
Notes
#install required libraries
#pip install flask pymongo passlib
update flask ->  pip install -U Flask
needed to run mongo db
pip install "pymongo[srv]"

Set to development mode
export FLASK_ENV=development

Install RSA
 pip install rsa

Install Pandas
 pip install pandas

Fix for the Eslint jest/globals environment key unknown
 npm i --save-dev eslint-plugin-jest

Install Jwt for python
 pip install flask_jwt_extended

 it tells you which modules you've installed with pip install and the versions of these modules that you are currently
 have installed on your computer.
 pip freeze
'''


from flask import Flask
from flask import jsonify
from flask import request
from flask_cors import CORS, cross_origin
import random
from flask_jwt_extended import JWTManager, jwt_required, create_access_token
from bson.json_util import dumps

#setting up the mongodb
from pymongo import MongoClient

#importing local classes
from controller.authentication.authentication import login_handler, register_user
from controller.chat.messagefilter import msg_is_clean
from controller.chat.chatmanager import store_chat_message
from controller.users.usermanagment import find_user_by_first_name, find_user_by_email_address
from controller.validation.gamevalidation import is_adjacent
from controller.help.helper import string_parser, translate_square
from controller.game.gameplay import assign_players, random_list_generator
from controller.game.leaderboard import find_top_three_players, find_other_top_players
from controller.store_items.storeitemmanagement import find_store_item_by_title,find_all_store_items
from controller.learningtutorials.learningtutorialmanagment import find_tutorial_by_title, find_all_tutorials

import constant.constant as constant



cluster = MongoClient(constant.SERVERURL)



app = Flask(__name__)
#cors = CORS(app, resources={r"/*": {"origins": "*"}}) # Basically let React send requests
cors = CORS(app)
#app.config['CORS_HEADERS'] = 'Content-Type'
app.config['Access-Control-Allow-Origin'] = '*'
#token
#  res.setHeader();


#configuring JWT

app.config['JWT_SECRET_KEY'] = constant.JWT_SECRET_KEY #set your own key
'''Initializing the JWT (Json Web Token) Manager'''
jwt = JWTManager(app)


game = [None] * 99999

#debug mode
if __name__ == "__main__":
    app.run(debug=True)

'''
game = [
		{"players": ["user1", "user2"], # Each player
			"playerColors": ["red", "blue"], # What color each player is
			"positions": ["a1", "j1"], # Where each player is
			"board": [["red", "blue", "none"], # The whole board
								["none", "blue", "blue"]],
			"turn": "user1", # Whose turn it is
			"roll": 3} # The current players turn
]
'''
# TODO: Add a /queue route. Players who join the game will go there, once there's 4, add them to a game
runningGames = []
WaitList =  [] # Queue initialization

# Yolo, I'll fix this later. I'm putting this on the outside so it's a global for testing purposes
gameID = random.randint(1, 99999)
def gameCreate(players): # from lobby we'll queue players
	# later we'll let them choose their color
	# Generate the board
	board = []
	for x in range(11):
		row = []
		for y in range(11):
			row.append("none")
		board.append(row)

	game[gameID] = {
			"players": ["test1", "test2"],
			"playerColors": ["red", "blue"],
			"positions": ["8a", "10k"],
			"board": board,
			"turn": "test1",
			"roll": 0
	}

@app.route('/waitlistjoin') # If player wants to join queue
def WaitlistJoin(WaitList, PlayerName):
	WaitList.append(PlayerName)
	return WaitList

@app.route('/leavewaitlist') # If player wants to leave queue
def LeaveWaitlist(WaitList, PlayerName):
	WaitList.remove(PlayerName)
	return WaitList

gameCreate(["test1", "test2"])

# This is the first thing react calls. This will send the game object
@app.route('/initialize')
def initialize():
	return game[gameID]

@app.route('/waitlistnext') # Next in line joins game
def WaitlistNext(WaitList, PlayerName):
	del WaitList[0]
	return WaitList

@app.route('/gamenext') # Generates a list of people for a game and removes them from the waitlist
def GameNext(WaitList, PlayerCount):
	PlayerList = []
	for i in range(PlayerCount):
		PlayerList.append(WaitList[0])
		del WaitList[0]
	return PlayerList

@app.route('/assignplayers') #Assigns colors to player
def PlayerAssign(PlayerList,PlayerCount):
	return assign_players(player_list=PlayerList,player_count= PlayerCount)

@app.route('/verifywaitlistcount') # Check if sufficient players are in the queue
def VerifyWaitlistCount(WaitList, PlayerCount):
	if len(WaitList) >= PlayerCount:
		return 1
	else:
		return 0

@app.route('/diceroll') # Generates a random 6 sided die roll
def RandD6():
    return str(random.randint(1,6))

@app.route('/itemlist') # Generates a list of items from a given list
def RandListGen(RandomList, ItemCount):

    return random_list_generator(random_list= RandomList,item_count=ItemCount)

@app.route('/')
def index():


    return '<h1>Squared</h1>'

DiceState  = int(RandD6())
@app.route('/verify')
def VerifyTile():
	# TODO: Add gameid to this
    position = translate_square(square=game[gameID]["positions"][game[gameID]["players"].index(game[gameID]["turn"])])
    target = translate_square(square=request.args.get("square"))
    TileString = game[gameID]["board"][target[0]][target[1]]
    if (is_adjacent(coord1= position,coord2= target)):
        if "none" in string_parser(StringToBeParsed=TileString):
            DiceState = DiceState - 1
            currentPlayerIndex = game[gameID]["players"].index(game[gameID]["turn"])
            game[gameID]["positions"][currentPlayerIndex] = request.args.get("square")
            if(DiceState == 0):
                DiceState = int(RandD6())
                if([game[gameID]["players"].index(game[gameID]["turn"])] == len(game[gameID]["players"])-1):
                    game[gameID]["turn"] = game[gameID]["players"][0]
                    return str(0)
                game[gameID]["turn"] = game[gameID]["players"][game[gameID]["players"].index(game[gameID]["turn"])+1]

            return str(0)
        elif "trap" in string_parser(StringToBeParsed=TileString):
            DiceState = DiceState - 1
            currentPlayerIndex = game[gameID]["players"].index(game[gameID]["turn"])
            game[gameID]["positions"][currentPlayerIndex] = request.args.get("square")
            if(DiceState == 0):
                DiceState = int(RandD6())
                if([game[gameID]["players"].index(game[gameID]["turn"])] == len(game[gameID]["players"])-1):
                    game[gameID]["turn"] = game[gameID]["players"][0]
                    return str(0)
                game[gameID]["turn"] = game[gameID]["players"][game[gameID]["players"].index(game[gameID]["turn"])+1]
            return str(1)
        elif "red" in string_parser(StringToBeParsed=TileString):
            return str(2)
        elif "blue" in string_parser(StringToBeParsed=TileString):
            return str(3)
        return str(-1)


'''
fetch the params and process the request
validate the params using joi
'''
@app.route('/login_user',methods=['POST'])
@cross_origin()
#@cross_origin(origin='localhost',headers=['Content-Type','Authorization','Access-Control-Allow-Origin'])
def login_user():


	if request.is_json:
		email_address = request.json['emailAddress']
		password = request.json['password']
	else:
		email_address = request.args['emailAddress']
		password = request.args['password']

	result = login_handler(email_address= email_address, password= password)
	#print("Result: " + result)
	#.login_handler(email_address,password)
	if result == True:
		# return jwt token
		token = create_access_token(identity=email_address)

		print("Result: " + token)
		# return success message and success code
		return token, 201
	else:

		return jsonify(message="Invalid Password or Email."), 409

@app.route('/register_user', methods=['POST'])
@cross_origin()
def register_new_user():
	if request.is_json:
		firstName = request.json['firstName']
		lastName = request.json['lastName']
		emailAddress = request.json['emailAddress']
		password = request.json['password']
	else:
		firstName = request.args['firstName']
		lastName = request.args['lastName']
		emailAddress = request.args['emailAddress']
		password = request.args['password']

	#print(emailAddress)
	result = register_user(firstName= firstName, lastName= lastName, emailAddress= emailAddress, password= password)
	if result:
		# return jwt token
		token = create_access_token(identity=emailAddress)
		'''return success message and success code'''
		#return jsonify(message="Successfully Registered", token=token)
		print(token)
		return token, 201
	else:
		print('This email already exists')
		return jsonify(message='This email already exists'), 409


'''gets only GET'''

@app.route('/find_user_by_name',methods=['GET'])
@jwt_required()
@cross_origin()
def find_user_profile():



	# get the parameters or json
	# get data as json
	if request.is_json:
		firstName = request.json['firstName']
	else:
		firstName = request.args['firstName']

	result = find_user_by_first_name(first_name= firstName)

	return result

@app.route('/find_tutorial_by_title/<tutorialTitle>',methods=['GET'])
@cross_origin()
def get_tutorial_by_title(tutorialTitle):

	result = find_tutorial_by_title(tutorial_title= tutorialTitle)

	return dumps(result)


@app.route('/find_all_tutorials',methods=['GET'])
@cross_origin()
def get_all_tutorials():

	result = find_all_tutorials()

	return dumps(result)


#find_all_store_items
@app.route('/find_all_store_items',methods=['GET'])
@cross_origin()
def get_all_store_items():

	result = find_all_store_items()

	return dumps(result)

@app.route('/find_top_three_players',methods=['GET'])
#@jwt_required()
@cross_origin()
def fetch_top_three_players():

	result = find_top_three_players()

	return dumps(result)


@app.route('/find_other_top_players',methods=['GET'])
#@jwt_required()
@cross_origin()
def fetch_other_top_players():

	result = find_other_top_players()

	return dumps(result)



@app.route('/find_user_by_email/<emailAddress>',methods=['GET'])
@jwt_required()
@cross_origin()
def find_user_profile_by_email(emailAddress):


	'''
	# get the parameters or json
	# get data as json
	if request.is_json:
		emailAddress = request.json['emailAddress']
	else:
		emailAddress = request.args['emailAddress']
	'''
	print(emailAddress)
	result = find_user_by_email_address(email_address= emailAddress)

	return result


#Chat Section

@app.route('/save_user_message',methods=['POST'])
def save_chat_message():
	#filter message if pass the test then save it
	#body, userID, username
	if request.is_json:
		body = request.json['body']
		userID = request.json['userID']
		username = request.json['username']
	else:
		body = request.args['body']
		userID = request.args['userID']
		username = request.args['username']

	#filtering the message if it is clean
	chat_result = msg_is_clean(body=body,userID=userID, username=username)

	if chat_result == True:
		print("Message is Clean proceed to saving message")
		result = store_chat_message(body=body,user_id=userID, username=username)
		return result
	else:
		print("Message unclean dont accept the message")

		return "Message unclean dont accept the message"
