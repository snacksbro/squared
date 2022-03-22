from flask import Flask
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
    return ItemList

@app.route('/')
def index():
    return '<h1>Squared</h1>'

@app.route('/login_user')
def login_user():
    '''
    fetch the params and process the request
    validate the params using joi
    '''

