

/**
 * Date 07/31/2016
 * @author Tushar Roy
 *
 * Given an integer n, generate a square matrix filled with elements from 1 to n2 in spiral order.
 *
 * https://leetcode.com/problems/spiral-matrix-ii/
 */
/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
var generateMatrix = function (n) {
    var result = (function (dims) { var allocate = function (dims) { if (dims.length == 0) {
        return 0;
    }
    else {
        var array = [];
        for (var i = 0; i < dims[0]; i++) {
            array.push(allocate(dims.slice(1)));
        }
        return array;
    } }; return allocate(dims); })([n, n]);
    var up = 0;
    var down = n - 1;
    var left = 0;
    var right = n - 1;
    var index = 1;
    debugger;
    while ((up <= down && left <= right)) {
        for (var i = left; i <= right; i++) {
                result[up][i] = index++;
        }
        up++;
        for (var i = up; i <= down; i++) {
                result[i][right] = index++;
        }
        right--;
        for (var i = right; i >= left; i--) {
                result[down][i] = index++;
        }
        down--;
        for (var i = down; i >= up; i--) {
                result[i][left] = index++;
        }
        left++;
    }
    return result;
};

var r = generateMatrix(4);
for (var i = 0; i < r.length; i++) {
                console.info(r[i] + " ");
        
}
