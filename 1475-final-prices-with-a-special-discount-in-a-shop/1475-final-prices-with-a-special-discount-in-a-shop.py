class Solution(object):
    def finalPrices(self, prices):
        #Brute Force Method:
        # We could go through each element of the arrayin O(n) time and for each element, we can go through the rest of the array array[i+1:]
        # and check whether the prices[j] <= prices[i] is true. The first number for this condition to be true will be subtracted from prices[i]
        # and returned as the value in prices[i] and if no such number exists, we return the original i number
        # but this would take O(n^2) time to function in worst case scenario
        # The good news is that the space complexity is O(1)
        #Efficient Approach:
        # We could sort the array and make another array that keeps track of the indices that each number in the sorted array was in within the
        # original array. Then, we could through the entire original array once again and we can find the index of the number left of the original         # number in the sorted array and us ethat index to target the prices[j] number within the original array, subtract it from prices[i] and 
        # voila. This would result to O(nlgn) time complexity and O(2n) space complexity
        #Let's go with the brute force method
        for i,price in enumerate(prices[0:-1]):
            for j in range(i+1,len(prices)):
                if(price>=prices[j]):
                    prices[i] = price - prices[j]
                    break
        return prices
        