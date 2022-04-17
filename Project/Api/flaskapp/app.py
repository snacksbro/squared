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


from controller.authentication.authentication import login_handler, register_user
from controller.chat.messagefilter import msg_is_clean
from controller.chat.chatmanager import store_chat_message
from controller.users.usermanagment import find_user_by_first_name
import constant.constant as constant

from controller.authentication.authentication import Authentication

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
	ColorList = ["red", "blue", "yellow", "green"]
	for i in range(PlayerCount):
		x = random.randint(0,len(ColorList)-1)
		PlayerList[i] = PlayerList[i] +","+ ColorList[x]
		ColorList.remove(ColorList[x])
	return PlayerList

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
    ItemList = []

    for i in range(ItemCount):
        ListInteger = random.randint(0, len(RandomList)-1)
        ItemList.append(RandomList[ListInteger])
        RandomList.remove(RandomList[ListInteger])
    ItemList.sort()
    return jsonify(ItemList)

@app.route('/')
def index():


    return '<h1>Squared</h1>'

def StringParser(StringToBeParsed): # Parses string for verification
	ParsedList = StringToBeParsed.split(",")
	return ParsedList

# isAdjacent: Returns true if squares are adjacent on the board, false otherwise
def isAdjacent(coord1, coord2):
	# Making a list of every adjacent square
	possibilities = [
		[coord1[0]+1, coord1[1]], # right
		[coord1[0], coord1[1]+1], # down
		[coord1[0]-1, coord1[1]], # left
		[coord1[0], coord1[1]-1], # up
	]
	
	# Checking if any of them "hit" coord2
	for possibility in possibilities:
		# If so, return True
		if possibility[0] == coord2[0] and possibility[1] == coord2[1]:
			return True
	# If not, return False
	return False

# translateSquare: Takes in a square ("a2" for example) and returns an index ([0, 2] for example)
def translateSquare(square):
	alphabet = "abcdefghijk"
	xpos = square[0]
	ypos = square[1]
	if (len(square) > 2):
		# Case for double-digit numbers
		xpos = xpos + square[1]
		ypos = square[2]
	# TODO: Make something like this into a test later
	#print("GOT " + square)
	#print("SENT " +str([int(xpos), alphabet.index(ypos)]))
	return [int(xpos), alphabet.index(ypos)]

@app.route('/verify')
def VerifyTile():
	# TODO: Add gameid to this
	position = translateSquare(game[gameID]["positions"][game[gameID]["players"].index(game[gameID]["turn"])])
	target = translateSquare(request.args.get("square"))
	TileString = game[gameID]["board"][target[0]][target[1]]

	if (isAdjacent(position, target)):
		if "none" in StringParser(TileString):
			currentPlayerIndex = game[gameID]["players"].index(game[gameID]["turn"])
			game[gameID]["positions"][currentPlayerIndex] = request.args.get("square")
			return str(0)
		elif "trap" in StringParser(TileString):
			return str(1)
		elif "red" in StringParser(TileString):
			return str(2)
		elif "blue" in StringParser(TileString):
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

def save_chat_message():
	#filter message if pass the test then save it
	#body, userID, username
	chat_result = msg_is_clean(body= "Test Message",userID = "12424", username = "Avenger")

	if chat_result == True:
		print("Message is Clean proceed to saving message")
		store_chat_message(body= "Test Message",userID = "12424", username = "Avenger")
	else:
		print("Message unclean dont accept the message")