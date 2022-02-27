package com.interview.array;

/**
 * http://www.geeksforgeeks.org/find-the-maximum-repeating-number-in-ok-time/
 * Given an array of size n, the array contains numbers in range from 0 to k-1 
 * where k is a positive integer and k <= n.
 * Find the maximum repeating number in this array
 */
/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
var MaxRepeatingNumber = (function () {
    function MaxRepeatingNumber() {
    }
    MaxRepeatingNumber.prototype.maxRepeatingNumber = function (arr, k) {
        var len = k;
        var maxRepeating = 0;
        var maxRepeatingIndex = 0;
        for (var i = 0; i < arr.length; i++) {
                var index = arr[i] % len;
                arr[index] += len;
                if(maxRepeating<arr[index]){
                    maxRepeating = arr[index];
                    maxRepeatingIndex = index;
                } 
        }
        console.log(maxRepeatingIndex);
        debugger;
        
        /*for (var i = 0; i < len; i++) {
                if (maxRepeating < arr[i]) {
                    maxRepeating = arr[i];
                    maxRepeatingIndex = i;
                }
        }*/
        for (var i = 0; i < len; i++) {
            {
                arr[i] = arr[i] % len;
            }
            ;
        }
        return maxRepeatingIndex;
    };
    MaxRepeatingNumber.main = function (args) {
        var mrn = new MaxRepeatingNumber();
        var arr = [2, 2, 1, 3, 1, 2, 0, 3, 0, 0, 0, 4, 5, 4, 4, 4, 4];
        console.info(mrn.maxRepeatingNumber(arr, 6));
    };
    return MaxRepeatingNumber;
}());
MaxRepeatingNumber["__class"] = "MaxRepeatingNumber";
MaxRepeatingNumber.main(null);
