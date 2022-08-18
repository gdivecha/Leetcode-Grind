class Solution(object):
    
    def getSum(self,nums):
        sumVal = 0
        for num in nums:
            sumVal+=num
        return sumVal
    
    def maxSubArray(self, nums):
        #Brute Force Approach:
        # We could just create all possible subarrays of the given array and find the max of each of them to 
        # find the maximum max
        # But that would simply take too long
        #Approach #2:
        # Since we are only looking at the contiguous sequences, we could star off by acquiring the total number of elements
        # We could run a O(n) time for loop that runs through each element once and adds it up and assigns it to a variable
        # called max
        # Then we could have a variable starting from n-1 where n = len(original array)
        # and this one goes all the way to 1 and heres how:
        # Now, what we want is we start from i = 0 adn go to i = n-1
        # We also have a var that stores an array
        # We also need a separate method that calculates the sum of a given array
        # at i = 0, we start with getSum([i:j]) where j starts from n-1 and goes to i+1
        # For each time this happens we check whether the sum of the array is greater than the currentmax
        # then, we move onto the next i, then again, we pass an array [i:j] and go to [i:i+1]
        # and so on. This will occur until i == n-1
        # Each time also update the max, we will also update the array var and store the one that has maximum sum
        # totalMax = -1*(10**4)
        # # maxArr = []
        # n = len(nums)
        # for i in range(n):
        #     for j in range(n-i):
        #         currentSum = self.getSum(nums[i:(n-j)])
        #         if(currentSum>totalMax):
        #             totalMax = currentSum
        #             # maxArr = nums[i:n]
        # return totalMax
        #This algorithm is O(n^2) in time complexity
        # This algo works for 199/209 of the test cases
        
        #The solution shows a similar algorithm:
        # class Solution:
#         def maxSubArray(self, nums: List[int]) -> int:
#             max_subarray = -math.inf
#             for i in range(len(nums)):
#                 current_subarray = 0
#                 for j in range(i, len(nums)):
#                     current_subarray += nums[j]
#                     max_subarray = max(max_subarray, current_subarray)
#             return max_subarray
        
        #Their Algorithm:
        # Initialize our variables using the first element.
        current_subarray = max_subarray = nums[0]
        
        # Start with the 2nd element since we already used the first one.
        for num in nums[1:]:
            # If current_subarray is negative, throw it away. Otherwise, keep adding to it.
            current_subarray = max(num, current_subarray + num)
            max_subarray = max(max_subarray, current_subarray)
        
        return max_subarray