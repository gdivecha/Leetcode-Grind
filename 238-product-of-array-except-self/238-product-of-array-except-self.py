class Solution(object):
    def productExceptSelf(self, nums):
        #Brute Force Approach:
        # We could just take each element in O(n) time and for each, we multiply the rest of the numbers in O(n) time which would lead to O(n^2) time
        # To reduce this O(n^2) Time to O(n) time we will need to convert the O(1) space to O(n) space
        #Efficient Approach:
        # We could just traverse through the entire array multiplying each value to the current value
        # that way, we the total multiplication value will remain
        # Now, we can go through the array once again and for each value we check, we divide the total multiplication by that value
        # Now, to ensure that we take 0s into account, we will check whether there are more than 1 zeros
        # If the total number of 0s is 1, then we will have two variables: 1 that keeps track of the total multiplication based on the values 
        # that did not conatin 0
        # and 2 that is just 0
        # Now, when we iterate through each element again, if we encounter a nonzero value we will multiply by 0
        # And if we encounter a zero, we output the total zonzero multiplication
        # If teh number of 0s is > 1, then there is no way the putput for that index would be nonzero and so all values we have will be 0
        totalMultiple = 1
        totalZeros = 0
        finalArr = []
        for num in nums:
            if(num!=0):
                totalMultiple*=num
            else:
                totalZeros+=1
        if(totalZeros==0):
            for num in nums:
                finalArr.append(totalMultiple/num)
        elif(totalZeros==1):
            for num in nums:
                if(num!=0):
                    finalArr.append(0)
                else:
                    finalArr.append(totalMultiple)
        elif(totalZeros>1):
            for num in nums:
                finalArr.append(0)
        return finalArr
            
        