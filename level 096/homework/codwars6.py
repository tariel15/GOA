#https://leetcode.com/problems/count-and-say/description/
class Solution(object):
    def countAndSay(self, n):
        """
        :type n: int
        :rtype: str
        """
        # Start with the base case
        result = "1"

        for _ in range(n - 1):
            result = self.nextSequence(result)

        return result

    def nextSequence(self, s):
        """Generate the next count-and-say string from s."""
        answer = ""
        i = 0

        while i < len(s):
            count = 1
            # Count identical consecutive digits
            while i + 1 < len(s) and s[i] == s[i + 1]:
                i += 1
                count += 1
            # Append "count" + "digit"
            answer += str(count) + s[i]
            i += 1

        return answer