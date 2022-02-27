/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
/**
 * http://www.geeksforgeeks.org/minimum-length-unsorted-subarray-sorting-which-makes-the-complete-array-sorted/
 * @class
 */
var minLength = function (arr) {
        var i = 0;
        while ((i < arr.length - 1 && arr[i] < arr[i + 1])) {
                i++;
        }
        if (i === arr.length - 1) {
            return 0;
        }
        var j = arr.length - 1;
        while ((j > 0 && arr[j] > arr[j - 1])) {
            {
                j--;
            }
        }
        var max = -2147483648;
        var min = 2147483647;
        //find min max in lower and upper array
        for (var k = i; k <= j; k++) {
                if (max < arr[k]) {
                    max = arr[k];
                }
                if (min > arr[k]) {
                    min = arr[k];
                }
        }
        var x = i - 1;
        while ((x >= 0)) {
                if (min > arr[x]) {
                    break;
                }
                x--;
        }
        var y = j + 1;
        while ((y < arr.length)) {
                if (max < arr[y]) {
                    break;
                }
                y++;
        }
        return y - x - 2 + 1;
    };
    
        var arr = [4, 5, 10, 21, 18, 23, 7, 8, 19, 34, 38];
        var arr1 = [4, 5, 6, 12, 11, 15];
        var arr2 = [4, 5, 6, 10, 11, 15];
        
        console.info(minLength(arr));
    