class Solution(object):
    
    # def insertionSort(self, array):
    #     n = len(array)
    #     for i in range(1,n):
    #         key = array[i]
    #         j = i-1
    #         while(j>=0 and array[j]>key):
    #             array[j+1] = array[j]
    #             j-=1
    #         array[j+1] = key
    
    def sortedSquares(self, nums):
        #Brute Force Approach:
        # What we can do is square each number in the array and once every number has been squares, we can sort it in increasing order
        # This approach would take O(nlgn) if merge sort is used to sort the array and O(nlgn) space that would be required from the merge sort method
        #Another method:
        # We can square each number as we traverse through the array in O(n) time and for each number, we shift the number to the left by one
        # until a number lower than that selected number is encountered
        # This approach would take O(1) space complexity but O(n^2) time complexity for worst case scenario where each number needs to be shifter O(n) times
        #Let's stick to a much more straight forward approach and get the square for each number as we go through the array in O(n) time and then sort using 
        # Insertion sort. This would take O(n^2) time and O(1) space
        
        # for i,num in enumerate(nums):
        #     nums[i] = num**2
        # self.insertionSort(nums)
        # return (nums)
        #So, this approach takes excess time for large arrays and so it worked 130/137 test cases
        
        #Efficient Approach:
        # So, since the original array is in nondecreasing order, we will first check for the first index with a non-negative value
        # if there is no negative value, we will simply square all the numbers within the original aray and return that
        # if there is a negative value, we will append the square of these values to a new array until a non-negative value is encountered 
        # We will then append the squares of the positive values thereafter to a new array as well
        #  or the array index reaches the last one
        # Now, we will have 3 arrays:
        #  Array with squares of negative values: will be in a nondecreasing order like [16,1]
        #  The original array: [-4,-1,0,3,10]
        #  Array with squares of 0 and ositive values: will be in a nondecreasing order like [0,9,100]
        #Now, we will go from i = 0 to len(original array)
        # k = len(one)-1 This will the be the iterator for array one - negative squares
        # j = 0 This will be the iterator for array two - positive squares
        # k will decrease by 1 each time
        # j with increase by 1 each time
        #This approach takes O(n) time and space
        negativeSquares = []
        otherSquares = []
        for num in nums:
            if(num<0):
                negativeSquares.append(num**2)
            else:
                otherSquares.append(num**2)
        if(len(negativeSquares)==0):
            return otherSquares
        elif(len(otherSquares)==0):
            tempArr = []
            for i in range(len(negativeSquares)-1,-1,-1):
                tempArr.append(negativeSquares[i])
            return tempArr
        else:
            # print(negativeSquares)
            # print(otherSquares)
            k = len(negativeSquares)-1
            j = 0
            nums = []
            indicator = 0
            while(len(nums)<=(len(negativeSquares)+len(otherSquares))):
                if(otherSquares[j]<=negativeSquares[k]):
                    nums.append(otherSquares[j])
                    j+=1
                    if(j==(len(otherSquares))):
                        indicator = 1
                        break
                else:
                    nums.append(negativeSquares[k])
                    k-=1
                    if(k==-1):
                        indicator = 2
                        break
            if(indicator==1):
                for i in range(k,-1,-1):
                    nums.append(negativeSquares[i])
            elif(indicator==2):
                for i in range(j,len(otherSquares)):
                    nums.append(otherSquares[i])
        return nums
        
        