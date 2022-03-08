from flask import Flask
import random

app = Flask(__name__)
game = [
		{"players": ["user1", "user2"],
			"playerColors": ["red", "blue"],
			"board": [["red", "blue", "none"],
								["none", "blue", "blue"]],
			"turn": "user1",
			"roll": 3}
]
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
    return random.randint(1,6)

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

