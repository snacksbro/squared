from pymongo import MongoClient
import json
from bson import json_util
from flask import jsonify
import constant.constant as constant

class LearningTutorialManagement:
    '''
     Connecting to Mongodb
      '''
cluster = MongoClient(constant.SERVERURL)

def find_tutorial_by_title(tutorial_title):
    db = cluster["SquaredDev"]  # database name
    collection = db["learning_tutorials"]

    results = collection.find({"tutorialTitle": tutorial_title})

    result_body = []
    for result in list(results):
        # filtering the results

        result_body.append({
            "tutorialTitle": result['tutorialTitle'],
            "tutorialImageUrl": result['tutorialImageUrl'],
            "tutorialOverview": result['tutorialOverview'],
            "tutorialDescription": result['tutorialDescription']
        })

    return result_body

def find_all_tutorials():
    db = cluster["SquaredDev"]  # database name
    collection = db["learning_tutorials"]

    results = collection.find({})

    # convert cursor (extract values from the cursor)
    result_body = []
    for result in list(results):
        # filtering the results

        result_body.append({
            "tutorialTitle": result['tutorialTitle'],
            "tutorialImageUrl": result['tutorialImageUrl'],
            "tutorialOverview": result['tutorialOverview'],
            "tutorialDescription": result['tutorialDescription']
        })

    return result_body

