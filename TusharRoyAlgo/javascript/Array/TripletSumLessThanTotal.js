package com.interview.array;

import java.util.Arrays;

/**
 * Date 12/29/2015
 * @author Tushar Roy
 *
 * Given array with unique numbers and a total,  find all triplets whose sum is less than total
 *
 * http://www.geeksforgeeks.org/count-triplets-with-sum-smaller-that-a-given-value/
 */
/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
var TripletSumLessThanTotal = (function () {
    function TripletSumLessThanTotal() {
    }
    TripletSumLessThanTotal.prototype.findAllTriplets = function (input, total) {
        input.sort(function(a,b){return a-b;});
        var result = 0;
        for (var i = 0; i < input.length - 2; i++) {
            {
                var j = i + 1;
                var k = input.length - 1;
                while ((j < k)) {
                    {
                        if (input[i] + input[j] + input[k] >= total) {
                            k--;
                        }
                        else {
                            result += k - j;
                            j++;
                        }
                    }
                }
                ;
            }
            ;
        }
        return result;
    };
    TripletSumLessThanTotal.main = function (args) {
        var input = [5, 1, 3, 4, 7, 6 , 9, 2, 8];
        var tt = new TripletSumLessThanTotal();
        console.info(tt.findAllTriplets(input, 24));
    };
    return TripletSumLessThanTotal;
}());
TripletSumLessThanTotal["__class"] = "TripletSumLessThanTotal";
TripletSumLessThanTotal.main(null);
