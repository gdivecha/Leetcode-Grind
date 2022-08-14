# Definition for singly-linked list.
# class ListNode(object):
#     def __init__(self, x):
#         self.val = x
#         self.next = None

class Solution(object):
    def hasCycle(self, head):
        #We will use the tortoise and hare method:
        # We make 2 pointers
        # One tortoise and the other hare
        # Tortoise traverses one node at a time
        # Hare traverses 2 nodes at a time
        # As they both traverse through the array, eventually they will both point
        # to the same node. If they do, then we have a cycle
        tortoise = head
        hare = head
        while(hare!=None and hare.next!=None):
            tortoise = tortoise.next
            hare = hare.next.next
            if(tortoise is hare):
                return True
        