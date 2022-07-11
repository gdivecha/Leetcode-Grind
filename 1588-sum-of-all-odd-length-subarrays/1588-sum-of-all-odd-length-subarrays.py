class Solution(object):
    def sumOddLengthSubarrays(self, arr):
        sum = 0
        n = len(arr)
        if((n>=1)and(n<=100)):
            isValid = 0
            for num in arr:
                if((num<1)or(num>1000)):
                    isValid+=1
                    break
            if isValid==0:
                count = n
                for repetition in range(1,n+1):
                    if(repetition%2==1):
                        listOfSubArrays = []
                        additions = 0
                        for i in range(count):
                            subArray = arr[i:i+repetition]
                            listOfSubArrays.append(subArray)
                        for subarr in listOfSubArrays:
                            for num in subarr:
                                sum+=num
                        count-=2
        return sum
                            