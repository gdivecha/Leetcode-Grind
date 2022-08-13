# Definition for a binary tree node.
# class TreeNode(object):
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution(object):
    def invertTree(self, root):
        #Brute Force:
        # What we could do is that we can go through each level and switch out the left and right children of each node within that level
        # We may need a stack to keep track of all the nodes
        # This will require O(n) time and O(1) space
        originalRoot = root
        stack = []
        while(True):
            if(root is not None):
                stack.append(root)
                root = root.left
            else:
                if(stack==[]):
                    break
                node = stack.pop()
                tempNode = node.right
                node.right = node.left
                node.left = tempNode
                root = node.left
        return originalRoot