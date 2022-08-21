class Solution(object):
    def shortestDistance(self, wordsDict, word1, word2):
        # return abs((wordsDict.index(word1))-(wordsDict.index(word2)))
        #The above method would have been very straight forward if both words only appeared once int he array
        # We will need to use BFS to find the shortest path between the two words
        #Brute Force Method:
        # We could first find the word that appears first in the array if both words exist in the array
        # Then, we try to find the index of the other word and get the difference of the two indices
        # We allocate the variable to find the minimum difference
        # We say minDistance = that difference
        # Then ....
        # Hmmmm as I think about it more, I believe that there is a better way of solving this
        # problem
        
        #Efficient Algorithm:
        # An algorithm used to find max diff between buying and selling stock
        # As we go throught the array in O(n) time, we check whether an element is either = word1 or word2
        # We also set a value for the current word out of the two
        # We start from a certain word as a currentWord
        # As we traverse through the array, we can find a word of the two given, we set that as the current word
        # and set that as the index of the firts encoutered word
        # Then, as we move on, we check whether each word is not the current word and is the other word
        # We get the distance between the word right now and the current word from before, and find it by
        # doing minDistance = abs(wordsDict[currentWordIndex] - wordsDict[i]) If this distance is lower than the 
        # current MinDistance
        # The problem that we may encounter is that when using this as example:
        # [practice, makes, makes, perfect,coding] and haveing the two words makes and coding
        # we skip over the second makes, which may not work
        # So, to solve this, we can update teh currentIndex to teh index of the current word if it is the same
        #First we find which word occurs first
        if(wordsDict!=None and word1 in wordsDict and word2 in wordsDict and word1!=word2):
            word1Index = wordsDict.index(word1)
            word2Index = wordsDict.index(word2)
            currentWord = ""
            currentIndex = -1
            otherWord = ""
            if(word1Index<=word2Index):
                currentWord = word1
                currentIndex = word1Index
                otherWord = word2
            else:
                currentWord = word2
                currentIndex = word2Index
                otherWord = word1
            print(currentWord)
            print(currentIndex)
            print(otherWord)
            minDistance = 3*(10**4)+1
            for i,word in enumerate(wordsDict):
                if(word==currentWord):
                    currentIndex = i
                elif(word!=currentWord and word==otherWord):
                    minDistance = min(minDistance,abs(currentIndex-i))
                    currentWord = word
                    currentIndex = i
                    if(word==word1):
                        otherWord = word2
                    else:
                        otherWord = word1
            return minDistance
        #This algorithm would run in O(n)Time
        # and O(1) Space
        