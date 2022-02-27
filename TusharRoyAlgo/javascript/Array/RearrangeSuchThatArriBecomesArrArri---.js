/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
/**
 * http://www.geeksforgeeks.org/rearrange-given-array-place/
 * @class
 */
var rearrange = function(arr) {
    for (var i = 0; i < arr.length; i++) {

        var temp = void 0;
        if (arr[arr[i]] > arr.length - 1) {
            //get the orignal value by dividing by length minus 1
            temp = ((arr[arr[i]] / arr.length) | 0) - 1;
        } else {
            temp = arr[arr[i]];
        }
        arr[i] = temp + arr.length * (arr[i] + 1);//the value stored at i is remainder + value of i +1 multiplied by length
    }
    for (var i = 0; i < arr.length; i++) {
        arr[i] = arr[i] % arr.length;
    }
};

var arr = [4, 2, 0, 1, 3];
rearrange(arr);
console.log(arr);