/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    /* 
    Brute Force Method:
    We could just iterate through the entire array element-by-element and for each element, we check
    whether the target - that element exists and we return the first pair of those elements
    This would give is a time complexity of O(n^2)

    Efficient Method:
    Example: 
        nums = [2,7,11,15]
        target = 9
    Expected = [0,1] so 2+7
    What we can do is that we can use a dictionary
    We can basically iterate through the entire array one by one and in the dictionary, we can have the key be the 
    difference (target - current element) and the value be the index of the curent element
    So for example, the dictionary will be = {7:0, 2:1, -2:2, -6:3}
    As we go through the array, we keep checking whether they key that is the current element exists and if it does, then
    we output an array of the value of that key, and the current index.
    If it doesn't exist, then we move onto the next element in the array
        */

    const dict = {};
    const len = nums.length;
    for(let i=0; i<len; i++){
        if(nums[i] in dict){
            return Array.of(dict[nums[i]],i);
        }
        dict[target-nums[i]] = i
    }
};
