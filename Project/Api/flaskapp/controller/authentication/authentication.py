
#setting up the mongodb
from pymongo import MongoClient
from flask import jsonify
import constant.constant as constant
#used for encryption and decryption
import rsa

class Authentication:

    '''
    cluster = MongoClient("mongodb+srv://USERNAME:PASSSWORD@squaredtestcluster.g2hsl.mongodb.net")
    '''


cluster = MongoClient(constant.SERVERURL)


def login_handler(email_address, password):

    #check the if authorized
    # place this in another file
    # referencing the database
    db = cluster["SquaredDev"]  # database name
    collection = db["user"]

    for user in collection.find({"emailAddress": str(email_address)}).limit(1):
        print(user["emailAddress"])

        if user is not None:
            print(user)
            #decrypt the password

            decrypted_password = user["password"]
            if decrypted_password == password:

                #should send back token and sucess message
                return user["emailAddress"]
            else:
                return "Invalid Password"

    # TODO need to set a check if empty, not working right now

    # TODO add JWT after
   #print(result)

    # doc = result
    # json_list = json.dumps(doc, default=json_util.default)


def register_user(firstName, lastName, emailAddress, password):
    db = cluster["SquaredDev"]  # database name
    collection = db["user"]
    print(emailAddress)
    already_exist = collection.find_one
    ({"emailAddress": emailAddress})

    print(already_exist)
    if already_exist:
        # email not unique
        return jsonify(message='This email already exists'), 409
    else:
        # add the decryption somewhere else
        public_key, private_key = rsa.newkeys(716)
        enc_password = rsa.encrypt(password.encode(),
                                   public_key)

        body = {
            # "_id": 1,
            "firstName": firstName,
            "lastName": lastName,
            "emailAddress": emailAddress,
            "password": enc_password
        }

        collection.insert_one(body)
    #return success message and success code
    return jsonify(message ="User created successfully."), 201