class Solution(object):
    def __init__(self):
        self.numOperations = 0
        
    def subtractSmallest(self, nums):
        zeroCount = 0
        for num in nums:
            if(num==0):
                zeroCount+=1
        if(zeroCount!=len(nums)):
            minimum = 100
            for num in nums:
                if(num<minimum and num!=0):
                    minimum = num
            for i,num in enumerate(nums):
                if(num!=0):
                    nums[i] = num - minimum
            self.numOperations += 1
            self.subtractSmallest(nums)
            print(nums)
            
    def minimumOperations(self, nums):
        # if(len(nums)<=1):
        #     return 0
        self.subtractSmallest(nums)
        return (self.numOperations)