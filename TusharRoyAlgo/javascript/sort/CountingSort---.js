var sort = function(arr) {
    var count = new Array(10).fill(0);
    for (var i = 0; i < arr.length; i++) {
        count[arr[i]]++;
    }
    var c = 0;
    for (var i = 0; i < 10; i++) {
        while (count[i] > 0) {
            arr[c++] = i;
            count[i]--;
        }
    }
    console.log(arr);
};

var sort1 = function(arr) {
    var count = new Array(10).fill(0);
    var output = new Array(arr.length);
    for (var i = 0; i < arr.length; i++) {
        count[arr[i]]++;
    }

    for (var i = 1; i < 10; i++) {
        count[i] += count[i - 1];
    }

    for (var i = 0; i < arr.length; i++) {
        output[count[arr[i]] - 1] = arr[i];
        count[arr[i]]--;
    }

    for (var i = 0; i < arr.length; i++) {
        arr[i] = output[i];
    }
    console.log(arr);
};
var arr = [6, 1, 6, 7, 3, 1];
sort1(arr);
console.log(arr);
