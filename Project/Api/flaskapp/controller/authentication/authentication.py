
#setting up the mongodb
from pymongo import MongoClient
from flask import jsonify
import constant.constant as constant
#used for encryption and decryption
from Crypto.Cipher import AES

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

            decrypted_password =  decrypt(key= constant.ENCRYPT_KEY, ciphertext= user["password"]).decode("utf-8")
            print("Password")
            print(str(decrypted_password))
            if decrypted_password == password:

                #should send back token and sucess message
                #TODO should return usertoken and add JWT
                return True
            else:
                return False

    # TODO need to set a check if empty, not working right now

    # TODO add JWT after
   #print(result)

    # doc = result
    # json_list = json.dumps(doc, default=json_util.default)


def register_user(firstName, lastName, emailAddress, password):
    db = cluster["SquaredDev"]  # database name
    collection = db["user"]
    result = list(collection.find({"emailAddress": str(emailAddress)}).limit(1))

    if len(result) == 0:
        print("Empty")
        # so it doesnt exist so create the record
        # add the decryption somewhere else
        #public_key, private_key = rsa.newkeys(716)
        #enc_password = rsa.encrypt(password.encode(),
                                   #public_key)
        print(str(password))
        enc_password = encrypt(key= constant.ENCRYPT_KEY, plaintext= str(password))
        #myEncryptedMessage = cryptocode.encrypt("I like trains", "password123")
        print(enc_password)
        body = {
            # "_id": 1,
            "firstName": firstName,
            "lastName": lastName,
            "emailAddress": emailAddress,
            "password": enc_password
        }

        collection.insert_one(body)
        print("Successfully registered")

        return True
    else:
        print("Not Empty")
        #already exist so cant be created so abort
        return False  # jsonify(message='This email already exists'), 409


#encryption not for production use
def encrypt(key, plaintext):
    obj = AES.new(key, AES.MODE_CBC, constant.ENCRYPT_PHRASE)
    ciphertext = obj.encrypt(plaintext)

    return ciphertext

def decrypt(key, ciphertext):
    obj2 = AES.new(key, AES.MODE_CBC,  constant.ENCRYPT_PHRASE)
    plaintext = obj2.decrypt(ciphertext)

    return plaintext