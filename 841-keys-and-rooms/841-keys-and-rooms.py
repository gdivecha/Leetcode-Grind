class Solution(object):
    def depthFirstSearch(self, room, visitedRooms, rooms):
        visitedRooms[room] = True
        for key in rooms[room]:
            if(visitedRooms[key]==False):
                self.depthFirstSearch(key, visitedRooms, rooms)
    
    def canVisitAllRooms(self, rooms):
        #Brute Force Approach:
        # Since we can take all the keys provided in a specific room, we do not need to worry about the order in which we unlock rooms
        # So, lets say we pick up 1 and 3 from room 0, we can unlock rooms 1 and 3
        # Lets say we unlock room 1 first, then, we have access keys for room 3, 0 and 1. Since 0 and 1 have already been visited
        # we can directly go to 3 and gain access to room 0 keys
        # Then the initial 3 that we had doesn't matter because we already visited it
        # Now, what we can do is that we can create a 1D array that contains only boolean values
        # Each boolean value indicates whether the room of its index has already been visited
        # For example, it can be done like this:    [False, False, False, False]
        #                                              0      1      2      3
        # When we gain access to room 0, we gain access to the keys provided within that room
        # Now, we do a DFS for each key within that room and traverse through other rooms
        # As the DFS runs, it will update the visited array to indicate which rooms have been visited
        # In the end, we will go through the visited array and if all elements are True, then we return true otherwise false
        numRooms = len(rooms)
        visitedRooms = [False for i in range(numRooms)]
        self.depthFirstSearch(0, visitedRooms, rooms)
        for room in visitedRooms:
            if(room==False):
                return False
        return True