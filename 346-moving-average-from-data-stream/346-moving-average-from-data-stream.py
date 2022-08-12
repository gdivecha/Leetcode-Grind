class MovingAverage(object):

    #For approach 1
    # def __init__(self, size):
    #     self.size = size
    #     self.queue = []
        
    #For approach 2
    # def __init__(self, size):
    #     self.size = size
    #     self.queue = []
    #     self.sumTotal = 0
    
    #For approach 3
    def __init__(self, size):
        self.size = size
        self.array = []
      
    #This passes 10/11 tests because last one takes too long so the method is right, only the shofting takes too long + for each call, there is sum of all values as well
    # def next(self, val):
    #     head = len(self.queue)
    #     if(head==self.size):
    #         self.queue.pop(0)
    #         self.queue.append(val)
    #     elif(head<self.size):
    #         self.queue.append(val)
    #     print(self.queue)
    #     sumTotal = 0
    #     for value in self.queue:
    #         sumTotal += value
    #     head = len(self.queue)
    #     if head!=0:
    #         return float(sumTotal)/float(head)
    
    
    #Above method didn't work for large inputs, so we will use a new approach
    #The problem still pertains with this approach becaus ethe main problem is not the iteration for usm, it is the shifting of the elements back by one index
    # def next(self, val):
    #     head = len(self.queue)
    #     if(head==self.size):
    #         (self.sumTotal)-=(self.queue.pop(0))
    #         self.queue.append(val)
    #         (self.sumTotal)+=val
    #     elif(head<self.size):
    #         (self.sumTotal)+=val
    #         self.queue.append(val)
    #     print(self.queue)
    #     sumTotal = 0
    #     head = len(self.queue)
    #     if head!=0:
    #         return float(self.sumTotal)/float(head)
    
    #We will not implement the first 2 approaches because when the windowSize = larg # like 384, it is disfunctional
    def next(self, val):
        sumTotal = 0
        numValues = 1
        if(len(self.array)>=(self.size)):
            self.array.append(val)
            numValues = self.size
            for i in range(len(self.array)-1, len(self.array)-1-(self.size), -1):
                sumTotal += (self.array[i])
        elif(len(self.array)<(self.size)):
            self.array.append(val)
            numValues = len(self.array)
            for value in (self.array):
                sumTotal += value
        if(numValues>0):
            return(float(sumTotal)/float(numValues))
                
# Your MovingAverage object will be instantiated and called as such:
# obj = MovingAverage(size)
# param_1 = obj.next(val)

#So, we want to get rid of the the oldest number inserted based on the size of the winder
#We will use a queue data structure to handle this issue
#We will make it so that when the length of the queue reaches the window size, we dequeue the queue and subsequenctly get rid of the oldest number
#Why is that? It's because queues are in FIFO Order.
#Why do we want that?
#   We want that because let's say we have an input [1,10,3,5]
#   and the windo size is 3
#   we make a queue = []
#   enqueue(1) so queue = [1] avg = 1/1 = 1
#   enqueue(10) so queue = [1,10] avg = (1+10)/2 = 5.5
#   enqueue(3) so queue = [1,10,3] avg = (1+10+3)/3 = 4.667
#   since the length of the queue has reached 3, before enqueuing 5, we must dequeue()
#   Thus, we dequeue() and so queue = [10,3]
#   Now, we can enqueue(5) and so queue = [10,3,5] and we can do the rest all over again
#We will need a mechanism for enqueuing and dequeuing

