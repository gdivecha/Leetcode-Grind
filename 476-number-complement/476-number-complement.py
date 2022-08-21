class Solution(object):
    
    def convertToBinary(self,num):
        originalBase2 = ""
        while(num>0):
            multiple = num//2
            originalBase2 += str(num%2)
            num = multiple
        return originalBase2
    
    def getComplement(self,originalBase2):
        complementBase2 = ""
        for character in originalBase2:
            if(character=='1'):
                complementBase2 += '0'
            else:
                complementBase2 += '1'
        return complementBase2
    
    def getFinalComplementNum(self,complementString):
        finalNum = 0
        for i in range(len(complementString)):
            if(complementString[i]=='1'):
                finalNum += (2**i)
        return finalNum
    
    def findComplement(self, num):
        #First, we will need to convert the number provided into its binary equivalent
        # We will use the following approach:
        # 2 | 5 | 1
        # 2 | 2 | 0
        # 2 | 1 | 1
        #Then, we read from bottom up
        # So, we need to run a while loop until the num>0
        # We need to find the multiple that when divided by 2, will output the current num or maximum number
        # lower than that num. We take that multiple, and multiple by 2 and then subtarct that fromt he current num
        # Which we then add to a base 2 string
        # Once this has been done, we will see a string that contains least significant digits to most from left to 
        # right
        # We will also create another base 2 string for the complement of the current base2string
        # We traverse through the original base2 string from the last element to firts element and as we do,
        # if we encounter a 1 in the original, we add a 0 to the new base2
        # otherwise we add a 1 to the new base2
        # Once that has been done, we will now go thorugh the new string one by one fromt he last elemebt to the
        # first element and as we go, we will say finalNum += math.pow(2,count)
        # where count started from 0 and it increases by 1 each time we move to the next character in teh stirng
        # too the left
        
        originalBase2 = self.convertToBinary(num)
        complementBase2 = self.getComplement(originalBase2) #A small modification:
        # here, the string that we have for the complement is lest significant on the left, which can make it
        # easier to find the decimal representation of this complement
        return self.getFinalComplementNum(complementBase2)
        
        # This procedure takes O(lgn) time to find the original binary string
        # + O(n) time to convert to the complement
        # + O(n) time to get the final NUmber
        # = O(n) time complexity in total
        # The space taken is around O(n) for original string + O(n) time to convert and O(1) for final num
        # = O(n) space complexity in total
        