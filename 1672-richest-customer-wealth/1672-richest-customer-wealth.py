class Solution(object):
    def maximumWealth(self, accounts):
        hashSet = set()
        for account in accounts:
            sum = 0
            for bankMoney in account:
                sum += bankMoney
            hashSet.add(sum)
        if(hashSet!=None):
            max = hashSet.pop()
        for wealth in hashSet:
            if(max<wealth):
                max = wealth
        return max
        