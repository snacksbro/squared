import unittest
from app import LeaveWaitlist

class TestAuthentication(unittest.TestCase):

    def test_joinwaitlist(self):
        self.assertEqual(LeaveWaitlist(["Jerry","Tom"],"Jerry"),["Tom"])
