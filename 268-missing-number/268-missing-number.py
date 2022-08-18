class Solution(object):
    def missingNumber(self, nums):
        #Efficient Method:
        # So, in the examples I notice that the numbers should be between 0 and n and so,
        # I will runa  for loop that goes from i = 0 to i = len(nums)
        # and for each i, we will check whether it exists within the array and if it does, we move onto next i
        # otherwise, we return the missing i and that is it
        for i in range(len(nums)+1):
            if i not in nums:
                return i
        