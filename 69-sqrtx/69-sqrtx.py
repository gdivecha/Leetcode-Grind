class Solution(object):
    def mySqrt(self, x):
        #Brute Force Method:
        # Since we want to find the square root if x, I am assuming we need to use the * multiplication operator
        # I couldn't be more wrong
        if x < 2:
            return x
        
        left = self.mySqrt(x >> 2) << 1
        right = left + 1
        return left if right * right > x else right
        