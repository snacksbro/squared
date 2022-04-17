


class GameValidation:

    '''
    Purpose: to handle the game validation logic
    '''
#is_adjacent: Returns true if squares are adjacent on the board, false otherwise

def is_adjacent(coord1, coord2):
    # Making a list of every adjacent square
    possibilities = [
        [coord1[0] + 1, coord1[1]],  # right
        [coord1[0], coord1[1] + 1],  # down
        [coord1[0] - 1, coord1[1]],  # left
        [coord1[0], coord1[1] - 1],  # up
    ]

    # Checking if any of them "hit" coord2
    for possibility in possibilities:
        # If so, return True
        if possibility[0] == coord2[0] and possibility[1] == coord2[1]:
            return True
    # If not, return False
    return False