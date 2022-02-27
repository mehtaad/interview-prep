/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
/**
 * Convert an unsorted array into an array such that
 * a < b > c < d > e < f and so on
 * @class
 */

/**
 * Sort the array first.
 * Then swap every adjacent element to get final result
 * @param {Array} arr
 */
var convert1 = function(arr) {
    arr.sort(function(a,b){return a-b;});
    console.log(arr);
    for (var i = 1; i < arr.length; i += 2) {
        if (i + 1 < arr.length) {
            this.swap(arr, i, i + 1);
        }
    }
};
var swap = function(arr, low, high) {
    var temp = arr[low];
    arr[low] = arr[high];
    arr[high] = temp;
};

var arr = [0, 6, 9, 13, 10, -1, 8, 2, 4, 14, -5];
convert1(arr);
for (var i = 0; i < arr.length; i++) {
    {
        console.info(arr[i] + " ");
    }
}
console.info();
