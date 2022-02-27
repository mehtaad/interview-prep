package com.interview.array;

import java.util.HashMap;
import java.util.Map;

/**
 * Date 12/29/2015
 * @author Tushar Roy
 *
 * Give two arrays of same size consisting of 0s and 1s find span (i, j) such that
 * sum of input1[i..j] = sum of input2[i..j]
 *
 * Time complexity O(n)
 * Space complexity O(n)
 *
 * http://www.geeksforgeeks.org/longest-span-sum-two-binary-arrays/
 */
var longestSpan =function(input1, input2) {
        if (input1.length != input2.length) {
            throw new IllegalArgumentException("Not same length input");
        }
        var diff = {};
        var prefix1 = 0, prefix2 = 0;
        var maxSpan = 0;
        diff[0]= -1;
        for (var i = 0; i < input1.length ; i++) {
            debugger;
            prefix1 += input1[i];
            prefix2 += input2[i];
            var currDiff = prefix1 - prefix2;
            if (diff[currDiff]) {
                maxSpan = Math.max(maxSpan, i - diff[currDiff]);
            } else {
                diff[currDiff]= i;
            }
        }
        console.log(diff);
        return maxSpan;
    }
    var input1 = [1, 0, 0, 1, 1, 0];
    var input2 = [0, 1, 1, 0, 1, 1];
    console.log(longestSpan(input1, input2));
    