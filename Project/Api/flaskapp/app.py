from flask import Flask

app = Flask(__name__)

@app.route('/')
def index():
    return '<h1>Squared</h1>'


@app.route('/login_user')
def login_user():
    '''
    fetch the params and process the request 
    validate the params using joi
    '''