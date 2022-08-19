class Solution(object):
    def isAnagram(self, s, t):
        #First of all, we need to consider the total length of the strings and how many repetitions there are
        # of each character. Instead of running a for loop to check whether each character in s exists in t,
        # we need to take into account the counts of each letter
        # we will use a hashmap to map out each character and its repetitons within the string s
        # Then we will iterate through each character in t and check whether that character exists in the hashMap
        # and if it does, we will compare the count of that character in t and the count within hashMap
        # If they match, we move onto the next character. If it doesn't even exist, we return Falase
        hashMap = {}
        if(len(s)==len(t)):
            if(len(s)<len(t)):
                smallerString = s
                biggerString = t
            else:
                smallerString = t
                biggerString = s
            for character in smallerString:
                if(character not in hashMap.keys()):
                    hashMap[character] = 1
                else:
                    hashMap[character] = hashMap.get(character)+1
            print(hashMap)
            for character in biggerString:
                if(character in hashMap.keys()):
                    if(hashMap.get(character)!=s.count(character)):
                        return False
                else:
                    return False
            return True
        else:
            return False