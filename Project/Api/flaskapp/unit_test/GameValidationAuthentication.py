import unittest

from controller.validation.gamevalidation import is_adjacent


class TestAuthentication(unittest.TestCase):

    def test_isadjacent_func(self):
        self.assertEqual(is_adjacent([1,1], [1,2]),True)
