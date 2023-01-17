/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
    /*
    Efficient Method:
    We have a dictionary that stores the occurrences in the values
    The key being the number that we evaluate
    We create an array that holds the values
    Now, we iterate through the dictionary once and enter
    the value of each key into it
    It is only entered if it doesn't exist, and if it does, then return false
    */      
    const dict = {};
    const uniqueOccurrences = [];
    arr.forEach((number) => {
        if(number in dict){
            dict[number]++;
        }
        else{
            dict[number] = 1;
        }
    });
    for(key in dict){
        if(uniqueOccurrences.includes(dict[key])){
            return false;
        }
        else{
            uniqueOccurrences.push(dict[key]);
        }
    }
    return true;
};
