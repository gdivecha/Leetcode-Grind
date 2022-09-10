class Solution(object):
    def countBinarySubstrings(self, s):
        #Brute Force Approach:
        # To start off at the first index and count how many times that first value repeats following that first value
        # and then as soon as I encounter a different value, I try to find the same number of occurence for that as the other value
        #Efficient Way Maybe?
        # We could seperate the string into a collection of substrings in the order we encounter them
        # Example 1:
        # 00110011 -> 00, 11, 00, 11 in O(n) time
        # How many among 00 and 11 = 0011 and 01 = 2 occurrences
        # How many among 11 and 00 = 1100 and 10 = 2 occurrences
        # How many among 00 and 11 = 0011 and 01 = 2 occurrences
        # Example 2:
        # 10101 -> 1, 0, 1, 0, 1
        # How many among 1 and 0 = 10 = 1 occurrence
        # How many among 0 and 1 = 01 = 1 occurrence
        # How many among 1 and 0 = 10 = 1 occurrence
        # Example #3:
        # 0110111 -> 0, 11, 0, 111
        # How many among 0 and 11 = 01 = 1 occurrence
        # How many among 11 and 0 = 10 = 1 occurrence
        # How many among 0 and 111 = 01 = 1 occurrence
        # It would have been different if we didn't just consider consecutive 0s and 1s
        # Because then it would have been 0110 for examples which could become much harder
        # So now we have established that we must store substrings of consecutive numbers
        # This would require O(n) time and O(n) storage in worst case if all the digits are
        # either 0 or 1
        # Now, we need to go through each substring and also consider the next one
        # Whichever one has less consecutive numbers is the one that decides how many final substrings we can make
        # If we have 011, we go with 0 because that decides the maximum we can have
        # If we have 0000111, we go with 111 because of the same reason
        # Once we decide the smaller of the two, we must use a mathematical function that we create
        # So, let's create a table of values:
        # 01 -> 01 = 1 occurrence
        # 0011 -> 0011, 01 = 2 occurrences
        # 000111 -> 000111, 0011, 01 = 3 occurrences
        # 0000111 -> 00001111, 000111, 0011, 01 = 4 occurrences
        # and so on. This can also be done for substrings strating with 1 and ending with 0
        # So here, we established that the number of final substrings that can be made has a linear relationship
        # with the number of final substrings
        # Thus, whichever one has less consecutive numbers of the two, we use the number of occurrences of that set
        # and add it to the final substring count
        # Then, we move on the next set
        finalSubStringCount = 0
        numberSets = []
        currentSet = s[0]
        for i,number in enumerate(s[1:]):
            if(number not in currentSet):
                numberSets.append(currentSet)
                currentSet = number
                if(i==len(s)-2):
                    numberSets.append(currentSet)
            else:
                currentSet += number
                print(i)
                if(i==len(s)-2):
                    numberSets.append(currentSet)
        print(numberSets)
        for i,theSet in enumerate(numberSets[:-1]):
            finalSubStringCount += min(len(theSet),len(numberSets[i+1]))
        return finalSubStringCount
                
        
        
        