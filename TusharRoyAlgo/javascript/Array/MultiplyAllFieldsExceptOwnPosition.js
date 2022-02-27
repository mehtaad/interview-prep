package com.interview.array;

/**
 * https://leetcode.com/problems/product-of-array-except-self/
 */
/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
var multiply = function (nums) {
        if (nums.length === 0) {
            return [];
        }
        var output = new Array(nums.length).fill(0);
        output[0] = 1;
        for (var i = 1; i < nums.length; i++) {
                output[i] = output[i - 1] * nums[i - 1];
        }
        console.log(JSON.stringify(output));
        var mult = 1;
        for (var i = nums.length - 1; i >= 0; i--) {
                output[i] *= mult;
                mult *= nums[i];
        }
        return output;
    };
    var i=[1,2,3,4];
    console.log(multiply(i));