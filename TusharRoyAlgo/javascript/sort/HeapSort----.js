/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
/**
 * Date 04/03/2015
 * @author tusroy
 *
 * Heap Sort
 * Given an array sort it using heap sort
 *
 * Solution :
 * First convert the original array to create the heap out of the array
 * Then move the max element to last position and do heapify to recreate the heap
 * with rest of the array element. Repeat this process
 *
 * Time complexity
 * O(nlogn)
 *
 * Test cases
 * Null array
 * 1 element array
 * 2 element array
 * sorted array
 * reverse sorted array
 * @class
 */
var sort = function(arr) {
    for (var i = 1; i < arr.length; i++) {
            heapAdd(arr, i);
    }
    for (var i = arr.length - 1; i > 0; i--) {
            swap(arr, 0, i);
            heapify(arr, i - 1);
    }
};
var heapAdd = function(arr, end) {
    var i = end;
    while (i > 0) {
        var temp = Math.floor(i - 1) / 2 | 0;
        if (arr[i] > arr[temp]) {
            swap(arr, i, temp);
            i = temp;
        } else {
            break;
        }
    }
};
var heapify = function(arr, end) {
    var i = 0;
    var leftIndex;
    var rightIndex;
    while (i <= end) {
        leftIndex = 2 * i + 1;
        if (leftIndex > end) {
            break;
        }
        rightIndex = 2 * i + 2;
        if (rightIndex > end) {
            rightIndex = leftIndex;
        }
        if (arr[i] >= Math.max(arr[leftIndex], arr[rightIndex])) {
            break;
        }
        if (arr[leftIndex] >= arr[rightIndex]) {
            swap(arr, i, leftIndex);
            i = leftIndex;
        } else {
            swap(arr, i, rightIndex);
            i = rightIndex;
        }
    }
};
var swap = function(arr, x, y) {
    var temp = arr[x];
    arr[x] = arr[y];
    arr[y] = temp;
};

var arr = [-1, 5, 8, 2, -6, -8, 11, 5];
sort(arr);

console.info(arr);
