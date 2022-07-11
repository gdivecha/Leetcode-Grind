class Solution(object):
    def isSubsequence(self, s, t):
        isSub = False
        isValid = 0
        sl = len(s)
        tl = len(s)
        if((sl>=0)and(sl<=100)and(tl>=0)and(tl<=10000)):
            for character in s:
                if((character<'a')or(character>'z')):
                    isValid+=1
                    break
            for character in t:
                if((character<'a')or(character>'z')):
                    isValid+=1
                    break
            if(isValid==0):
                isValid = 0
                temp = t
                for character in s:
                    if(character in temp):
                        indexC = temp.index(character)
                        print(indexC)
                        temp = temp[indexC+1:len(temp)];
                    else:
                        isValid+=1
                        break
                if isValid==0:
                    isSub = True
        return isSub