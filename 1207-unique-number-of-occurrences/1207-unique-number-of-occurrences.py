class Solution(object):
    def uniqueOccurrences(self, arr):
        #Ideal Approach:
        # We could go through the entire array once in O(n) time and for each value within the array we could add it to a dictionary
        # if the value already exists within the keys of the dictionary, we could increase the number of occurrences of that number by 1
        # if it doesn't exist, then set the occurrence of that value to 1
        # Now, we can set a boolean varaible to true
        # we now go through the dictionary and for each key in the dictionary, we could store the key and value into 2 variables
        # we pop that item and check whether the stored value already exists in the .values() of the dict
        # If the value exists we assign False to the bool variable and break the loop and return the bool
        # If it doesn't exist, then we simply add that item to the dict again and move on
        # Ultimately, we return True if no occurrences are repeated
        # This would take TC O(n) and SC O(n)
        occurrences = {}
        isValid = True
        for num in arr:
            if(num not in occurrences.keys()):
                occurrences[num] = 1
            else:
                occurrences[num] = occurrences.get(num) + 1
        for key, value in occurrences.items():
            currentKey = key
            currentValue = value
            occurrences.pop(currentKey)
            if(currentValue in occurrences.values()):
                isValid = False
                break
            else:
                occurrences[currentKey] = currentValue
        return isValid
        
                
        