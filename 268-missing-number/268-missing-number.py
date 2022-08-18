class Solution(object):
    def missingNumber(self, nums):
        #Brute Force Method:
        # We could sort the array and for each number, we check whether the incrementer matched the current num
        # If it doesn't, we return that otherwise move on
        # O(n^2) for sorting
        # O(n) for space
        
        #Efficient Method:
        # So, in the examples I notice that the numbers should be between 0 and n and so,
        # I will runa  for loop that goes from i = 0 to i = len(nums)
        # and for each i, we will check whether it exists within the array and if it does, we move onto next i
        # otherwise, we return the missing i and that is it
        # O(n) for time
        # O(1) for space
        for i in range(len(nums)+1):
            if i not in nums:
                return i
        