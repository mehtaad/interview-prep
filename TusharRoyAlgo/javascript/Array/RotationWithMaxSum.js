/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
/**
 * Date 12/30/2015
 * @author Tushar Roy
 *
 * Given an input array find which rotation will give max sum of i * arr[i]
 *
 * Time complexity - O(n)
 * Space complexity - O(1)
 *
 * http://www.geeksforgeeks.org/find-maximum-value-of-sum-iarri-with-only-rotations-on-given-array-allowed/
 * @class
 */
var maxSum = function(input) {
    var arrSum = 0;
    var rotationSum = 0;
    for (var i = 0; i < input.length; i++) {
        arrSum += input[i];
        rotationSum += i * input[i];
    }
    debugger;
    var maxRotationSum = rotationSum;
    for (var i = 1; i < input.length; i++) {
        rotationSum += input.length * input[i - 1] - arrSum;
        maxRotationSum = Math.max(maxRotationSum, rotationSum);
    }
    return maxRotationSum;
};
var input = [10, 1, 2, 3, 4, 5, 6, 7, 8, 9];
console.info(maxSum(input));
