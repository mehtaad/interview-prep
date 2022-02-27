package com.interview.sort;

/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
var QuickSort = (function () {
    function QuickSort() {
    }
    /*private*/ QuickSort.prototype.swap = function (A, i, j) {
        var temp = A[i];
        A[i] = A[j];
        A[j] = temp;
    };
    /*private*/ QuickSort.prototype.split = function (A, low, high) {
        var pivot = low;
        var i = low + 1;
        var j = high;
        while ((i < j)) {
            {
                while ((i <= j && A[pivot] >= A[i])) {
                    {
                        i++;
                    }
                }
                ;
                while ((j >= i && A[pivot] < A[j])) {
                    {
                        j--;
                    }
                }
                ;
                if (i < j && A[i] > A[j]) {
                    this.swap(A, i++, j--);
                }
            }
        }
        ;
        if (A[pivot] > A[j]) {
            this.swap(A, j, pivot);
        }
        return j;
    };
    /*private*/ QuickSort.prototype.split1 = function (A, low, high) {
        var pivot = low;
        var i = low + 1;
        var j = high;
        while ((i <= j)) {
            {
                if (A[i] <= A[pivot]) {
                    i++;
                    continue;
                }
                if (A[j] > A[pivot]) {
                    j--;
                    continue;
                }
                this.swap(A, i++, j--);
            }
        }
        ;
        if (A[pivot] > A[j]) {
            this.swap(A, pivot, j);
            return j;
        }
        return pivot;
    };
    QuickSort.prototype.sort = function (A, low, high) {
        if (low >= high) {
            return;
        }
        var pos = this.split1(A, low, high);
        this.sort(A, low, pos - 1);
        this.sort(A, pos + 1, high);
    };
    /*private*/ QuickSort.prototype.printArray = function (arr) {
        for (var index3655 = 0; index3655 < arr.length; index3655++) {
            var a = arr[index3655];
            {
                console.info(a);
            }
        }
    };
    QuickSort.main = function (args) {
        var qs = new QuickSort();
        var A = [11, 19, 0, -1, 5, 6, 16, -3, 6, 0, 14, 18, 7, 21, 18, -6, -8];
        qs.sort(A, 0, A.length - 1);
        qs.printArray(A);
    };
    return QuickSort;
}());
QuickSort["__class"] = "QuickSort";
QuickSort.main(null);
