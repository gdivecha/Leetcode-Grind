import math

class Solution(object):
    def reverse(self, x):
        isNegative = False
        if(x<0):
            isNegative = True
        numString = str(abs(x))
        reverseString = ""
        for i in range(len(numString)-1,-1,-1):
            reverseString+=numString[i]
        reverseNum = int(reverseString)
        if(isNegative):
            reverseNum*=(-1)
        if((reverseNum>=(-2**31))and(reverseNum<=(2**31-1))):
            return reverseNum
        else:
            return 0