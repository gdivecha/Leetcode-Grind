class RecentCounter(object):

    # def __init__(self):
    #     self.pings = [] 
        
    # def ping(self, t):
    #     self.pings.append(t)
    #     pingCount = 0
    #     for i in range(len(self.pings)-1, -1, -1):
    #         if(self.pings[i]>=(t-3000)):
    #             pingCount += 1
    #         else:
    #             break
    #     return pingCount
    #68/68 tests passed but took too long
    
    
    #We take their approach:
    def __init__(self):
        self.slide_window = deque()

    def ping(self, t):
        # step 1). append the current call
        self.slide_window.append(t)

        # step 2). invalidate the outdated pings
        while self.slide_window[0] < t - 3000:
            self.slide_window.popleft()

        return len(self.slide_window)
                


# Your RecentCounter object will be instantiated and called as such:
# obj = RecentCounter()
# param_1 = obj.ping(t)

#Brute Force Method:
# We start from i = 1 and go through the entire array in O(n) time up until the last index.
# For each element, we subtract that number by 3000 and check every request prior to that number for whether those numbers are within that range
# The first number as we go to the left that does not meet the criteria is when the left checks stop
# Every number right of the number that stops it will be counted as the left checks are being done
# The worst case for this approach is that all the numbers prior to each number are within the [t-3000, t] range
# This worst case would cause O(n^2) time complexity but preserve a O(1) space complexity
# Also, since the array is already osrted in increasing order, we do not need to sort it and waste another O(n^2) time complexity on the program
# Since the most calls made ar 10^9, we shoudln't pursue this approach
#Efficient Approach:
# First of all, we must establish that the "ping" method adds the number to the array
# Is there a way to get the sum right before t is added?
# I have a feeling this might work and this may take O(1) time and space complexities
        # def __init__(self):
        #     self.currentTotal = 0
        #     self.whatIsPing = 1
        #
        #def ping(self, t):
        # if(self.currentTotal!=0):
        #     if((t-self.currentTotal)>=(t-3000)):
        #         self.whatIsPing += 1
        #     # else:
        #     #     self.whatIsPing -= 1
        # self.currentTotal += t
        # return self.whatIsPing
#Didn't work and so we stick to brute force method