from flask import Flask
from flask import jsonify
from flask import request
from flask_cors import CORS
import random

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "*"}}) # Basically let React send requests

game = [
		{"players": ["user1", "user2"], # Each player
			"playerColors": ["red", "blue"], # What color each player is
			"positions": ["a1", "j1"], # Where each player is
			"board": [["red", "blue", "none"], # The whole board
								["none", "blue", "blue"]],
			"turn": "user1", # Whose turn it is
			"roll": 3} # The current players turn
]
# TODO: Add a /queue route. Players who join the game will go there, once there's 4, add them to a game
runningGames = []

def gameCreate(players): # from lobby we'll queue players
	# later we'll let them choose their color
	gameID = random.randInt(1, 99999)
	# Generate the board
	board = []
	for x in range(10):
		for y in range(10):
			board[x][y] = "none"

	game[gameID] = {
			"players": ["test1", "test2"],
			"playerColors": ["red", "blue"],
			"board": board,
			"turn": "test1",
			"roll": 0
	}
WaitList =  [] # Queue initialization
@app.route('/waitlistjoin') # If player wants to join queue
def WaitlistJoin(WaitList, PlayerName):
	WaitList.append(PlayerName)
	return WaitList

@app.route('/leavewaitlist') # If player wants to leave queue
def LeaveWaitlist(WaitList, PlayerName):
	WaitList.remove(PlayerName)
	return WaitList

@app.route('/waitlistnext') # Next in line joins game
def WaitlistNext(WaitList, PlayerName):
	del WaitList[0]
	return WaitList

@app.route('/verifywaitlistcount') # Check if sufficient players are in the queue
def VerifyWaitlistCount(WaitList, PlayerCount):
	if len(WaitList) == PlayerCount:
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

@app.route('/verify') # Verifies tile data
def VerifyTile(TileString):
	if "none" in StringParser(TileString):
		return 0
	elif "trap" in StringParser(TileString):
		return 1
	elif "red" in StringParser(TileString):
		return 2
	elif "blue" in StringParser(TileString):
		return 3

@app.route('/login_user')
def login_user():
    '''
    fetch the params and process the request
    validate the params using joi
    '''
