/*Longest Increasing Subsequence | DP-3
https://www.geeksforgeeks.org/longest-increasing-subsequence-dp-3/*/


/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
var LIS = (function () {
    function LIS() {
    }
    LIS.lis = function (arr, n) {
        var lis = new Array(n);
        var i;
        var j;
        var max = 0;
        for (i = 0; i < n; i++) {
            lis[i] = 1;
        }
        for (i = 1; i < n; i++) {
            for (j = 0; j < i; j++) {
                if (arr[i] > arr[j] && lis[i] < lis[j] + 1)
                    lis[i] = lis[j] + 1;
            }
        }
        for (i = 0; i < n; i++) {
            if (max < lis[i])
                max = lis[i];
        }
        console.log(lis);
        return max;

    };
    LIS.main = function (args) {
        var arr = [10, 22, 9, 33, 21, 50, 41, 60];
        arr=[6, 7, 8, 1, 2, 3, 9, 10];
        var n = arr.length;
        console.info("Length of lis is " + LIS.lis(arr, n) + "\n");
    };
    return LIS;
}());
LIS["__class"] = "LIS";
LIS.main(null);
