/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
/**
 * Given an array of n integers nums and a target, find the number of index triplets i, j, k
 * with 0 <= i < j < k < n that satisfy the condition nums[i] + nums[j] + nums[k] < target.
 *
 * https://leetcode.com/problems/3sum-smaller/
 * @class
 */
var threeSumSmaller = function(nums, target) {
    if (nums.length < 3) {
        return 0;
    }
    nums.sort(function(a, b) {
        return a - b;
    });
    var count = 0;debugger;
    for (var i = 0; i < nums.length; i++) {
        var j = i + 1;
        var k = nums.length - 1;
        while (j < k) {
            if (nums[i] + nums[j] + nums[k] >= target) {
                k--;
            } else {
                count += k - j;
                j++;
            }
        }
    }
    return count;
};
var num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 13, 14, 15];
console.log(threeSumSmaller(num, 12));


