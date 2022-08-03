class Solution(object):
    def firstUniqChar(self, s):
        if((len(s)>=1) and (len(s)<=(10**5))):
            # key = character; value = (index, count)
            information = {}
            for i,character in enumerate(s):
                if((character<'a')or(character>'z')):
                    return -1
                if(character not in information.keys()):
                    information[character] = [i,1]
                else:
                    (information.get(character))[1] = (information.get(character))[1] + 1
            minKey = (10**5)+1 
            for key in information.keys():
                if (minKey>(information.get(key)[0])and(information.get(key)[1])==1):
                    minKey = (information.get(key)[0])
            if(minKey==(10**5)+1):
                return -1
            return minKey
                