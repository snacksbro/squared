import random
from flask import jsonify

class GamePlay:

    '''
    Game play related functions
    '''
def assign_players(player_list,player_count):
    ColorList = ["red", "blue", "yellow", "green"]
    for i in range(player_count):
        x = random.randint(0, len(ColorList) - 1)
        player_list[i] = player_list[i] + "," + ColorList[x]
        ColorList.remove(ColorList[x])
    return player_list

def random_list_generator(random_list, item_count):
    item_list = []

    for i in range(item_count):
        list_integer = random.randint(0, len(random_list) - 1)
        item_list.append(random_list[list_integer])
        random_list.remove(random_list[list_integer])
    list_integer.sort()

    return jsonify(item_list)
