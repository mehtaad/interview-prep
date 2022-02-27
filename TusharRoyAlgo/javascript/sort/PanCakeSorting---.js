package com.interview.sort;

/**
 * http://www.geeksforgeeks.org/pancake-sorting/
 * Two ways to do it
 * 1) Start i from arr.length-1 towards 0, find max from 0 to i, move this max to top
 * by one flip and then move this max to ith position by another flip
 * 
 * 2) Start i from 0 towards arr.length-1, find floor of input[i] from 0 to i-1 lets call
 * f , flip 0 to f, then flip 0 to i-1 then flip 0 to i, then flip 0 to i-1.
 * e.g 1 2 3 5 4. Here i is 4 and f is 2
 * 1 2 3 5 4 flip(0,f) -> 3 2 1 5 4
 * 3 2 1 5 4 flip(0,i-1) -> 5 1 2 3 4
 * 5 1 2 3 4 flip(0,i) -> 4 3 2 1 5
 * 4 3 2 1 5 flip(0,i-1) -> 1 2 3 4 5
 */
/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
var PanCakeSorting = (function () {
    function PanCakeSorting() {
    }
    PanCakeSorting.prototype.sort = function (arr) {
        for (var i = arr.length - 1; i >= 0; i--) {
            {
                var pos = this.findMax(arr, i);
                this.flip(arr, pos);
                this.flip(arr, i);
            }
            ;
        }
    };
    /*private*/ PanCakeSorting.prototype.findMax = function (arr, pos) {
        var max = pos;
        for (var i = pos - 1; i >= 0; i--) {
            {
                if (arr[i] > arr[max]) {
                    max = i;
                }
            }
            ;
        }
        return max;
    };
    /*private*/ PanCakeSorting.prototype.flip = function (arr, pos) {
        for (var i = 0; i <= (pos / 2 | 0); i++) {
            {
                this.swap(arr, i, pos - i);
            }
            ;
        }
    };
    /*private*/ PanCakeSorting.prototype.swap = function (arr, i, j) {
        var temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    };
    PanCakeSorting.main = function (args) {
        var arr = [9, 2, 7, 11, 3, 6, 1, 10, 8];
        var pcs = new PanCakeSorting();
        pcs.sort(arr);
        for (var i = 0; i < arr.length; i++) {
            {
                console.info(arr[i] + " ");
            }
            ;
        }
    };
    return PanCakeSorting;
}());
PanCakeSorting["__class"] = "PanCakeSorting";
PanCakeSorting.main(null);
