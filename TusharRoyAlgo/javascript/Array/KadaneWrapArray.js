package com.interview.array;

/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
/**
 * http://www.geeksforgeeks.org/maximum-contiguous-circular-sum/
 * Test cases
 * All negative
 * All positives
 * all 0s
 * @class
 */
var Triplet = (function () {
    function Triplet() {
        if (this.start === undefined)
            this.start = 0;
        if (this.end === undefined)
            this.end = 0;
        if (this.sum === undefined)
            this.sum = 0;
    }
    /**
     *
     * @return {string}
     */
    Triplet.prototype.toString = function () {
        return "Triplet [start=" + this.start + ", end=" + this.end + ", sum=" + this.sum + "]";
    };
    return Triplet;
}());
Triplet["__class"] = "Triplet";

    var kadaneWrap = function (arr) {
        debugger;
        var straightKadane = kadane(arr);
        var sum = 0;
        for (var i = 0; i < arr.length; i++) {
                sum += arr[i];
                arr[i] = -arr[i];
        }
        var wrappedNegKadane = kadane(arr);
        for (var i = 0; i < arr.length; i++) {
                arr[i] = -arr[i];
        }
        if (straightKadane.sum < sum + wrappedNegKadane.sum) {
            straightKadane.sum = wrappedNegKadane.sum + sum;
            straightKadane.start = wrappedNegKadane.end + 1;
            straightKadane.end = wrappedNegKadane.start - 1;
        }
        return straightKadane;
    };
    /**
     * This method assumes there is at least one positive number in the array.
     * Otherwise it will break
     * @param {Array} arr
     * @return
     * @return {Triplet}
     */
    var kadane = function (arr) {
        var sum = 0;
        var cStart = 0;
        var mStart = 0;
        var end = 0;
        var maxSum = -2147483648;
        for (var i = 0; i < arr.length; i++) {
                sum += arr[i];
                if (sum <= 0) {
                    sum = 0;
                    cStart = i + 1;
                }
                else {
                    if (sum > maxSum) {
                        maxSum = sum;
                        mStart = cStart;
                        end = i;
                    }
                }
        }
        var p = new Triplet();
        p.sum = maxSum;
        p.start = mStart;
        p.end = end;
        return p;
    };
    
    var input = [12, -2, -6, 5, 9, -7, 3];
    var input1 = [8, -8, 9, -9, 10, -11, 12];
    console.info(kadaneWrap(input));
    console.info(kadaneWrap(input1));
