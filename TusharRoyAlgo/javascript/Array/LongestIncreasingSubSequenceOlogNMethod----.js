package com.interview.array;

/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
/**
 * Date 08/01/2015
 * @author Tushar Roy
 *
 * Given an array, find longest increasing subsequence in nlogn time complexity
 *
 * References
 * http://www.geeksforgeeks.org/longest-monotonically-increasing-subsequence-size-n-log-n/
 * http://www.geeksforgeeks.org/construction-of-longest-monotonically-increasing-subsequence-n-log-n/
 * @class
 */

/**
 * Returns index in T for ceiling of s
 * @param {Array} input
 * @param {Array} T
 * @param {number} end
 * @param {number} s
 * @return {number}
 * @private
 */
var ceilIndex = function (input, T, end, s) {
    var start = 0;
    var middle;
    var len = end;
    while ((start <= end)) {
        {
            middle = ((start + end) / 2 | 0);
            if (middle < len && input[T[middle]] < s && s <= input[T[middle + 1]]) {
                return middle + 1;
            }
            else if (input[T[middle]] < s) {
                start = middle + 1;
            }
            else {
                end = middle - 1;
            }
        }
    }
    ;
    return -1;
};
var longestIncreasingSubSequence = function (input) {
    var T = new Array(input.length).fill(0);
    var R =  new Array(input.length).fill(0);
    for (var i = 0; i < R.length; i++) {
            R[i] = -1;
    }
    T[0] = 0;
    var len = 0;
    for (var i = 1; i < input.length; i++) {
        {
            if (input[T[0]] > input[i]) {
                T[0] = i;
            }
            else if (input[T[len]] < input[i]) {
                len++;
                T[len] = i;
                R[T[len]] = T[len - 1];
            }
            else {
                var index_1 = ceilIndex(input, T, len, input[i]);
                T[index_1] = i;
                R[T[index_1]] = T[index_1 - 1];
            }
        }
        ;
    }
    console.info("Longest increasing subsequence ");
    var index = T[len];
    while ((index !== -1)) {
        {
            console.info(input[index] + " ");
            index = R[index];
        }
    }
    ;
    console.info();
    return len + 1;
};
var input = [3, 4, -1, 5, 8, 2, 3, 12, 7, 9, 10];

console.info("Maximum length " + longestIncreasingSubSequence(input));
    