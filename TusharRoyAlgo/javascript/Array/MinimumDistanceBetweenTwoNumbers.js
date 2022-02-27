/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
/**
 * http://www.geeksforgeeks.org/find-the-minimum-distance-between-two-numbers/
 * @class
 */
var MinimumDistanceBetweenTwoNumbers = (function () {
    function MinimumDistanceBetweenTwoNumbers() {
    }
    MinimumDistanceBetweenTwoNumbers.prototype.minDistance = function (input, x, y) {
        var prev = -1;
        var prevFound = -1;
        var min = 10000;
        for (var i = 0; i < input.length; i++) {
            {
                if (input[i] === x) {
                    if (prevFound === -1) {
                        prevFound = x;
                        prev = i;
                    }
                    else if (prevFound === x) {
                        prev = i;
                    }
                    else {
                        debugger;
                        min = min > i - prev ? i - prev : min;
                        prev = i;
                        prevFound = x;
                    }
                }
                else if (input[i] === y) {
                    if (prevFound === -1) {
                        prevFound = y;
                        prev = i;
                    }
                    else if (prevFound === y) {
                        prev = i;
                    }
                    else {
                        debugger;
                        min = min > i - prev ? i - prev : min;
                        prevFound = y;
                        prev = i;
                    }
                }
            }
            ;
        }
        return min;
    };
    MinimumDistanceBetweenTwoNumbers.main = function (args) {
        var mdb = new MinimumDistanceBetweenTwoNumbers();
        var input = [6, 4, 1, 5, 6, 9, 10, 4, 6, 6];
        console.info(mdb.minDistance(input, 5, 6));
    };
    return MinimumDistanceBetweenTwoNumbers;
}());
MinimumDistanceBetweenTwoNumbers["__class"] = "MinimumDistanceBetweenTwoNumbers";
MinimumDistanceBetweenTwoNumbers.main(null);
