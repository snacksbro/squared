
class MessageFilter:
    def __init__(self, body, userID, username):
        self.body = body
        self.userID = userID
        self.username = username

def msg_is_clean( body, userID, username):	# Method to censor chat messages
    badWords = ["bad", "word"]
    censoredBody = []
    print(body)
    msgBody = body
    msgBody = msgBody.split(" ")
    for word in msgBody:
        if word in badWords:
            censoredBody.append(len(word) * "*")
            #failed the test so return false
            return False
        else:
            censoredBody.append(word)

            return True
        #print(" ".join(censoredBody))
