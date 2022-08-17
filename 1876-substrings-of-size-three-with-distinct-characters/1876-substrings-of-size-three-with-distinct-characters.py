class Solution(object):
    def countGoodSubstrings(self, s):
        #Brute Force Method:
        # So, I notice that a substring in this case is a string of length 3 that follows the contiguous formation of characters in the original string
        # So, we will not have to make every possible permutation of substrings in the original string.
        # We can just pass or traverse the string once and create an array of substrings each time
        # Once this array has been created, we can check for each substring, the number of occurrences of characters.ArithmeticError
        # For this we can use te hashmap, but we willnot overcomplicate it with that data structure
        # We will simply use the .count() method in python for each character we encounter and the first charcter.count() 
        # that yields a number > 1 will make the string bad, otherwise it will be good
        # This approach will take O(n) time to make the array of substrings and O(1) time for each substring, in total this shoudl take O(n) time complexity
        # The space complexity we will have is O(n) * O(3)
        #Efficient Method:
        # We could just run through this string once and for each time we check a substring, we create one substringa nd append it to the final array
        # We will do this:
        numOfGood = 0
        if(s!=None and s!=""):
            n = len(s)
            if((n>=1)and(n<=100)):
                for i in range(n-2):
                    currentString = []
                    currentString.append(s[i])
                    if(s[i+1] in currentString):
                        continue
                    else:
                        currentString.append(s[i+1])
                    if(s[i+2] in currentString):
                        continue
                    else:
                        numOfGood += 1
        return numOfGood
        