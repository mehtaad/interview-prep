/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
/**
 * Date 12/29/2015
 * @author Tushar Roy
 *
 * Given two arrays one with values and other with index where values should be positioned. Move values to correct
 * position
 *
 * Time complexity - O(n)
 * Space complexity - O(1)
 *
 * http://www.geeksforgeeks.org/reorder-a-array-according-to-given-indexes/
 * @class
 */
var reorder = function(input, index) {
    if (index.length !== input.length) {
        return;
    }
    console.log("");
    console.log(JSON.stringify(index));
    console.log(JSON.stringify(input));
    for (var i = 0; i < index.length; i++) {
        while (index[i] !== i) {
            var sIndex = index[index[i]];
            var sVal = input[index[i]];
            index[index[i]] = index[i];
            input[index[i]] = input[i];
            index[i] = sIndex;
            input[i] = sVal;
            
            console.log(JSON.stringify(index));
            console.log(JSON.stringify(input));
        }
    }
};
var input = [50, 40, 70, 60, 90];
var index = [3, 0, 4, 1, 2];
reorder(input, index);
console.log(input);
console.log(index);
