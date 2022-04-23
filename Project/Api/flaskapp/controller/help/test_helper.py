from helper import string_parser, translate_square

# Tests
def test_translate_square():
	assert translate_square("2a") == [2, 0] # Testing if translate_square can correctly parse "2a"
	# Hang on, isn't the board 11x11? How would that work? Perhaps a test is in order here
	# This is the essence of tests. For all our edgecases like that

def test_string_parser():
	# Feel free to fill this in
	pass

""" How to test (See above for an example
1. Make a new python file called "test_" followed by the name of the python file containing your functions to be tested
2. Write a version of the function in question prepended with "test_"
3. Write "assert <function>(parameter) == <what it should return>"
4. Execute by calling pytest in the directory (get this via pip3 install pytest)
	NOTE: This is NOT a dependency, meaning there's no need to import it. Think of it as it's own program you're grabbing via pip
5. Pytest will tell you which ones fail. Ideally they should all pass
"""

