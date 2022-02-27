package com.interview.sort;

/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */

    var countSort = function (arr, exp) {
        var count = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        var output = new Array(arr.length).fill(0);
        for (var i = 0; i < arr.length; i++) {
                count[(Math.floor(arr[i] / exp | 0)) % 10]++;
        }
        for (var i = 1; i < count.length; i++) {
                count[i] += count[i - 1];
        }
        for (var i = arr.length - 1; i >= 0; i--) {
                output[count[(Math.floor(arr[i] / exp | 0)) % 10] - 1] = arr[i];
                count[(Math.floor(arr[i] / exp | 0)) % 10]--;
        }
        for (var i = 0; i < arr.length; i++) {
                arr[i] = output[i];
        }
    };
    
    var radixSort = function (arr) {
        var max = Math.max.apply(null, arr);
        for (var exp = 1; exp <= max; exp *= 10) {
                countSort(arr, exp);
        }
    };
    var arr = [101, 10, 11, 66, 94, 26, 125];
    radixSort(arr);
    for (var i = 0; i < arr.length; i++) {
            console.info(arr[i]);
    }

    