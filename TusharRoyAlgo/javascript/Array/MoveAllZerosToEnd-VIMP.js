/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
var moveZeros = function (arr) {
    var slow = 0;
    var fast = 0;
    while ((fast < arr.length)) {
        {
            if (arr[fast] === 0) {
                fast++;
                continue;
            }
            arr[slow] = arr[fast];
            slow++;
            fast++;
        }
    }
    ;
    while ((slow < arr.length)) {
            arr[slow++] = 0;
    }
};
var arr = [0, 0, 1, 2, 0, 5, 6, 7, 0];
console.log(moveZeros(arr));
    