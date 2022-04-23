class Helper:

    '''
    functions that could be resused throughout the application
    '''
def string_parser(StringToBeParsed):  # Parses string for verification
    ParsedList = StringToBeParsed.split(",")
    return ParsedList

# translateSquare: Takes in a square ("2a" for example) and returns an index ([2, 0] for example)
def translate_square(square):
	alphabet = "abcdefghijk"
	xpos = square[0]
	ypos = square[1]
	if (len(square) > 2):
		# Case for double-digit numbers
		xpos = xpos + square[1]
		ypos = square[2]
	# TODO: Make something like this into a test later
	#print("GOT " + square)
	#print("SENT " +str([int(xpos), alphabet.index(ypos)]))
	return [int(xpos), alphabet.index(ypos)]

