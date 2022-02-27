package com.interview.array;

/**
 * Date 03/06/2016
 * @author Tushar Roy
 *
 * Find if there exists an increasing triplet subsequence.
 * Similar method to longest increasing subsequence in nlogn time.
 *
 * Time complexity is O(n)
 * Space complexity is O(1)
 *
 * https://leetcode.com/problems/increasing-triplet-subsequence/
 */
/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
var increasingTriplet = function (nums) {
        var T = [0, 0, 0];
        var len = 0;
        for (var i = 0; i < nums.length; i++) {
            {
                var found = false;
                for (var j = 0; j < len; j++) {
                    {
                        if (nums[i] <= T[j]) {
                            T[j] = nums[i];
                            found = true;
                            break;
                        }
                    }
                    ;
                }
                if (!found) {
                    T[len++] = nums[i];
                }
                if (len === 3) {
                    return true;
                }
            }
            ;
        }
        return false;
    };
    
var input = [9, 10, 9, 8, 6, 5, 6, 7];
console.info(increasingTriplet(input));
    


input = [2, 6, 4, 5, 7];
console.info(increasingTriplet(input,3));
    

