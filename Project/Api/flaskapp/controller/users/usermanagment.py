from pymongo import MongoClient
import json
from bson import json_util
from flask import jsonify
import constant.constant as constant

class UserManagment:
    '''
     Connecting to Mongodb
      '''
cluster = MongoClient(constant.SERVERURL)

def find_user_by_first_name(first_name):
    db = cluster["SquaredDev"]  # database name
    collection = db["user"]

    results = collection.find({"firstName": first_name})

    # convert cursor to json list
    docs_list = list(results)
    json_list = json.dumps(docs_list, default=json_util.default)

    return json_list
