class Solution(object):
    
    def depthFirstSearch(self, image, visited, row, col, color):
        visited[row][col] = True
        temp = image[row][col]
        image[row][col] = color
        if(col<len(image[0])-1): #Right
            if(visited[row][col+1]==False and image[row][col+1]==temp):
                self.depthFirstSearch(image, visited, row, col+1, color)
        if(col>0): #Left
            if(visited[row][col-1]==False and image[row][col-1]==temp):
                self.depthFirstSearch(image, visited, row, col-1, color)
        if(row<len(image)-1): #Down
            if(visited[row+1][col]==False and image[row+1][col]==temp):
                self.depthFirstSearch(image, visited, row+1, col, color)
        if(row>0): #Up
            if(visited[row-1][col]==False and image[row-1][col]==temp):
                self.depthFirstSearch(image, visited, row-1, col, color)
    
    def floodFill(self, image, sr, sc, color):
        #Brute Force Approach:
        # We will need to use DFS to find all connected colours that are similar
        # For this, we will need a 2D array that keeps account of all the visited cells
        # Since we need to make changes to the array only once, we do not need to reset the 2D arrays
        # multiple times.
        # We will first need to keep track of the color value of the selected element
        # After storing it, we will use DFS to find all connected elements that have the same color value
        # and as we go through each connection, we will update the visited cells
        # We do not need DFS specifically we can also use BFS but I will use DFS for convenience
        # Along with making updates to visited cells, we will also need to change the numbers of
        # the values to the desired color
        # The criteria for connected elements is that the color value is the same and that it hasn't already
        # been visited
        #First, we need to find the size of the image
        m = len(image)
        n = len(image[0])
        visited = [[False for j in range(n)] for i in range(m)]
        self.depthFirstSearch(image, visited, sr, sc, color)
        return image
        
        