#setting up the mongodb
from pymongo import MongoClient
import constant.constant as constant

class ChatManager:

    cluster = MongoClient(constant.SERVERURL)

def store_chat_message(body, userID, username):
    print("Save to DataBase")


