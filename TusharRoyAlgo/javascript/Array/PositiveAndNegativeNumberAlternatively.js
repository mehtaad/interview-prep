/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
/**
 * http://www.geeksforgeeks.org/rearrange-positive-and-negative-numbers-publish/
 * @class
 */
var arrange = function(arr) {
    var startOfPos = segregate(arr);
    console.log(arr);
    //debugger;
    var startOfNeg = 1;
    while (startOfNeg < startOfPos && startOfPos < arr.length) {
        {
            swap(arr, startOfNeg, startOfPos);
            startOfNeg += 2;
            startOfPos++;
        }
    }
    return arr;
};
var segregate = function(arr) {
    var low = 0;
    var high = arr.length - 1;
    while (low < high) {
        {
            if (arr[low] < 0) {
                low++;
            } else if (arr[high] >= 0) {
                high--;
            } else {
                swap(arr, low, high);
            }
        }
    }
    return low;
};
var swap = function(arr, i, j) {
    var t = arr[i];
    arr[i] = arr[j];
    arr[j] = t;
};
var arr = [-1, -2, -3, -4, -5, 1, 2, 3, 4, 5];
console.info(arrange(arr));
