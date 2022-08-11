class Solution(object):
    def reverseAlgo(self, word):
        temp = ""
        for i in range(len(word)-1, -1, -1):
            temp+=(word[i])
        return temp
        
    
    def reverseWords(self, s):
       #Brute Force Method:
        #We can split each word and put it into an array and then do the algorithm of reversing the string there and then form the new string
        #This would make the space complexity O(2n) and the time complexity O(n^2) possible O(2n^2) if the word is as long as a sentence
        words = s.split()
        finalSentence = []
        # print(words)
        for word in words:
            finalSentence.append(self.reverseAlgo(word))
        return (" ".join(finalSentence))
    
       #A more effieicent way:
        #We could try to make the reverse happen in-place like so:
        # Everytime we encounter a space, starting fromt he index after that, we can start making a reverse string and when we encounter its 
        # corresponding space, the reverse string is replaces with the old one