class Solution(object):
    
    def getNewPoint(self,point,change):
        returnArr = [point[0]+change[0],point[1]+change[1]]
        return returnArr
    
    def isPathCrossing(self, path):
        #Brute Force Method:
        # Everytime we move, we try to insert the new point into a place:
        # The point will be in the form [x,y] and it will only be inserted if it doesn't already exist
        # If it does, then we return false
        # Otehrwise we return true
        # The array we create will be created once and will have O(n) points that are made from arrays of length 2
        # Thus, we will create an array called visited which will takr up O(n) space and to run throug the origianl
        # array, we will need O(n) time
        currentPoint = [0,0]
        hashMap = {'N':[0,1],'S':[0,-1],'E':[1,0],'W':[-1,0]}
        #The above hashmap will help navigate
        #We will also create another method that does the addition
        visited = []
        visited.append([0,0])
        print(visited)
        for direction in path:
            if(self.getNewPoint(currentPoint,hashMap.get(direction)) in visited):
                return True
            else:
                visited.append(self.getNewPoint(currentPoint,hashMap.get(direction)))
            currentPoint = visited[-1]
        return False