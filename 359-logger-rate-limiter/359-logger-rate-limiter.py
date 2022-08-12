class Logger(object):

    def __init__(self):
        self.myStrings = {}
        
    def shouldPrintMessage(self, timestamp, message):
        print(self.myStrings)
        if(message not in (self.myStrings).keys()):
            (self.myStrings)[message] = timestamp+10
            return True
        else:
            if(((self.myStrings).get(message))<=timestamp):
                (self.myStrings)[message] = timestamp+10
                return True
            else:
                return False


# Your Logger object will be instantiated and called as such:
# obj = Logger()
# param_1 = obj.shouldPrintMessage(timestamp,message)

#For this question, we will be usiung a dictionary to keep track of the current timestamp of the message for each string
#Everytime that string is inputted, we will check whether it already exists in the dictionary
#If it already exists, we will check whether the new timestamp is >= (previous time stamp + 10), if it is then return true, otherwise false
#If it doesn't exist already, we add it to the dictionary