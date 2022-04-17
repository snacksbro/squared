#setting up the mongodb
from pymongo import MongoClient
import constant.constant as constant
from flask import jsonify

class ChatManager:
    '''
    Connecting to the database
    '''

cluster = MongoClient(constant.SERVERURL)

def store_chat_message(body, user_id, username):
    print("Save to DataBase")

    db = cluster["SquaredDev"]  # database name
    collection = db["chat_history"]

    body = {
        # "_id": 1,
        "body": body,
        "userID": user_id,
        "username": username
    }

    collection.insert_one(body)

    return jsonify(message="Message saved successfully."), 201



