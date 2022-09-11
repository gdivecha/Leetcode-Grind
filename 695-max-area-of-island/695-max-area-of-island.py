class Solution(object):
    def depthFirstSearch(self,row,col,visited,grid,currentArea):
        currentArea[0]+=1
        visited[row][col] = True
        if(row>0): #Up
            if(grid[row-1][col]==1 and visited[row-1][col]==False):
                self.depthFirstSearch(row-1,col,visited,grid,currentArea)
        if(row<len(grid)-1): #Down
            if(grid[row+1][col]==1 and visited[row+1][col]==False):
                self.depthFirstSearch(row+1,col,visited,grid,currentArea)
        if(col>0): #Left
            if(grid[row][col-1]==1 and visited[row][col-1]==False):
                self.depthFirstSearch(row,col-1,visited,grid,currentArea)
        if(col<len(grid[0])-1): #Right
            if(grid[row][col+1]==1 and visited[row][col+1]==False):
                self.depthFirstSearch(row,col+1,visited,grid,currentArea)
    
    def maxAreaOfIsland(self, grid):
        #Brute Force:
        # We can use search algorithms either DFS or BFS to find the answer to this question
        # In our case, I will use DFS as it is usually straight forward
        # We will create a 2D array called visited to stored 'True' or 'False' based on which island has already been visited
        # We will go through each cell of this 2D matrix and if the current element is 1, then we run DFS on it
        # To run the DFS, we will pass in the visited array, the original array, the row, column, and the totalArea (an int var)
        # Each time the DFS is ran, it will only visit the adjacent cell if it has not been visited already and if it conatins the 
        # element 1. This algorithm would take O(n^2) space, and O(V+E) time complexity
        m = len(grid)
        n = len(grid[0])
        visited = [[False for j in range(n)] for i in range(m)]
        maxArea = 0
        for i,row in enumerate(grid):
            for j,value in enumerate(row):
                if(value==1 and visited[i][j]==False):
                    currentArea = [0]
                    self.depthFirstSearch(i,j,visited,grid,currentArea)
                    maxArea = max(maxArea,currentArea[0])
        return maxArea