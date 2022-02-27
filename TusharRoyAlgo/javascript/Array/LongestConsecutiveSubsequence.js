package com.interview.array;

import java.util.HashMap;


/**
 * Date 12/03/2016
 * @author Tushar Roy
 *
 * Find longest consecutive subsequence in unsorted array.
 *
 * Time complexity O(n)
 * Space complexity O(n)
 *
 * Reference
 * https://leetcode.com/problems/longest-consecutive-sequence/
 */
var longestConsecutive= function(nums) {
        var map = {};
        var result = 1;
        
        for (var n=0, i;n<nums.length;n++) {
            debugger;
            var i=nums[n]
            console.log(i);
            if (map[i]) {
                continue;
            }
            var left = map[i - 1] ? map[i - 1] : 0;
            var right = map[i + 1] ? map[i + 1] : 0;;

            var sum = left + right + 1;
            map[i]= sum;
            result = Math.max(sum, result);
            map[i - left]= sum;
            map[i + right]= sum;
        }

        return result;
    }

    
        var input = [100, 4, 200, 1, 3, 2];
        console.log(longestConsecutive(input));
    