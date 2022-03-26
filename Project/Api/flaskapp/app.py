from flask import Flask
from flask import jsonify
from flask import request
from flask_cors import CORS
import random

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "*"}}) # Basically let React send requests

game = [None] * 99999
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

# Yolo, I'll fix this later. I'm putting this on the outside so it's a global for testing purposes
gameID = random.randint(1, 99999)
def gameCreate(players): # from lobby we'll queue players
	# later we'll let them choose their color
	# Generate the board
	board = []
	for x in range(10):
		row = []
		for y in range(10):
			row.append("none")
		board.append(row)

	game[gameID] = {
			"players": ["test1", "test2"],
			"playerColors": ["red", "blue"],
			"positions": ["1a", "10k"],
			"board": board,
			"turn": "test1",
			"roll": 0
	}
gameCreate(["test1", "test2"])

# This is the first thing react calls. This will send the game object
@app.route('/initialize')
def initialize():
	return game[gameID]

@app.route('/diceroll')
def RandD6():
    return str(random.randint(1,6))

@app.route('/itemlist')
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

def StringParser(StringToBeParsed):
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
# TODO: Need a case for double-digit numbers
def translateSquare(square):
	alphabet = "abcdefghijk"
	return [int(square[0]), alphabet.index(square[1])]

@app.route('/verify')
def VerifyTile():
	# TODO: Add gameid to this
	position = translateSquare(game[gameID]["positions"][game[gameID]["players"].index(game[gameID]["turn"])])
	target = translateSquare(request.args.get("square"))
	TileString = game[gameID]["board"][target[0]][target[1]]

	if (isAdjacent(position, target)):
		if "none" in StringParser(TileString):
			return str(0)
		elif "trap" in StringParser(TileString):
			return str(1)
		elif "red" in StringParser(TileString):
			return str(2)
		elif "blue" in StringParser(TileString):
			return str(3)
	return str(-1)

@app.route('/login_user')
def login_user():
    '''
    fetch the params and process the request
    validate the params using joi
    '''
