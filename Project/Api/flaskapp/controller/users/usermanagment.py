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

    # convert cursor (extract values from the cursor)
    for result in list(results):
        # filtering the results
        body = {
            "firstName": result['firstName'],
            "lastName": result['lastName'],
            "emailAddress": result['emailAddress']
        }
        return body


#find_user_by_email_address

def find_user_by_email_address(email_address):
    db = cluster["SquaredDev"]  # database name
    collection = db["user"]

    results = collection.find({"emailAddress": email_address})

    for result in list(results):

        #filtering the results
        body = {
            "firstName": result['firstName'],
            "lastName": result['lastName'],
            "emailAddress": result['emailAddress']
        }
        return body
