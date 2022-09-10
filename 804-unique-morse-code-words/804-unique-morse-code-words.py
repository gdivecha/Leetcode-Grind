class Solution(object):
    def uniqueMorseRepresentations(self, words):
        #Brute Force Method:
        # Create a dictionary with keys = alphabest and values = their corresponding morse code
        # There would be 26 alphabets and so, this can be considered a constant storage or O(1) complexity
        # Now, we want to create a string called morse code for each word as we iterate through he array words
        # We also want to create an array called transformations taht keeps track of the unique tranformations that occur
        # Withineach word, we will iterate through it and for each alphabet, we will concatenate its corrsponding
        # morse code value to the string called morse code
        # When we finsih the word, we want to check whether this morse code exists wihtin the array transformations
        # If it does exist, we move onto the next word
        # If it does not exist, we add it to the array
        # After all the words are done, we want to return the length of the array transformations
        # This would take O(n^2) time
        morseConverter = {'a':".-",'b':"-...",'c':"-.-.",'d':"-..",'e':".",'f':"..-.",'g':"--.",'h':"....",'i':"..",'j':".---",'k':"-.-",'l':".-..",'m':"--",'n':"-.",'o':"---",'p':".--.",'q':"--.-",'r':".-.",'s':"...",'t':"-",'u':"..-",'v':"...-",'w':".--",'x':"-..-",'y':"-.--",'z':"--.."}
        transformations = []
        for word in words:
            morseCode = ""
            for letter in word:
                morseCode += morseConverter.get(letter)
            if(morseCode not in transformations):
                transformations.append(morseCode)
        return len(transformations)
        