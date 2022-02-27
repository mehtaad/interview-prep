package com.interview.array;

/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
/**
 * http://www.geeksforgeeks.org/largest-subarray-with-equal-number-of-0s-and-1s/
 * Test cases
 * Starting with either 0 or 1
 * Maximum length of 0 1 2 or more
 *
 * @class
 */
var equalNumber = function (arr) {
        var sum = new Array(arr.length).fill(0);
        var pos = {};
        sum[0] = arr[0] === 0 ? -1 : 1;
        pos[sum[0]]=0;
        var arrR=[];
        
        var maxLen = 0;
        var i = 0;
        for (var i_1 = 1; i_1 < sum.length; i_1++) {
                sum[i_1] = sum[i_1 - 1] + (arr[i_1] === 0 ? -1 : 1);
                
        }
        console.log(arr);
        console.log(sum);
        for (var index3234 = 0; index3234 < sum.length; index3234++) {
            var s = sum[index3234];
            if(s == 0){
                maxLen = Math.max(maxLen, i+1);
            }
            if(pos[s]){
                maxLen = Math.max(maxLen, i-pos[s]);
            }else{
                pos[s]= i;
            }
            console.log(pos);
            console.log(maxLen);
            
            i++;
        }
        return maxLen;
    };
    var arr = [0, 0, 0, 1, 0, 1, 0, 0, 1, 0, 0, 0];
        console.info(equalNumber(arr));

    
