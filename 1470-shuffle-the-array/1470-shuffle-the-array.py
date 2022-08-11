class Solution(object):
    def shuffle(self, nums, n):
        #[2,5,1,3,4,7] and n=3
        # 0 1 2 3 4 5
        # n/2 thus, 6/2 = 3
        # we only need to move 3 and 4 and so, we disregard the last one
        #[2,3,5,1,4,7]
        # x y x x y y -> 3 moved 2 places to the left
        #[2,3,5,4,1,7]
        # x y x y x y -> 4 moved 1 place to the left
        # and 7 will move 0 places to the left
        # So, the number by which the ys move to the left decreases by one and that number starts from n-1
        # Each time it is moved, the rest of the numbers are shifted ot the right by one
        # So, how many times does this process happen? 
        # In the first example, 2 numbers were moved when n=3
        # In the second example, 3 numbers were moved when n=4
        # So, the process will be a for loop of n inclusive as last number won't move because the places it should move becomes 0
        count = n-1
        for i in range(n,len(nums)-1):
            key = nums[i]
            j=i-1
            currentCount = 0
            while(currentCount<count):
                nums[j+1] = nums[j]
                j-=1
                currentCount+=1
            nums[j+1] = key
            count-=1
        return nums
        