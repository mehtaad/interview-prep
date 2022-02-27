/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
/**
 * http://en.wikipedia.org/wiki/Merge_sort
 * Test cases
 * 1 element
 * 2 element
 * negative numbers
 * already sorted
 * reverse sorted
 * @class
 */
var MergeSort = (function () {
    function MergeSort() {
    }
    MergeSort.prototype.sort$int_A = function (input) {
        this.sort$int_A$int$int(input, 0, input.length - 1);
    };
    MergeSort.prototype.sort$int_A$int$int = function (input, low, high) {
        if (low >= high) {
            return;
        }
        var middle = ((low + high) / 2 | 0);
        this.sort$int_A$int$int(input, low, middle);
        this.sort$int_A$int$int(input, middle + 1, high);
        this.sortedMerge(input, low, high);
    };
    MergeSort.prototype.sort = function (input, low, high) {
        if (((input != null && input instanceof Array && (input.length == 0 || input[0] == null || (typeof input[0] === 'number'))) || input === null) && ((typeof low === 'number') || low === null) && ((typeof high === 'number') || high === null)) {
            return this.sort$int_A$int$int(input, low, high);
        }
        else if (((input != null && input instanceof Array && (input.length == 0 || input[0] == null || (typeof input[0] === 'number'))) || input === null) && low === undefined && high === undefined) {
            return this.sort$int_A(input);
        }
        else
            throw new Error('invalid overload');
    };
    /*private*/ MergeSort.prototype.sortedMerge = function (input, low, high) {
        var middle = ((low + high) / 2 | 0);
        var temp = (function (s) { var a = []; while (s-- > 0)
            a.push(0); return a; })(high - low + 1);
        var i = low;
        var j = middle + 1;
        var r = 0;
        while ((i <= middle && j <= high)) {
            {
                if (input[i] <= input[j]) {
                    temp[r++] = input[i++];
                }
                else {
                    temp[r++] = input[j++];
                }
            }
        }
        ;
        while ((i <= middle)) {
            {
                temp[r++] = input[i++];
            }
        }
        ;
        while ((j <= high)) {
            {
                temp[r++] = input[j++];
            }
        }
        ;
        i = low;
        for (var k = 0; k < temp.length;) {
            {
                input[i++] = temp[k++];
            }
            ;
        }
    };
    MergeSort.prototype.printArray = function (input) {
        for (var index3654 = 0; index3654 < input.length; index3654++) {
            var i = input[index3654];
            {
                console.info(i + " ");
            }
        }
        console.info();
    };
    MergeSort.main = function (args) {
        var input1 = [1];
        var input2 = [4, 2];
        var input3 = [6, 2, 9];
        var input4 = [6, -1, 10, 4, 11, 14, 19, 12, 18];
        var ms = new MergeSort();
        ms.sort$int_A(input1);
        ms.sort$int_A(input2);
        ms.sort$int_A(input3);
        ms.sort$int_A(input4);
        ms.printArray(input1);
        ms.printArray(input2);
        ms.printArray(input3);
        ms.printArray(input4);
    };
    return MergeSort;
}());
MergeSort["__class"] = "MergeSort";
MergeSort.main(null);
