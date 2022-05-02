import unittest

from controller.help.helper import translate_square


class TestAuthentication(unittest.TestCase):

    def test_login_func(self):
        self.assertEqual(translate_square("2a"),[2,0])
