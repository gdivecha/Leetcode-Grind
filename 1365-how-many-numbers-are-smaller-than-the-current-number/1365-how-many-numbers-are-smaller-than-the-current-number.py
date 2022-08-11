class Solution(object):
    def insertionSort(self, array): #ASSUME WE IMPLEMENTED MERGE SORT
        n = len(array)
        for i in range(1,n):
            key = array[i]
            j = i-1
            while(j>=0 and array[j]>key):
                array[j+1] = array[j]
                j-=1
            array[j+1] = key
        
    
    def smallerNumbersThanCurrent(self, nums):
       #Brute force: -> O(n^2)
        #We could evaluate each number n the array and for each number, we can evaluate the rest of the array for smaller numbers
        # ranks = []
        # for num in nums:
        #     sumOfSmaller = 0
        #     for otherNum in nums:
        #         if(otherNum<num):
        #             sumOfSmaller+=1
        #     ranks.append(sumOfSmaller)
        # return ranks
        
       #Efficient Method
        #We could copy this array into a new one and use merge sort to sort the array in O(nlgn) time 
        #Once that has been done, we could make another array O(n) space complexity to give it a number or rank
        #Create a rank variable that starts from 0
        #Increase rank by one each time the value in the array increases and assign it to the respecitve slot in the ranks array
        #Create a new array of size O(n) whcih will be returned eventually
        #Now, we could go through the entire original array and locate each number from the new array within the sorted array and the
        #       index of that number within the sorted array will be used to find the corresponding rank fo that number within the ranks array
        #       this rank will be entered in the array to be returned and so, we will have a time complexity of O(2n) and a space complexity of O(nlgn)
        ranksToReturn = []
        ranks = []
        copyArr = []
        for num in nums:
            copyArr.append(num)
        self.insertionSort(copyArr)
        currentRank = 0
        ranks.append(currentRank)
        for i,num in enumerate(copyArr):
            if(num>copyArr[i-1]):
                currentRank+=1
                ranks.append(currentRank)
            elif(num==copyArr[i-1]):
                ranks.append(currentRank)
                currentRank+=1
        for num in nums:
            ranksToReturn.append(ranks[copyArr.index(num)])
        return ranksToReturn
        
        