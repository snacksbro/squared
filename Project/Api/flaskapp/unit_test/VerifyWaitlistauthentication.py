import unittest
from app import VerifyWaitlistCount

class TestAuthentication(unittest.TestCase):

    def test_verifywaitlistcount(self):
        self.assertEqual(VerifyWaitlistCount(["bob","tom","jerry"], 2),1)
