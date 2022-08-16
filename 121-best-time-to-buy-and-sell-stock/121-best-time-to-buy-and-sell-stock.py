class Solution(object):
    
    def insertionSort(self,nums,indices):
        n = len(nums)
        for i in range(1,n):
            key = nums[i]
            index = indices[i]
            j = i-1
            while(j>=0 and nums[j]>key):
                nums[j+1] = nums[j]
                indices[j+1] = indices[j]
                j-=1
            nums[j+1] = key
            indices[j+1] = index
        
    
    def maxProfit(self, prices):
        #Brute Force Method:
        # We could iterate through each number within the array in O(n) time and for each number, we could find the maximum profit 
        # by evaluating it with the rest of the numbers on the right of it which would take O(n-1) time each time
        # Each time the current number is subtracted from each number in the rest of the array, we can update the current counter
        # Then, once the rest of the array has been traverse, before moving onto the next current number, we must update the finalMax
        # by checking whether teh currentMax is greater than the final Max. If yes, then updatem otherwise move on.
        # This would take O(n^2) time in total while the space complexity would remain O(1)
        # if(prices==None and prices==[]):
        #     return 0
        # elif((len(prices)>=1)and(len(prices)<=(10**5))):
        #     finalMax = 0
        #     for i in range(len(prices)-1):
        #         currentMax = 0
        #         for j in range(i+1,len(prices)):
        #             if(prices[j]-prices[i]>currentMax):
        #                 currentMax = prices[j] - prices[i]
        #         if(finalMax<currentMax):
        #             finalMax = currentMax
        #     return finalMax
        #The time limit for this exceeded but it passed 198/211 tests
        
        #Efficient Approach:
        # We could sort the array from [7,1,5,3,6,4] to [1,3,4,5,6,7] and have its indices as well [1,3,5,2,4,0]
        # We assign variable for the last index of the array = j
        # Once we get the sorted array, we can go through each element from left to right and for each element, we check whether the indices[j]>indices[i]
        # if it is that is our first max and the final answer
        # if yes, we reduce j by 1
        # We do this until the middle of the arry is reached because after that, the mx becomes negative
        # This method should take O(n^2) if insertions ort is used. IT would take O(nlgn) if merge sort were used + O(n/2) to traverse through the new array
        # Space complexity is O(2n) because we make a new array of the same size which gets merge sorted + one more array that holds the respective indices
        # sortedArr = []
        # indices = []
        # for i,price in enumerate(prices):
        #     sortedArr.append(price)
        #     indices.append(i)
        # self.insertionSort(sortedArr,indices)
        # n = len(prices)
        # largestIndex = n-1
        # i = 0
        # print(sortedArr)
        # print(indices)
        # maximum = 0
        # while(i<largestIndex):
        #     while(largestIndex>i):
        #         if(indices[largestIndex]>indices[i]):
        #             if(maximum<sortedArr[largestIndex]-sortedArr[i]):
        #                 maximum = (sortedArr[largestIndex]-sortedArr[i])
        #         largestIndex-=1
        #     i+=1
        #     largestIndex = n-1
        # return maximum
        #Same as before     
            
        #ONE PASS - THEIR SOLUTION
        min_price = float('inf')
        max_profit = 0
        for i in range(len(prices)):
            if prices[i] < min_price:
                min_price = prices[i]
            elif prices[i] - min_price > max_profit:
                max_profit = prices[i] - min_price
                
        return max_profit