class Solution(object):
    def isValid(self, s):
        #We will use a hashmap to assign a close bracket to a corresponding open bracket
        # We will use a stack to peeo track of what the next character should be
        hashMap = {')':'(', '}':'{', ']':'['}
        openBrackets = '''({['''
        closeBrackets = ''')}]'''
        stack = []
        for bracket in s:
            if(bracket in openBrackets):
                stack.append(bracket)
            elif(bracket in closeBrackets):
                if(stack!=[]):
                    if(stack.pop()!=hashMap.get(bracket)):
                        return False
                elif(hashMap.get(bracket) not in stack):
                    return False
        if(stack!=[]):
            return False
        return True