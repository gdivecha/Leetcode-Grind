class Solution(object):
    def isValid(self, s):
        #Efficient Method:
        # We will first create a dictionary called bracketPairs
        # bracketPairs = {'(':')', '{':'}', '[':']'}
        # As we interate through the string, we want to add the closed bracket equivalent
        # of the current open bracket to a hashSet called stack
        # Whenever, through the iterations, you come across a closed bracket, you pop the stack
        # and if the popped value does not match the current element, then the parenthesis is not valid
        # If it is, then move to the next element
        # Example 1: "()[]{}"
        # - Iteration 1: Stack = [')']
        # - Iterayion 2: Recognize that it is a closed bracket, thus, it pops the stack -> Stack =[] and returns ')'
        #   - Current character in string = popped character
        #   - So it moves to the next character
        # - Iteration 3: Stack = ['}']
        # - Iteration 4: Recognize that it is a closed bracket, thus, it pops the stack -> Stack =[] and returns '}'
        #   - Current character in string = popped character
        #   - So it moves to the next character
        # - Iteration 5: Stack = [']']
        # - Iteration 6: Recognize that it is a closed bracket, thus, it pops the stack -> Stack =[] and returns '}'
        #   - Current characte rin string = popped character
        #   - So it moves to the next character
        # Example 1: "([[{()}]])"
        # - Iteration 1: Stack = [')']
        # - Iteration 2: Stack = [')',']']
        # - Iteration 3: Stack = [')',']',']']
        # - Iteration 4: Stack = [')',']',']','}']
        # - Iteration 5: Stack = [')',']',']','}',')']
        # - Iteration 6: Recognize that it is a closed bracket, thus, it pops the stack -> Stack =[')',']',']','}'] and returns ')'
        #   - Current characte rin string = popped character
        #   - So it moves to the next character
        # - Iteration 7: Recognize that it is a closed bracket, thus, it pops the stack -> Stack =[')',']',']'] and returns '}'
        #   - Current characte rin string = popped character
        #   - So it moves to the next character
        # - Iteration 8: Recognize that it is a closed bracket, thus, it pops the stack -> Stack =[')',']'] and returns ']'
        #   - Current characte rin string = popped character
        #   - So it moves to the next character
        # - Iteration 9: Recognize that it is a closed bracket, thus, it pops the stack -> Stack =[')'] and returns ']'
        #   - Current characte rin string = popped character
        #   - So it moves to the next character
        # - Iteration 10: Recognize that it is a closed bracket, thus, it pops the stack -> Stack =[] and returns ')'
        #   - Current characte rin string = popped character
        #   - So it moves to the next character
        # Example 1: "([){]}"
        # - Iteration 1: Stack = [')']
        # - Iteration 2: Stack = [')',']']
        # - Iteration 3: Recognize that it is a closed ')' bracket, thus, it pops the stack -> Stack =[')'] and returns ']'
        #   - There is now a mismatch in the closed bracket and so, this string is not valid

        bracketPairs = {'(':')', '{':'}', '[':']'}
        stack = []

        for bracket in s:
            if(bracket in bracketPairs.keys()):
                stack.append(bracketPairs[bracket])
            elif(bracket in bracketPairs.values()):
                if(stack!=[]):
                    poppedBracket = stack.pop()
                    if(poppedBracket != bracket):
                        return False
                elif(bracketPairs.get(bracket) not in stack):
                    return False
        
        if not stack:
            return True
        else:
            return False

