class Solution(object):
    def isIsomorphic(self, s, t):
        dictionary = {}
        valid = True
        if ((len(s)>=1)and(len(s)<=50000)and(len(s)==len(t))):
            for i,character in enumerate(s):
                if (character not in dictionary.keys()):
                    if(t[i] in dictionary.values()):
                        valid = False
                        break
                    dictionary[character] = t[i]
                else:
                    if ((t[i] is not dictionary.get(character))):
                        valid = False
                        break
        return valid