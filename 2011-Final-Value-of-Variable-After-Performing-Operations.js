/**
 * @param {string[]} operations
 * @return {number}
 */
var finalValueAfterOperations = function(operations) {
    /*
    Brute Force Method:
    I will take each element within the array and carry out an arrow function 
    If there is a - in the element, then subtract value by 1 other wise plus 1
    */
    let x = 0;
    operations.forEach((item) => {
        if(item.charAt(0)==='-' || item.charAt(item.length-1)==='-'){
            x--;
        }
        else if(item.charAt(0)==='+' || item.charAt(item.length-1)==='+'){
            x++;
        }
    });
    return x;
};
