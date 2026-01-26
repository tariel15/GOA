#https://leetcode.com/problems/palindrome-number/description/
class Solution(object):
    def isPalindrome(self, x):
        """
        :type x: int
        :rtype: bool
        """
        if x < 0:
            return False

        s = str(x)
        return s == s[::-1]
