/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
/**
 * Date 12/30/2015
 *
 * Given an array of size n where elements are in range 0 to n-1. Rearrange elements of array
 * such that if arr[i] = j then arr[j] becomes i.
 *
 * Time complexity O(n)
 * Space complexity O(1)
 *
 * http://www.geeksforgeeks.org/rearrange-array-arrj-becomes-arri-j/
 * @class
 */
var rearrange = function(input) {
    debugger;
    for (var i = 0; i < input.length; i++) {
            input[i]++;
    }
    for (var i = 0; i < input.length; i++) {
            if (input[i] > 0) {
                rearrangeUtil(input, i);
            }
    }
    for (var i = 0; i < input.length; i++) {
            input[i] = -input[i] - 1;
    }
};
var rearrangeUtil = function(input, start) {
    var i = start + 1;
    var v = input[start];
    while (v > 0) {
            var t = input[v - 1];
            input[v - 1] = -i;
            i = v;
            v = t;
    }
};

var input = [1, 2, 0, 5, 3, 4];
rearrange(input);
console.log(input);

arr = [2, 0, 1, 4, 5, 3];
 //arr[] = [1, 2, 0, 5, 3, 4];
rearrange(arr);
console.log(arr);
arr  = [0, 1, 2, 3];
 //arr[] = [0, 1, 2, 3];
rearrange(arr);
console.log(arr);
arr = [3, 2, 1, 0];
 //arr[] = [3, 2, 1, 0];
 rearrange(arr);
console.log(arr);