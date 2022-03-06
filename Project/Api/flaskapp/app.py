from flask import Flask
import random

app = Flask(__name__)

@app.route('/diceroll')
def RandListd6():
    return random.randint(1,6)

@app.route('/')
def index():
    return '<h1>Squared</h1>'



@app.route('/login_user')
def login_user():
    '''
    fetch the params and process the request
    validate the params using joi
    '''
