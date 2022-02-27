/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
/**
 * Problem Statement:
 *
 * Given an array of n positive integers. Write a program to find the sum of maximum sum subsequence of the given array
 * such that the integers in the subsequence are in increasing order.
 *
 *
 * Video: https://youtu.be/99ssGWhLPUE
 *
 * Reference:
 *  
 * @class
 */
var MaximumSumSubsequence = (function () {
    function MaximumSumSubsequence() {
    }
    MaximumSumSubsequence.prototype.maxSum = function (arr) {
        var T = new Array(arr.length);
        for (var i = 0; i < T.length; i++) {
                T[i] = arr[i];
        }
        for (var i = 1; i < T.length; i++) {
                for (var j = 0; j < i; j++) {
                        if (arr[j] < arr[i]) {
                            T[i] = Math.max(T[i], T[j] + arr[i]);
                        }
                }
        }
        var max = T[0];
        for (var i = 1; i < T.length; i++) {
                if (T[i] > max) {
                    max = T[i];
                }
        }
        return max;
    };
    MaximumSumSubsequence.main = function (args) {
        var mss = new MaximumSumSubsequence();
        var arr = [105,99, 101, 10, 2, 3, 100, 4];
        var r = mss.maxSum(arr);
        console.info(r);
    };
    return MaximumSumSubsequence;
}());
MaximumSumSubsequence["__class"] = "MaximumSumSubsequence";
MaximumSumSubsequence.main(null);
