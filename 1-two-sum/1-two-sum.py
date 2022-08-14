class Solution(object):
    def twoSum(self, nums, target):
        #Brute Force Method:
        # We could go through the entire array in O(n) time and for each 
        # number, we could do requiredNum = (target-thatNumber) and traverse
        # through the rest of the array and try to find the requireNum
        # If that number exists, we return the index of both
        #Efficient Approach:
        # We could go through the entire array in O(n) time and if that value
        # doesn't exist in the keys of a dictionary, then we add it as a key
        # and the index as the value
        # If the key exists, then we append the index value to the value array
        # Once this has been done, we could go through the dictionary key
        # by key and subtract that key from the target and if the
        # result = target - currentKey exists in the keys, then we find it
        # and output the index
        hashMap = {}
        for i,num in enumerate(nums):
            if(num not in hashMap.keys()):
                hashMap[num] = [i]
            else:
                hashMap.get(num).append(i)
        indices = []
        for key,value in hashMap.items():
            differenceRequired = target - key
            index = value.pop()
            if((differenceRequired in hashMap.keys()) and (hashMap.get(differenceRequired)!=[])):
                indices.append(index)
                indices.append(hashMap.get(differenceRequired).pop())
                break
            # value.append(index)
        return indices