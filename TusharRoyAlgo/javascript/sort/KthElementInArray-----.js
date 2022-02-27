/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
/**
 *video on quick select https://www.youtube.com/watch?v=SXXpkdruLfc 
 *Kth largest element in an array.
 * Use quickselect of quicksort to find the solution in hopefully O(nlogn) time.
 CAN USE MIN Heap to find kth high element
 * Test cases
 * Sorted array
 * Reverse sorted array
 * @class
 */
var kthElement = function(arr, k) {
    var low = 0;
    var high = arr.length - 1;
    var pos = 0;
    debugger;
    while (true) {
        {
            pos = quickSelect(arr, low, high);
            if (pos === k + low) {//pivot returned is same as what we are looking for then you have the answer
                return arr[pos];
            }
            if (k + low < pos) {//element is in left half of the pivot, update high
                high = pos - 1;
            } else {// element is in right half of pivot, update low and k
                k = k - (pos - low + 1);
                low = pos + 1;
            }
        }
    }
};

var quickSelect = function(arr, low, high) {
    var pivot = low;
    low++;
    debugger;
    while (low <= high) {
        {
            if (arr[pivot] > arr[low]) {
                low++;//as long as pivot is higher then next elements
                continue;
            }
            if (arr[pivot] <= arr[high]) {
                high--;//as long as pivot is lower or Equal then right elements
                continue;
            }
            swap(arr, pivot, high);//low is on right side so swap it to left side
            console.log(arr);
        }
    }
    if (arr[pivot] > arr[high]) {
        swap(arr, pivot, high);//high is on left side so swap it to right end
    }
    return high;
};

var swap = function(arr, low, high) {
    var temp = arr[low];
    arr[low] = arr[high];
    arr[high] = temp;
};
var arr = [6, 2, 8, 6, 1, 9, 6];
console.info(kthElement(arr, 2));

//Using heap find kth element

