class Solution(object):
    def depthFirstSearch(self, row, col, grid, boolArr):
        grid[row][col] = True
        if(col<len(grid[0])-1):  #Right
            if(boolArr[row][col+1]==False and grid[row][col+1]=="1"):
                self.depthFirstSearch(row,col+1,grid,boolArr)
        if(col>0):  #Left
            if(boolArr[row][col-1]==False and grid[row][col-1]=="1"):
                self.depthFirstSearch(row,col-1,grid,boolArr)
        if(row<len(grid)-1):  #Down
            if(boolArr[row+1][col]==False and grid[row+1][col]=="1"):
                self.depthFirstSearch(row+1,col,grid,boolArr)
        if(row>0):  #Up
            if(boolArr[row-1][col]==False and grid[row-1][col]=="1"):
                self.depthFirstSearch(row-1,col,grid,boolArr)

    def numIslands(self, grid):
        #Brute Force Method:
        # We will traverse through this 2D array and we can either use DFS or BFS to search of the nodes 
        # adjacent to the current cell. 
        # We will also keep track of the visited nodes in another array that was initialized as false for all
        # different cells that exist in the arry
        # Each time we visit that array, we will set the value of that cell as true indicating it is visited
        # Every visited node, we will skip and move onto the next
        # We will do this process for as long as we are within the array
        boolArr = [[False for col in range(len(grid[0]))] for row in range(len(grid))]
        totalIslands = 0
        for i,row in enumerate(grid):
            for j,value in enumerate(row):
                if(boolArr[i][j]==False and value=="1"):
                    totalIslands+=1
                    self.depthFirstSearch(i,j,grid,boolArr)
        return totalIslands