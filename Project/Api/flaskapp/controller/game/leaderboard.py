from pymongo import MongoClient
import json
from bson import json_util
from flask import jsonify
import constant.constant as constant

class Leaderboard:
    '''
     Connecting to Mongodb
      '''
cluster = MongoClient(constant.SERVERURL)

def find_top_three_players():
    db = cluster["SquaredDev"]  # database name
    collection = db["leader_board"]

    results = collection.find({"isTopThree": True})
    #print(list(results))
    # convert cursor (extract values from the cursor)
    result_body = []
    for result in list(results):
        # filtering the results

        result_body.append({
            "firstName": result['firstName'],
            "lastName": result['lastName'],
            "profileImage": result['profileImage'],
            "score": result['score'],
            "isTopThree": result['isTopThree']
        })

    return result_body

def find_other_top_players():
    db = cluster["SquaredDev"]  # database name
    collection = db["leader_board"]

    results = collection.find({"isTopThree": False})
    #print(list(results))
    # convert cursor (extract values from the cursor)
    result_body = []
    for result in list(results):
        # filtering the results

        result_body.append({
            "firstName": result['firstName'],
            "lastName": result['lastName'],
            "profileImage": result['profileImage'],
            "score": result['score'],
            "isTopThree": result['isTopThree']
        })

    return result_body

#create new top players



#fetch players who isTopThree is false