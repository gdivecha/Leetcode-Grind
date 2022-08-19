class Solution(object):
    def isPalindrome(self, s):
        specialCharacters = '''!()-`[]{};:'"\,./?@#$%^&*_~'''
        s = [character.lower() for character in s if(character not in specialCharacters and character!=" ")] 
        s = "".join(s)
        stack = [character for character in s]
        queue = [character for character in s]
        while(stack!=[]):
            if(stack.pop()!=queue.pop(0)):
                return False
        return True
