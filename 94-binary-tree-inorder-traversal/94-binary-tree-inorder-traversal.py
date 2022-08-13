# Definition for a binary tree node.
# class TreeNode(object):
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution(object):
    #Recursive approach:
    # For this approach, we cannot just return the value of the root because we still have to evaluate the right child of the root
    # So, we can make an IV array that keeps track of the visited order of the nodes, but then since it is recursive we must still 
    # return the array somehow. So we can actualy make another method that calls inorder traversal and returns the array in the end
#     def __init__(self):
#         self.inOrder = []
    
#     def inOrderAlgo(self, root):
#         if(root is not None):
#             self.inorderTraversal(root.left)
#             self.inOrder.append(root.val)
#             self.inorderTraversal(root.right)
    
#     def inorderTraversal(self, root):
#         self.inOrderAlgo(root)
#         return (self.inOrder)
    
    #We can use an iterative approach where we do not need 2 other methods. The recursive approach helped save space but took longer
    #Plus, a problem can also lie in how deep the recursion can occur. There is a limit for the depth of recursion we must acknowledge
    def inorderTraversal(self, root):
        inOrderArray = []
        stack = []
        while(True):
            if(root is not None):
                stack.append(root)
                root = root.left
            else:
                if(stack==[]):
                    break
                node = stack.pop()
                inOrderArray.append(node.val)
                root = node.right
        return inOrderArray