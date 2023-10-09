class Solution(object):


    def longestCommonPrefix(self, strs):
        #Brute Force Method:
        # I would first find the word with the lowest number of characters
        # Then, I would assign that number to a variable called n
        # Now, we need to iterate through each index from 0 up to n within each word one at a time
        # to find out whether each word has that specific common element of character
        # If all words have the same character, we move onto the next index, otherwise, We end up with the last
        # common prefix string
        # Example 1:
        # - strs = ["flower","flow","flight"]
        # - We have a string called longestPrefix = ""
        # - Iterate through all of the words and find the lowest count which is flow with n = 4
        # - I now know that I need to iterate 4 times from 0 to 3
        # - Now, we will pass the set into another method called findCommonCharacter
        # - This method takes in the set, and the current i it is on form 0 to n
        # - It will then check this:
        # - It will find the number of words with a the character in question and tally that with the toal numebr of words in set
        #   - If the numbers arent the same, then the method returns ""
        #   - If the numbers are the same, then the method returns the character
        # - If findCommonCharacter the method returned a "", then we directly return longestPrefix from the main method
        # - If findCommonCharacter the method returned a character, then we add that to the longestPrefix
        # - At the end of the for loop, we return longestPrefix
        # Example 2:
        # - strs = ["dog","racecar","car"]
        # - n = 3
        # - longestPrefix = ""
        # - Iteration 1: i=0 of n=3
        #   - Call findCommonCharacter(strs,i=0)
        #     - Checks number of words in set with character 'd' at i = 0
        #     - That number is assigned to varaible numOfWords = 1 < n=3
        #     - Returns "" back to the main method
        #   - findCommonCharacter returned "" and then longestPrefix is immediately returned as ""
        # Example 3:
        # - strs = ["abc","abcd","abcefg", abcdabc"]
        # - n = len(shortest word) = 3
        # - longestPrefix = ""
        # - Iteration 1: i=0 of n=3
        #   - Call findCommonCharacter(strs,i=0)
        #     - Checks number of words in set with character 'a' at i = 0
        #     - That number is assigned to varaible numOfWords = 4 == len(strs)=4
        #     - Returns "a" back to main method
        #   - findCommonCharacter returned "a" thus we add it to longestPrefix and so, longestPrefix = "a"
        # - Iteration 2: i=1 of n=3
        #   - Call findCommonCharacter(strs,i=1)
        #     - Checks number of words in set with character 'b' at i = 1
        #     - That number is assigned to varaible numOfWords = 4 == len(strs)=4
        #     - Returns "b" back to main method
        #   - findCommonCharacter returned "b" thus we add it to longestPrefix and so, longestPrefix = "ab"
        # - Iteration 3: i=2 of n=3
        #   - Call findCommonCharacter(strs,i=2)
        #     - Checks number of words in set with character 'c' at i = 2
        #     - That number is assigned to varaible numOfWords = 4 == len(strs)=4
        #     - Returns "c" back to main method
        #   - findCommonCharacter returned "c" thus we add it to longestPrefix and so, longestPrefix = "abc"
        # - Return longestPrefix

        longestPrefix = ""
        n = min(len(word) for word in strs)
        for i in range(n):
            commonCharacter = self.findCommonCharacter(strs,i)
            if(commonCharacter==''):
                return longestPrefix
            else:
                longestPrefix += commonCharacter 
        return longestPrefix

    def findCommonCharacter(self, strs, i):
        characterInQuestion = strs[0][i] 
        sizeOfSet = len(strs)
        numOfWords = 0 
        for word in strs:
            if(word[i] == characterInQuestion):
                numOfWords+=1
        if(numOfWords==sizeOfSet):
            return characterInQuestion
        else:
            return ''
