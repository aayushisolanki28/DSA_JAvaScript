/**
 Given an array of integers arr, return true if the number of occurrences of each value in the array is unique or false otherwise.

 

Example 1:

Input: arr = [1,2,2,1,1,3]
Output: true
Explanation: The value 1 has 3 occurrences, 2 has 2 and 3 has 1. No two values have the same number of occurrences.
 */
var uniqueOccurrences = function(arr) {
    var numMap = {};
    for (var i = 0; i < arr.length; i++) {
        numMap[arr[i]] = (numMap[arr[i]] || 0) + 1;
    }
    var occureMap = {};
    var nums = Object.keys(numMap);
    for (var j = 0; j < nums.length; j++) {
        if (occureMap[numMap[nums[j]]]) return false;
        occureMap[numMap[nums[j]]] = true;
    }
    return true;
};
