class Solution(object):
    def singleNumber(self, nums):
        #Efficient Method #1:
        # will create a hashmap that tracks the repetitions of the numbers within the given array
        # This wil cretae a hashmap of O(n/2) as almost all thenumbers will be repeated twice
        # Once this hashmap is created, we will output the key woth 1 repetition
        # This would take O(n) time and O(n) space
        #Efficient Method #2:
        # We will this time use a stack to approach this problem
        # We will take each number and append it to the stack
        # Since the number we want is solo and the others are repeated twice, when we pop the repeated numbers,
        # only the solo number will prevaila nd that will be our answer
        # This approach would take O(n) time and even tho the array increases each time, only one element prevails once it is done so O(1) space
        stack = []
        n = len(nums)
        if((n>=1)and(n<=(3*(10**4)))):
            for num in nums:
                if(num in stack):
                    stack.pop(stack.index(num))
                else:
                    stack.append(num)
        return stack[0]