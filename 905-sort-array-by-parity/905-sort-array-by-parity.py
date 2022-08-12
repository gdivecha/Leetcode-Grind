class Solution(object):
    def sortArrayByParity(self, nums):
        #Brute Force Method:
        # We could use something like insetion sort which moves all the even numbers to the left as long as there are no
        # even integers and as soon as they encounter an even integer, they are placed after it. But, this would take O(n^2)
        # time and since nums.length can have 5000 max numbers, it would take a long time to shift each integer to the right
        # in worst case scenario. However, the space complexity would be O(1)
        # Using this method, the time complexity takes a major hit while preserving a lot of memory
        # The brute force algorithm:
        # n = len(nums)
        # for i in range(1,len(nums)):
        #     key = nums[i]
        #     j = i-1
        #     while(j>=0 and nums[j]%2==1):
        #         nums[j+1] = nums[j]
        #         j-=1
        #     nums[j+1] = key
        # return nums
        #As seen in the example, this method saves more space that 89.71% of the submissions but slower than 95% of the 
        #submissions and so we will implement the code below
        
        
        #Efficient Method:
        # We make two arrays: 1 array for all odd integers and the other for all even integers and we insert the numbers
        # in the order we encounter them in the original array. So, This would take O(n) time to insert all numbers into the
        # array, and O(n) time to go thorugh each array and fill it into an new array in the order we want it.
        # Now, the space complexity we need is O(n) for the two arrays in total and we can use the original array as the
        # final one in which we insert all the new numbers
        # This method is efficient in terms of time complexity but the space complexity takes a hit. But this is a good 
        # tradeoff
        # The efficient algorithm:
        even = []
        odd = []
        for num in nums:
            if(num%2==0):
                even.append(num)
            else:
                odd.append(num)
        for i in range(len(nums)):
            nums.pop()
        for num in even:
            nums.append(num)
        for num in odd:
            nums.append(num)
        return nums
        #This algorithm takes almost the same space but it is more than 10x faster than the previous method
        