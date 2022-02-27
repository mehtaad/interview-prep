package com.interview.array;
/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
/**
 * Date 07/20/2015
 * @author Tushar Roy
 *
 * Given a sequence like
 * 1 11 21 1211 111221 312211
 * Print nth element of this sequence.
 * @class
 */
var nthElement = function(n) {
    var i = 1;
    var current = [];
    current.push(1);
    var result = [];
    while (i < n) {
        var count = 1;
        var index = 0;
        for (var j = 1; j < current.length; j++) {
            {
                if (current[index] === current[j]) {
                    count++;
                } else {
                    result.push(count);
                    result.push(current[index]);
                    count = 1;
                    index = j;
                }
            }
        }
        result.push(count);
        result.push(current[index]);
        current = result;
        result = [];
        i++;
    }
    return current;
};

var tt = function() {
    for (var i = 1; i <= 10; i++) {
        console.info(i+ " i " +nthElement(i).join(""));
    }
};
tt();
    