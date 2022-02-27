package com.interview.array;

/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
/**
 * Date 03/23/2016
 * @author Tushar Roy
 *
 * Convert an unsorted array into an array of form num[0] < num[1] > nums[2] < num[3]....
 *
 * Time complexity O(n) - This depends on KthElementInArray time
 * Space complexity O(1)
 *
 * https://leetcode.com/problems/wiggle-sort/
 * https://leetcode.com/problems/wiggle-sort-ii/
 * @class
 */
var WiggleSort = (function () {
    function WiggleSort() {
    }
    WiggleSort.prototype.kthElement = function (arr, k) {
        var low = 0;
        var high = arr.length - 1;
        var pos = 0;
        while ((true)) {
            {
                pos = this.quickSelect(arr, low, high);
                if (pos === (k + low)) {
                    return arr[pos];
                }
                if (pos > k + low) {
                    high = pos - 1;
                }
                else {
                    k = k - (pos - low + 1);
                    low = pos + 1;
                }
            }
        }
        ;
    };
    /*private*/ WiggleSort.prototype.quickSelect = function (arr, low, high) {
        var pivot = low;
        low++;
        while ((low <= high)) {
            {
                if (arr[pivot] > arr[low]) {
                    low++;
                    continue;
                }
                if (arr[pivot] <= arr[high]) {
                    high--;
                    continue;
                }
                this.swap(arr, low, high);
            }
        }
        ;
        if (arr[high] < arr[pivot]) {
            this.swap(arr, pivot, high);
        }
        return high;
    };
    WiggleSort.prototype.wiggleSort2 = function (arr) {
        if (arr.length === 0) {
            return;
        }
        var k = (arr.length / 2 | 0);
        this.kthElement(arr, k);
        debugger;
        var mid = arr[k];
        var n = arr.length;
        var i = 0;
        var j = 0;
        k = n - 1;
        while ((j <= k)) {
            {
                if (arr[this.next(j, n)] > mid) {
                    this.swap(arr, this.next(i++, n), this.next(j++, n));
                }
                else if (arr[this.next(j, n)] < mid) {
                    this.swap(arr, this.next(j, n), this.next(k--, n));
                }
                else {
                    j++;
                }
            }
        }
        ;
    };
    WiggleSort.prototype.wiggleSort1 = function (nums) {
        var flag = true;
        for (var i = 0; i < nums.length - 1; i++) {
            {
                if (flag) {
                    if (nums[i] > nums[i + 1]) {
                        this.swap(nums, i, i + 1);
                    }
                }
                else {
                    if (nums[i] < nums[i + 1]) {
                        this.swap(nums, i, i + 1);
                    }
                }
                flag = !flag;
            }
            ;
        }
    };
    /*private*/ WiggleSort.prototype.next = function (index, n) {
        return (2 * index + 1) % (n | 1);
    };
    /*private*/ WiggleSort.prototype.swap = function (arr, low, high) {
        var temp = arr[low];
        arr[low] = arr[high];
        arr[high] = temp;
    };
    WiggleSort.main = function (args) {
        var ws = new WiggleSort();
        var input = [6, 2, 1, 6, 8, 9, 6];
        ws.wiggleSort2(input);
        console.info(input);
    };
    return WiggleSort;
}());
WiggleSort["__class"] = "WiggleSort";
WiggleSort.main(null);

