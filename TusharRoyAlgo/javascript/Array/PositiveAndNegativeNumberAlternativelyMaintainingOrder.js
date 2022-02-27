/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
/**
 * Date 12/31/2015
 * @author Tushar Roy
 *
 * Given an array of positive and negative integers arrange them alternatively maintaining initial order.
 * If there are more +ve or -ve integer then push them to the end together.
 *
 * Time complexity is O(n)
 * Space complexity is O(1)
 *
 * http://www.geeksforgeeks.org/rearrange-array-alternating-positive-negative-items-o1-extra-space/
 * @class
 */
var rearrange = function(input) {
    for (var i = 0; i < input.length; i++) {
        if (i % 2 === 0 && input[i] >= 0) {
            var indexOfNextNegative = findNext(input, i + 1, false);
            if (indexOfNextNegative === -1) {
                return;
            } else {
                debugger;
                var ele = input.splice(indexOfNextNegative,1)
                input.splice(i,0,ele[0]);
                //rightRotate(input, i, indexOfNextNegative);
            }
        } else if (i % 2 !== 0 && input[i] < 0) {
            var indexOfNextPositive = findNext(input, i + 1, true);
            if (indexOfNextPositive === -1) {
                return;
            } else {
                debugger;
                var ele = input.splice(indexOfNextPositive,1)
                input.splice(i,0,ele[0]);
                //rightRotate(input, i, indexOfNextPositive);
            }
        }
    }
    return input;
};
var findNext = function(input, start, isPositive) {
    for (var i = start; i < input.length; i++) {
        if ((isPositive && input[i] >= 0) || (!isPositive && input[i] < 0)) {
            return i;
        }
    }
    return -1;
};
var rightRotate = function(input, start, end) {
    var t = input[end];
    for (var i = end; i > start; i--) {
        input[i] = input[i - 1];
    }
    input[start] = t;
};

var input = [-5, -2, 5, 2, 4, 7, 1, 8, 0, -8];
rearrange(input)
console.log(input);
