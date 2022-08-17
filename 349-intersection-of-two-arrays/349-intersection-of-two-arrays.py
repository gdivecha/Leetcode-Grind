class Solution(object):
    def intersection(self, nums1, nums2):
        #Brute Force Approach:
        # We will find whichever array is smaller and we will go through each of its elements in O(n) time
        # and check whether that element exists in the other array and if it does, we add it to a new array if it doesnt exist in that already
        # This will take O(n) time complexity and O(n) space complexity in worst case scenarios
        finalArr = []
        n = len(nums1)
        m = len(nums2)
        smallerArrLen = 0
        smallerArr = None
        biggerArr = None
        if(n<m):
            smallerArrLen = n
            smallerArr = nums1
            biggerArr = nums2
        else:
            smallerArrLen = m
            smallerArr = nums2
            biggerArr = nums1
        for num in smallerArr:
            if(num in biggerArr and num not in finalArr):
                finalArr.append(num)
        return finalArr
            
            