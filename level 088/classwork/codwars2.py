#2) დარეგისტრიდით Leetcode-ზე github-ით და შეასრულეთ ამოცანა https://leetcode.com/problems/two-sum/?envType=problem-list-v2&envId=array
class Solution(object):
    def twoSum(self, nums, target):
        """
        :type nums: List[int]
        :type target: int
        :rtype: List[int]
        """
        seen = {}

        for i, num in enumerate(nums):
            rand = target - num

            if rand in seen:
                return [seen[rand], i]

            seen[num] = i
            
        