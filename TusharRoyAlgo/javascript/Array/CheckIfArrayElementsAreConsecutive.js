/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
/**
 * http://www.geeksforgeeks.org/check-if-array-elements-are-consecutive/
 * @class
 */
var CheckIfArrayElementsAreConsecutive = (function() {
    function CheckIfArrayElementsAreConsecutive() {}
    CheckIfArrayElementsAreConsecutive.prototype.areConsecutive = function(input) {
        var min = 2147483647;
        debugger;
        for (var i = 0; i < input.length; i++) {
                if (input[i] < min) {
                    min = input[i];
                }
        }
        for (var i = 0; i < input.length; i++) {
                if (Math.abs(input[i]) - min >= input.length) {
                    return false;
                }
                if (input[Math.abs(input[i]) - min] < 0) {
                    return false;
                }
                input[Math.abs(input[i]) - min] = -input[Math.abs(input[i]) - min];
        }
        for (var i = 0; i < input.length; i++) {
                input[i] = Math.abs(input[i]);
        }
        return true;
    };
    CheckIfArrayElementsAreConsecutive.main = function(args) {
        var input = [76, 78, 76, 77, 73, 74];
        var cia = new CheckIfArrayElementsAreConsecutive();
        console.info(cia.areConsecutive(input));
    };
    return CheckIfArrayElementsAreConsecutive;
})();
CheckIfArrayElementsAreConsecutive["__class"] =
    "CheckIfArrayElementsAreConsecutive";
CheckIfArrayElementsAreConsecutive.main(null);


//check duplicate elements in Array in place n(o)
var FindDuplicate = (function () {
    function FindDuplicate() {
    }
    FindDuplicate.prototype.printRepeating = function (arr, size) {
        var i;
        console.info("The repeating elements are : ");  
        for (i = 0; i < size; i++) {
            {
                console.log(i);
                console.log(arr[i]);
                
                if (arr[Math.abs(arr[i])] >= 0)
                    arr[Math.abs(arr[i])] = -arr[Math.abs(arr[i])];
                else
                    console.info(Math.abs(arr[i]) + " ");
            }
            ;
        }
    };
    FindDuplicate.main = function (args) {
        var duplicate = new FindDuplicate();
        var arr = [1, 2, 3, 1, 3, 6, 6];
        var arr_size = arr.length;
        duplicate.printRepeating(arr, arr_size);
    };
    return FindDuplicate;
}());
FindDuplicate["__class"] = "FindDuplicate";
FindDuplicate.main(null);