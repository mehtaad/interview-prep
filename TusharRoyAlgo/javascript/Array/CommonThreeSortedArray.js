

/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
/**
 * Date 01/01/2016
 * @author Tushar Roy
 *
 * Given 3 sorted array find common elements in these 3 sorted array.
 *
 * Time complexity is O(m + n + k)
 *
 * http://www.geeksforgeeks.org/find-common-elements-three-sorted-arrays/
 * @class
 */
var CommonThreeSortedArray = (function () {
    function CommonThreeSortedArray() {
    }
    CommonThreeSortedArray.prototype.commonElements = function (input1, input2, input3) {
        var i = 0;
        var j = 0;
        var k = 0;
        var result = ([]);
        while ((i < input1.length && j < input2.length && k < input3.length)) {
            {
                if (input1[i] === input2[j] && input2[j] === input3[k]) {
                    /* add */ (result.push(input1[i]) > 0);
                    i++;
                    j++;
                    k++;
                }
                else if (input1[i] < input2[j]) {
                    i++;
                }
                else if (input2[j] < input3[k]) {
                    j++;
                }
                else {
                    k++;
                }
            }
        }
        ;
        return result;
    };
    CommonThreeSortedArray.main = function (args) {
        var input1 = [1, 5, 10, 20, 40, 80];
        var input2 = [6, 7, 20, 80, 100];
        var input3 = [3, 4, 15, 20, 30, 70, 80, 120];
        var cts = new CommonThreeSortedArray();
        var result = cts.commonElements(input1, input2, input3);
        result.forEach(function (i) { return console.info(i + " "); });
    };
    return CommonThreeSortedArray;
}());
CommonThreeSortedArray["__class"] = "CommonThreeSortedArray";
CommonThreeSortedArray.main(null);

