class Solution(object):
    def nextGreaterElement(self, nums1, nums2):
        #Brute Force Method:
        # So we could go throught the entire nums1 array in O(n) time and for each value, we could get the index by doing nums2.index(num) where num in nums1
        # And we could iterate through the entire rest of the array nums2 for the next greatest value which in the worst case would take O(n) time and so,
        # Once the next greater is found, we could assign that value to the num in nums1 array that we used to find the value itself
        # In total we would get O(n^2) time complexity
        #Efficient Method:
        stack = []
        map = {}
        for i in range(len(nums2)):
            while(stack!=[] and nums2[i]>stack[-1]):
                map[stack.pop()] = nums2[i]
            stack.append(nums2[i])
        
        while(stack!=[]):
            map[stack.pop()] = -1
        
        res = []
        for i in range(len(nums1)):
            res.append(map.get(nums1[i]))
        
        return res