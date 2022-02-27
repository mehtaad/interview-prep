package com.interview.array;

/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
/**
 * https://leetcode.com/problems/maximum-sum-of-3-non-overlapping-subarrays/description/
 * @class
 */
var maxSumOfThreeSubarrays = function (nums, k) {
        var sum = 0;
        var sumArray = new Array(nums.length - k + 1).fill(0);
        for (var i = 0; i < nums.length; i++) {
                if (i < k) {
                    sum += nums[i];
                }
                else {
                    sumArray[i - k] = sum;
                    sum += nums[i];
                    sum -= nums[i - k];
                }
        }
        sumArray[sumArray.length - 1] = sum;
        var dp = new Array(4);
        for(i=0;i<4;i++) {
            dp[i]= new Array(sumArray.length + 1);
        }


        for (var i = 1; i <= 3; i++) {
                for (var j_1 = 1; j_1 <= sumArray.length; j_1++) {
                        if (j_1 >= k) {
                            if (dp[i][j_1 - 1] >= sumArray[j_1 - 1] + dp[i - 1][j_1 - k]) {
                                dp[i][j_1] = dp[i][j_1 - 1];
                            }
                            else {
                                dp[i][j_1] = sumArray[j_1 - 1] + dp[i - 1][j_1 - k];
                            }
                        }
                        else {
                            if (dp[i][j_1 - 1] >= sumArray[j_1 - 1]) {
                                dp[i][j_1] = dp[i][j_1 - 1];
                            }
                            else {
                                dp[i][j_1] = sumArray[j_1 - 1];
                            }
                        }
                    }
        }
        var output = [0, 0, 0];
        var j = dp[0].length - 1;
        for (var i = 3; i > 0;) {
                if (dp[i][j] === dp[i][j - 1]) {
                    j--;
                }
                else {
                    output[i - 1] = j - 1;
                    i--;
                    j = j - k;
                }
        }
        return output;
    };
        var input = [3, 2, 2, 1, 1, 0, 5];
        var input1 = [1, 2, 1, 2, 6, 7, 5, 1];
        console.info(maxSumOfThreeSubarrays(input1, 2));
        