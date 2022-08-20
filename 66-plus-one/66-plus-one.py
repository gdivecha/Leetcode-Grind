class Solution(object):
    def plusOne(self, digits):
        #Brute Force Method:
        # Lets look at the following example:
        #
        #       0 0 0
        #       1 2 3
        #   +       1
        #  ___________
        #       1 2 4
        #  ___________
        # What we can do if we can start with a carryOver of 0
        # The number to be displayed in this case (4) would be 4%10
        # The next carryOver = (3+1)//10 = 0
        # We keep propogating this from right to left
        # As we go we need to append to an array that holds the final answer
        # How about we used the same array?
        n = len(digits)
        sumTot = digits[n-1]+1
        carryOver = sumTot//10
        digits[n-1] = sumTot%10
        for i in range(n-2,-1,-1):
            sumTot = carryOver+digits[i]
            carryOver = sumTot//10
            digits[i] = sumTot%10
        if(carryOver>0):
            digits.insert(0,carryOver)
        return digits