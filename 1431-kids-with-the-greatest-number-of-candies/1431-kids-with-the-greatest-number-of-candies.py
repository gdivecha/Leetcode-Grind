class Solution(object):
    def kidsWithCandies(self, candies, extraCandies):
       #Brute Force Method:
        #We can compare each child's candies to teh rets of the array each time meaning O(n^2) complexity
       #Efficient Approach:
        #We wil go through the array once in O(n) time and find the child with the maximum number of candies and we will assign this one to a variable
        # However, we will also need to find the 2ns max for when that kid with the max num of candies is being evaluated
        # so, we will go through the array in O(n) complexity
        # then again we will go through the array one more time but this time, we will add the extra candies to one kid each time and compare to the max
        # if it is greater than max, then return true
        result = []
        maximumIndex = 0
        secondMaxIndex = 0
        for i,candy in enumerate(candies):
            if(candies[maximumIndex]<candy):
                maximumIndex = i
        for i,candy in enumerate(candies):
            if(candies[secondMaxIndex]<candy and i!=maximumIndex):
                secondMaxIndex = i
        # print(maximumIndex)
        # print(secondMaxIndex)
        for i,candy in enumerate(candies):
            if(i!=maximumIndex):
                if((candy+extraCandies)>=candies[maximumIndex]):
                    result.append(True)
                else:
                    result.append(False)
            else:
                if((candy+extraCandies)>=candies[secondMaxIndex]):
                    result.append(True)
                else:
                    result.append(False)
        return result