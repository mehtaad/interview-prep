/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
    var findMissingPositive = function (arr, size) {
        var i;
        for (i = 0; i < size; i++) {
                var x = Math.abs(arr[i]);
                if (x - 1 < size && arr[x - 1] > 0)
                    arr[x - 1] = -arr[x - 1];
        }
        for (i = 0; i < size; i++) {
            if (arr[i] > 0)
                return i + 1;
            
        }
        return size + 1;
    };
    var findMissing = function (arr, size) {

        var len = arr.length-1;
        debugger;
        //var arr = [0, 10, 2, -10, -20];
        for (var i = len; i >=0 ; i--) {
            if (arr[i] <= 0) {
                console.log(arr);
                arr.splice(i,1);
            }
        }
        return findMissingPositive(arr, arr.length);
    };
    
        var arr = [0, 10, 2, -10, -20];
        var arr_size = arr.length;
        var missing = findMissing(arr, arr_size);
        console.info("The smallest positive missing number is " + missing);
    