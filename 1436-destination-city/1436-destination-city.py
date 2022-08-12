class Solution(object):
    def destCity(self, paths):
        #We could create a hashmap like so:
        #create a dictionary where key = start, and value = destination
        #We can iterate through the paths and for the path in each index, we could take the paths[i][0] and put it into the key and the paths[i][0] in 
        #    to the value for that path. Now, you may ask would that work if the city in index 0 is repeated in another path on index 0.
        #    No, that wouldn't work but remember there ar eno loops and so we do not need to worry about that
        #    So, we can keep doing that until there is no key that is identical to the destination or value of another key
        pathsDict = {}
        for path in paths:
            pathsDict[path[0]] = path[1]
        value = pathsDict.get(paths[0][0])
        while(value in pathsDict.keys()):
            value = pathsDict.get(value)
        return value
            
        