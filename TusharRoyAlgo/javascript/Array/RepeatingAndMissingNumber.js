

/**
 * http://www.geeksforgeeks.org/find-a-repeating-and-a-missing-number/
 */
/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
var findNumbers = function (input) {
        var p = {};
        for (var i = 0; i < input.length; i++) {
                if (input[Math.abs(input[i]) - 1] < 0) {
                    p.repeating = Math.abs(input[i]);
                }
                else {
                    input[Math.abs(input[i]) - 1] = -input[Math.abs(input[i]) - 1];
                }
        }
        for (var i = 0; i < input.length; i++) {
                if (input[i] < 0) {
                    input[i] = -input[i];
                }
                else {
                    p.missing = i + 1;
                }
        }
        return p;
    };
    
    var input = [3, 1, 2, 4, 6, 8, 2, 7];
    console.info(findNumbers(input));
