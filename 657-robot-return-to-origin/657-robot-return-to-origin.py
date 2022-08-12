class Solution(object):
    def judgeCircle(self, moves):
        #Brute Force Method
        #I could make a 2D matrix based on the length of the string I receive but that would make ot O(n^2) space complexity + the 
        # time complexity for each move would be O(1) and for n moves it would be O(n) which makes this code very inefficient
        #What I could do though is for each move that the robot makes, I can find the vertical and horizontal distance between the new point
        # and the start point and every move, I can make changes to that number and at the end of the string, if both numbers are [0,0], then
        # the robot returns to its original spot
        # The time complexity of each move is O(1) and so for n moves = O(n)
        # The space complexity would be O(1) because I am only creating 2 vars that hold the distances: vertical and horizontal
        vertical = 0
        horizontal = 0
        for move in moves:
            if(move=='U'):
                vertical+=1
            elif(move=='R'):
                horizontal+=1
            elif(move=='D'):
                vertical-=1
            else:
                horizontal-=1
        if(vertical==0 and horizontal==0):
            return True
        return False