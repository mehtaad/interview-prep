/**
 * http://www.geeksforgeeks.org/sort-n-numbers-range-0-n2-1-linear-time/
 */
var sort = function(arr, n) {
    sort1(arr, n, 1);
    sort1(arr, n, n);
    sort1(arr, n, n*n);
};

var sort1 = function(arr, n, exp) {
    var count = new Array(n).fill(0);
    for (var i = 0; i < arr.length; i++) {
        count[Math.floor(arr[i] / exp) % n]++;
    }
console.log(count);
    for (var i = 1; i < arr.length; i++) {
        count[i] += count[i - 1];
    }
console.log(count);
    var output = new Array(n).fill(0);

    for (var i = arr.length - 1; i >= 0; i--) {
        output[count[Math.floor(arr[i] / exp) % n] - 1] = arr[i];
        count[Math.floor(arr[i] / exp) % n]--;
    }
console.log(count);
console.log(output);    
    for (var i = 0; i < arr.length; i++) {
        arr[i] = output[i];
    }
console.log(")");
console.log(")");
    
};

var arr = [100, 2, 124, 18, 36];
sort(arr, arr.length);
