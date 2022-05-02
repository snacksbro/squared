from pymongo import MongoClient
import json
from bson import json_util
from flask import jsonify
import constant.constant as constant

class StoreItemManagement:
    '''
     Connecting to Mongodb
      '''
cluster = MongoClient(constant.SERVERURL)

def find_store_item_by_title(product_title):
    db = cluster["SquaredDev"]  # database name
    collection = db["store_items"]

    results = collection.find({"productTitle": product_title})

    result_body = []
    for result in list(results):
        # filtering the results

        result_body.append({
            "productTitle": result['productTitle'],
            "productImageUrl": result['productImageUrl'],
            "productDescription": result['productDescription'],
            "productPrice": result['productPrice']
        })

    return result_body

def find_all_store_items():
    db = cluster["SquaredDev"]  # database name
    collection = db["store_items"]

    results = collection.find({})

    # convert cursor (extract values from the cursor)
    result_body = []
    for result in list(results):
        # filtering the results

        result_body.append({
            "productTitle": result['productTitle'],
            "productImageUrl": result['productImageUrl'],
            "productDescription": result['productDescription'],
            "productPrice": result['productPrice']
        })

    return result_body

#create new top players



#fetch players who isTopThree is false