class SparseVector:
    def __init__(self, nums):
        self.vector = nums

    # Return the dotProduct of two sparse vectors
    def dotProduct(self, vec):
        dotProduct = 0
        for i,num in enumerate(vec.vector):
            dotProduct+=(num*(self.vector[i]))
        return dotProduct

# Your SparseVector object will be instantiated and called as such:
# v1 = SparseVector(nums1)
# v2 = SparseVector(nums2)
# ans = v1.dotProduct(v2)