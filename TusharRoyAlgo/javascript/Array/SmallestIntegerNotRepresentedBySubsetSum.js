/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
/**
 * Date 12/31/2015
 * @author Tushar Roy
 *
 * Given array in non decreasing order find smallest integer which cannot be represented by
 * subset sum of these integers.
 *
 * Time complexity is O(n)
 *
 * http://www.geeksforgeeks.org/find-smallest-value-represented-sum-subset-given-array/
 * @class
 */
var findSmallestInteger = function(input) {
    var result = 1;
    for (var i = 0; i < input.length; i++) {
        {
            if (input[i] <= result) {
                result += input[i];
            } else {
                break;
            }
        }
    }
    return result;
};
/**
 * Leetcode variation https://leetcode.com/problems/patching-array/
 * @param {Array} nums
 * @param {number} n
 * @return {number}
 */
var minPatches = function(nums, n) {
    var patch = 0;
    var t = 1;
    var i = 0;
    while (t <= n) {
        {
            if (i === nums.length || t < nums[i]) {
                patch++;
                console.log("adding "+t);
                t += t;
                console.log("after adding "+t);
            } else {
                t = nums[i] + t;
                console.log(t);
                i++;
            }
        }
    }
    return patch;
};
var input = [1, 2, 3, 8];
console.info(findSmallestInteger(input));
var input1 = [1,10];
console.info(minPatches(input1, 7));
