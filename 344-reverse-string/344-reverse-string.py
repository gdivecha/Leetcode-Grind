class Solution(object):
    def reverseString(self, s):
        #Brute Force but Efficient Method:
        # We can take the easy way out by making another array that is a direct reverse copy of the original but we need O(1) space, not O(n)
        #2nd Approach:
        # So, we will take a more cumbersome approach which is where we will implement insertion sort-like approach
        # n = len(s)
        # alreadyReversed = 0
        # i = n-1
        # for k in range(n):
        #     key = s[i]
        #     j = i-1
        #     while(j>=alreadyReversed):
        #         s[j+1] = s[j]
        #         j-=1
        #     s[j+1] = key
        #     alreadyReversed+=1
        # return s
        #The above algorithm is fully functional for 476/477 test cases and so it does the job correctly, but takes extra space
        #Thus, we will do the following:
        # We will pop the top of the list and insert that element into the next index after the previous one each time starting from 0
        n = len(s)
        alreadyReversed = 0
        for k in range(n):
            s.insert(alreadyReversed,s.pop())
            alreadyReversed+=1
        return s
        #This would take O(1) space but O(n^2) time still but the shift is done automatically by the program due to insert