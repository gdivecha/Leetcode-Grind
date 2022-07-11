class Solution(object):
    def arraySign(self, nums):
        n = len(nums)
        if((n>=1)and(n<=1000)):
            isValid = 0
            for num in nums:
                if((num<-100)or(num>100)):
                    isValid+=1
                    break
            if isValid==0:
                negativeCount = 0
                for num in nums:
                    if num<0:
                        negativeCount+=1
                    elif num==0:
                        return 0
                if(negativeCount%2==0):
                    return 1
                return -1
        