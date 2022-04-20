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

'''

from flask import Flask
from flask import jsonify
from flask import request
from flask_cors import CORS
import random



#setting up the mongodb
from pymongo import MongoClient

#importing local classes
from controller.authentication.authentication import login_handler, register_user
from controller.chat.messagefilter import msg_is_clean
from controller.chat.chatmanager import store_chat_message
from controller.users.usermanagment import find_user_by_first_name
from controller.validation.gamevalidation import is_adjacent
from controller.help.helper import string_parser, translate_square
from controller.game.gameplay import assign_players, random_list_generator

import constant.constant as constant



cluster = MongoClient(constant.SERVERURL)



app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "*"}}) # Basically let React send requests


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
    return '<h1>'+game[gameID]["players"][game[gameID]["players"].index(game[gameID]["turn"])+1]+'</h1>'


DiceState  = -1
@app.route('/verify')
def VerifyTile():
    if(DiceState == -1):
        DiceState = int(RandD6())
	# TODO: Add gameid to this
    position = translate_square(square=game[gameID]["positions"][game[gameID]["players"].index(game[gameID]["turn"])])
    target = translate_square(square=request.args.get("square"))
    TileString = game[gameID]["board"][target[0]][target[1]]
    if (is_adjacent(coord1= position,coord2= target)):
        if "none" in string_parser(StringToBeParsed=TileString):
            if(DiceState == 0):
                DiceState = -1
                if([game[gameID]["players"].index(game[gameID]["turn"])] == len(game[gameID]["players"])-1):
                    game[gameID]["turn"] = game[gameID]["players"][0]
                    return str(0)
                game[gameID]["turn"] = game[gameID]["players"][game[gameID]["players"].index(game[gameID]["turn"])+1]
            currentPlayerIndex = game[gameID]["players"].index(game[gameID]["turn"])
            game[gameID]["positions"][currentPlayerIndex] = request.args.get("square")
            return str(0)
        elif "trap" in string_parser(StringToBeParsed=TileString):
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
def login_user():
	if request.is_json:
		email_address = request.json['emailAddress']
		password = request.json['password']
	else:
		email_address = request.args['emailAddress']
		password = request.args['password']

	result = login_handler(email_address= email_address, password= password)
	print("Result: " + result)
	#.login_handler(email_address,password)



	return result

@app.route('/register_user', methods=['POST'])
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

	result = register_user(firstName= firstName, lastName= lastName, emailAddress= emailAddress, password= password)

	#return success message and success code
	return result


#gets only GET
@app.route('/find_user_by_name',methods=['GET'])
def find_user_profile():



	# get the parameters or json
	# get data as json
	if request.is_json:
		firstName = request.json['firstName']
	else:
		firstName = request.args['firstName']

	result = find_user_by_first_name(first_name= firstName)

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
