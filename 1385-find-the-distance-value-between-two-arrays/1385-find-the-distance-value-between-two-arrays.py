class Solution(object):
    def findTheDistanceValue(self, arr1, arr2, d):
        #Brute Force Method:
        # Like the sample shows, we can count this by running an O(n) time for loop for each value in the O(m)
        # values that exist in the first array
        # This means it would taje O(mn) time to run this operation
        #Is there a better approach?
        # We could sort both arrays but it would take even longer in worst case scenarios
        distanceVal = 0
        for i in arr1:
            isValid = True
            for j in arr2:
                if(abs(i-j)<=d):
                    isValid = False
                    break
            if(isValid):
                distanceVal+=1
        return distanceVal
        