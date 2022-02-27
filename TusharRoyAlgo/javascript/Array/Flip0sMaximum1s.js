package com.var erview.array;

/**
 * Date 12/29/2015
 * @author Tushar Roy
 *
 * Given input array of 0s and 1s and number of flips allowed from 0 to 1, what is maximum consecutive 1s we can have
 * in array
 *
 * Time complexity - O(n)
 * Space complexity - O(1)
 *
 *  
 */
    var  flip0sToMaximizeConsecutive1s =  function(input, flipsAllowed) {

        var  windowStart = 0;
        var  countZero = 0;
        var  result = 0;
        debugger;
        for (var  i = 0 ; i < input.length; i++) {
            if (input[i] == 1) {
                result = Math.max(result, i - windowStart + 1);
                console.log("result "+result+" i "+i);
            } else {
                if (countZero < flipsAllowed) {
                    countZero++;
                    result = Math.max(result, i - windowStart + 1);
                    console.log("result "+result+" i "+i + " countZero "+countZero);
                } else {
                    /*IMP*/while(true) {
                        if (input[windowStart] == 0) {
                            windowStart++;
                            break;
                        }
                        windowStart++;
                    }
                    console.log(" windowStart "+windowStart+" result "+result+" i "+i + " countZero "+countZero);
                }
            }
        }
        return result;
    }

    var input = [1, 1, 0, 0, 1, 1, 0, 1, 0, 1, 1, 1];
    console.log(flip0sToMaximizeConsecutive1s(input, 3));


  
