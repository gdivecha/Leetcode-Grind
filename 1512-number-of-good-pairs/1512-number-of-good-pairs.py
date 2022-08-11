class Solution(object):
    def numIdenticalPairs(self, nums):
       #Brute Force Approach
        sumOfGoodPairs = 0
        for i,num in enumerate(nums):
            for otherNum in nums[i+1:]:
                if(num==otherNum):
                    sumOfGoodPairs+=1
        return sumOfGoodPairs