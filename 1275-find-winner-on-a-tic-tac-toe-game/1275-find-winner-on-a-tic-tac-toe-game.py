class Solution(object):
    def findAllFormations(self, allFormations, actualMatrix):
        for row in range(3):
            allFormations.append([actualMatrix[row][0],actualMatrix[row][1],actualMatrix[row][2]])
        for col in range(3):
            allFormations.append([actualMatrix[0][col],actualMatrix[1][col],actualMatrix[2][col]]) 
        allFormations.append([actualMatrix[0][0],actualMatrix[1][1],actualMatrix[2][2]])
        allFormations.append([actualMatrix[0][2],actualMatrix[1][1],actualMatrix[2][0]])
    
    def isWin(self, allFormations):
        for formation in allFormations:
            if('-1' not in formation and 'O' not in formation):
                return True
            elif('-1' not in formation and 'X' not in formation):
                return True
        return False
        
    def tictactoe(self, moves):
        #Brute Force Approach:
        # First, we can create a 3x3 matrix and with each move, we can populate the specific cell in the matrix
        # Then, we can run an operation each time the move is made
        # The maximum amount of moves that can be made in total is 9 if it turns out to be a draw
        # So, the time complexity would be O(9*the time complexity of the algorithm)
        # Algorithm Approach #1:
        #  Each time the operation is carried out, we can add all the horizontal, vertical and diagonal
        #  formation to an array
        #  Then, in the end, we can go through that final array to check ewhether there is a 3 in a row, col, or   
        #  diag
        #  We will also need a marker that helps indicate whether a cell is still empty
        #  How do we determine who won?
        #   The first player is always A and so, indices like 0,2,4,6,and 8 will be of A
        #   B will have 1,3,5,7,9
        #   The odd indices are of B and the even indices are of A
        #   Whenever we have a winner, we will check the current move index and decide accordingly
        # The total time complexity will be O(9+(3*3)+(3*3)+6)
        tictactoeMatrix = [['-1' for j in range(3)] for i in range(3)]
        # print(tictactoeMatrix)
        allFormations = []
        winner = {0:'A', 1:'B'}
        i = 0
        for i,move in enumerate(moves):
            row = move[0]
            col = move[1]
            if(i%2==0): #A turn
                tictactoeMatrix[row][col] = 'X'   
            elif(i%2==1): #B turn
                tictactoeMatrix[row][col] = 'O'  
            self.findAllFormations(allFormations, tictactoeMatrix)
            win = self.isWin(allFormations)
            if(win):
                return winner.get(i%2)
        if(i<8):
            return 'Pending'
        else:
            return 'Draw'