class Solution(object):
    def searchInsert(self, nums, target):
        #Brute Force Method:
        # So we will be using binary trees to solve this question
        # Or rather we will be implementing the same sort of fromat as binary ttrees
        # What we need to do is when we get an array, and teh target number,
        # We will need to first find the length of the array
        # We will repeatedly divide the length in half
        # For example, we have [1,3,5,6] length = 4
        # 4/2 = 2 thus, we have i = 2 which is the index of 5
        # We know that 5>4 so now, we need to look at teh left half of the array only if the number
        # to teh left of 5 is > 4
        # If it is 4 or less than 4, then, we do the following:
        #   If the left of 5 = 4, then we output its index
        #   If the left od 5 < 4, then we output 4's index
        # If the number the left 5 > 4, then we call the same method on the left half
        # Now, let's say you have [1,3,5,6] and target = 7
        # Then, in this case, you do length = 4 then 4/2 = 2
        # i = 2 and the element = 5 again. Now, 5<7 so we need to look at the right half of the array
        # So, now thesubarray we focus on is [5,6]
        # Well, We compare the 7 to 6, and we see that 6<7 and so, the 7 should be placed to the right of 6
        # Now, let's say we had [3,5,8,10,11,14] and you were looking for 13
        # length = 6
        # 13<14 so we actually ahve to do the division by 2
        # Thus, i = 6/2 = 3
        # Thus, at i = 3, the element is 10
        # 10<13 and so the subarray we look at is [10,11,14]
        # We take length = 3 then i = 3/2 = 1
        # mid + 1 = 11 and so, we see that 11<13 but the right of 11 = 14 and so since 13<14, we say the index would be 5
        n = len(nums)
        currentIndex = 0
        while(n>=1):
            if(nums[(currentIndex+(n-1))]<target):
                return (currentIndex+n)
            elif(nums[(currentIndex+(n-1))]==target):
                return (currentIndex+(n-1))
            elif(nums[currentIndex]==target):
                return currentIndex
            elif(nums[currentIndex]>target):
                return currentIndex
            else:
                midIndex = (currentIndex+(n/2))
                midElement = nums[midIndex]
                if(midElement==target):
                    return midIndex
                elif(midElement>target):
                    if(nums[midIndex-1]<target):
                        return midIndex
                    elif(nums[midIndex-1]==target):
                        return midIndex-1
                    else:
                        n/=2
                elif(midElement<target):
                    if(nums[midIndex+1]>=target):
                        return midIndex+1
                    else:
                        n/=2
                        currentIndex+=n




