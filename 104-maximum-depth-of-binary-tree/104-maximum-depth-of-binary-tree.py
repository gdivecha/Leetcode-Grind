# Definition for a binary tree node.
# class TreeNode(object):
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution(object):
    def maxDepth(self, root):
        #Recursion
        # if(root is None):
        #     return 0
        # else:
        #     left_Height = self.maxDepth(root.left)
        #     right_Height = self.maxDepth(root.right)
        #     return max(left_Height, right_Height)+1
        #My Recursion:
#         if(root is None):
#             return 0
#         else:
#             leftHeight = self.maxDepth(root.left)
#             rightHeight = self.maxDepth(root.right)
#             return max(leftHeight,rightHeight)+1
        
        #My Iteration:
        stack = []
        if(root is not None):
            stack.append((1,root))
        
        depth = 0
        
        while(stack!=[]):
            currentDepth, root = stack.pop()
            if root is not None:
                depth = max(currentDepth, depth)
                stack.append((currentDepth+1,root.left))
                stack.append((currentDepth+1,root.right))
        return depth
        
        
        
        