class Solution(object):
    
    def insertionSort(self, array):
        n = len(array)
        for i in range(n-2,-1,-1):
            key1 = array[i][1]
            key2 = array[i][0]
            j = i+1
            while(j<=(n-1) and array[j][1]>key1):
                array[j-1][1] = array[j][1]
                array[j-1][0] = array[j][0]
                j+=1
            array[j-1][1] = key1
            array[j-1][0] = key2
                
    
    def maximumUnits(self, boxTypes, truckSize):
        #For this to work, we will need to sort the number of units in terms of laregst to smallest
        #Once the sorted array is produced, we will check whether the total amount of boxes is smaller than the trucksize
        #   If the (total boxes = previousTotal + currentTotalBoxes)of the current type are >= trucksize, then we add the 
        #   (truckSize-(previousTotal))*itsUnits and we add that to the totalUnits
        #   If the (total boxes = previousTotal + currentTotalBoxes)of the current type are < truckksize, then we add the 
        #   currenTotal*itsUnits tot he totalUnits
        #Lets say we implement insertion sort, the timne complexity will be O(n^2) to sort the array and let's say the trucksize
        #   is the worst case meaning trucksize = boxTypes.length, then the runtime to gro through that new array is O(n)
        #   So, the time complexity is O(n^2) + O(n) = O(n^2)
        #The space complexity would be O(1) if we just rearrange the original array
        totalBoxes = 0
        totalUnits = 0
        self.insertionSort(boxTypes)
        for i,boxType in enumerate(boxTypes):
            if((totalBoxes + boxType[0])<(truckSize)):
                totalBoxes += boxType[0]
                totalUnits += ((boxType[0])*(boxType[1]))
            else:
                leftOverBoxes = truckSize - totalBoxes
                totalBoxes += leftOverBoxes
                totalUnits += ((leftOverBoxes)*(boxType[1]))
        return totalUnits
                
                
                