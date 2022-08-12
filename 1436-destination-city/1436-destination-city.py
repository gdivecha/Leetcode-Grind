class Solution(object):
    def destCity(self, paths):
        #We could create a hashmap like so:
        #create a dictionary where key = start, and value = destination
        #We can iterate through the paths and for the path in each index, we could take the paths[i][0] and put it into the key and the paths[i][0] in 
        #    to the value for that path. Now, you may ask would that work if the city in index 0 is repeated in another path on index 0.
        #    No, that wouldn't work but remember there ar eno loops and so we do not need to worry about that
        #    So, we can keep doing that until there is no key that is identical to the destination or value of another key
        # pathsDict = {}
        # for path in paths:
        #     pathsDict[path[0]] = path[1]
        # value = pathsDict.get(paths[0][0])
        # while(value in pathsDict.keys()):
        #     value = pathsDict.get(value)
        # return value
        #This method ises hashMapping and I would say the time complexity is O(n) and the space complexity is O(n)
        
        #But, let's use graphs instead here:
        #Let's first make an adjacency Matrix O(n^2) space complexity and possible O(n) time complexity
        #We could say that whichever city's row does not contain a 1 is the destination location
        numCities = len(paths)
        adjacencyMatrix = {}
        #I am converting it into O(n) complexity
        for path in paths:
            if(path[0] not in adjacencyMatrix.keys()):
                adjacencyMatrix[path[0]] = 1
            else:
                adjacencyMatrix[path[0]] = adjacencyMatrix.get(path[0]) + 1
            if(path[1] not in adjacencyMatrix.keys()):
                adjacencyMatrix[path[1]] = 1
            else:
                adjacencyMatrix[path[1]] = adjacencyMatrix.get(path[1]) + 1
        twoWithOne = []
        for city in adjacencyMatrix.keys():
            if(adjacencyMatrix.get(city)==1):
                twoWithOne.append(city)
        for path in paths:
            if(path[0] in twoWithOne):
                twoWithOne.remove(path[0])
        return twoWithOne[0]