class Solution(object):
    def numIdenticalPairs(self, nums):
       #Brute Force Approach -> O(n^2)
        # sumOfGoodPairs = 0
        # for i,num in enumerate(nums):
        #     for otherNum in nums[i+1:]:
        #         if(num==otherNum):
        #             sumOfGoodPairs+=1
        # return sumOfGoodPairs
       #A more efficient approach: -> O(n)
        #In this example we will onsider ! but with addition and so n! = n(n+1)/2
        #every time we encounter a number that exists in a dictionary, we add to the count of that number
        #Like this:
        #[1,2,3,1,1,3]
        #{1:3, 2:0, 3:2}
        #We know in example 2, [1,1,1,1] the answer was 6 because 3! = 6
        # We could implement something similar
        # (2!+1) + 1! = 2+1+1 = 4
        # for [1,1,1,1] we would have had {1:4}
        #                   so we would do 3! = 6
        # for [1,2,4,9,9,1] we would have had {1:2, 2:0, 4:0, 9:2} and we need 2 goodpairs as the answer
        #                   so we would do 1! + 1! = 2
        # for [1,2,2,2,9,1] we would have had {1:2, 2:3, 4:0, 9:2} and we need 5 goodpairs as the answer
        #                   so we would do (1! + 1! = 2) + 2!+1 = 5
        # So, we need to do (value-1)! + 1 for odd values and (value-1)! for even values and then add all up
       #Implementation of Efficient Method
        hashMap = {}
        for num in nums:
            if(num not in hashMap.keys()):
                hashMap[num] = 1
            else:
                hashMap[num] = hashMap.get(num) + 1
        print(hashMap)
        sumOfGoodPairs = 0
        for value in hashMap.values():
            if(value>1):
                sumOfGoodPairs += (value*(value-1)/2)
        return sumOfGoodPairs
            
            
            