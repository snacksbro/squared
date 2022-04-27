import unittest

from controller.authentication.authentication import login_handler, register_user


class TestAuthentication(unittest.TestCase):

    def test_login_func(self):
        self.assertEqual(login_handler(email_address="test@gmail.com",password="Passowrd"),False)