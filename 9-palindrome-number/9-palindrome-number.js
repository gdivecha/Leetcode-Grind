/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    /*
    Efficient Method:
    We will be using a stack and queue
    But, since queue is FIFO, we directly just use the array for the comparisons
    We will compare the original array 1 by one with the revers of it until both their counters become equal
    We will also try stack and queue for practice
    */
    const method = 1;
    const numString = (x).toString();
    if(method === 0){
        //Normal way
        let left = 0;
        let right = numString.length-1;
        while(left<right){
            if(numString.charAt(left)!==numString.charAt(right)){
                return false;
            }
            left++;
            right--;
        }
        return true;
    }
    else{
        //Stack Queue method
        const stack = [];
        const queue = [];
        for(let i=0; i<numString.length; i++){
            stack.push(numString[i]);
            queue.unshift(numString[i]);
        }
        for(let i=0; i<numString.length; i++){
            if(stack[i]!==queue[i]){
                return false;
            }
        }
        return true;
    }

};
