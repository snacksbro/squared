import unittest
from app import WaitlistJoin

class TestAuthentication(unittest.TestCase):

    def test_joinwaitlist(self):
        self.assertEqual(WaitlistJoin([],"Jerry"),["Jerry"])
