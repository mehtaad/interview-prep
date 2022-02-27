package com.interview.array;
/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
/**
 * Date 10/08/2016
 * @author Tushar Roy
 *
 * Given a sorted array of integers nums and integer values a, b and c.
 * Apply a function of the form f(x) = ax2 + bx + c to each element x in the array.
 *
 * Time complexity O(n)
 * http://shirleyisnotageek.blogspot.com/2016/10/sort-transformed-array.html
 * https://leetcode.com/problems/sort-transformed-array/
 * @class
 */
var sortTransformedArray = function (nums, a, b, c) {
        var start = 0;
        var end = nums.length - 1;
        var result = new Array(nums.length).fill(0);
        var index = (a >= 0 ? nums.length - 1 : 0);
        while ((start <= end)) {
                var x = apply1(nums[start], a, b, c);
                var y = apply1(nums[end], a, b, c);
                var condition = (a >= 0 ? x >= y : x <= y);
                if (condition) {
                    result[index] = x;
                    start++;
                }
                else {
                    result[index] = y;
                    end--;
                }
                index = index + (a >= 0 ? -1 : 1);
            }
        return result;
    };
    var apply1 = function (x, a, b, c) {
        return a * x * x + b * x + c;
    };
    


var nums = [-4, -2, 2, 4];//, a = 1, b = 3, c = 5,
console.log(sortTransformedArray(nums, 1,3,5));
//Result: [3, 9, 15, 33]

nums = [-4, -2, 2, 4];//, a = -1, b = 3, c = 5
sortTransformedArray(nums, -1,3,5);
Result: [-23, -5, 1, 7]
