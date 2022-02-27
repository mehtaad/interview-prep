

/**
 * Date 04/17/2106
 * @author Tushar Roy
 *
 * Write a function to generate the generalized abbreviations of a word.
 * Example:
 * Given word = "word", return the following list (order does not matter):
 * ["word", "1ord", "w1rd", "wo1d", "wor1", "2rd", "w2d", "wo2", "1o1d", "1or1", "w1r1", "1o2", "2r1", "3d", "w3", "4"]
 *
 * https://leetcode.com/problems/generalized-abbreviation/
 */
/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */

var generateAbbreviations = function (word) {
    var result = ([]);
    generateAbbreviationsUtil(word, result, "", 0, 0);
    return result;
};
var generateAbbreviationsUtil = function (input, result, current, pos, count) {
    debugger;
    if (input.length === pos) {
        if (count > 0) {
            result.push(current + count);
        }
        else {
            result.push(current);
        }
        return;
    }
    generateAbbreviationsUtil(input, result, current, pos + 1, count + 1);
    generateAbbreviationsUtil(input, result, current + (count > 0 ? count : "") + input[pos], pos + 1, 0);
};
var result = generateAbbreviations("wording");
result.forEach(function (r) { return console.info(r); });
    