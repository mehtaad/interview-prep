/**
 * Date 09/22/2014
 * @author tusroy
 *
 * Do pattern matching using KMP algorithm
 *
 * Runtime complexity - O(m + n) where m is length of text and n is length of pattern
 * Space complexity - O(n)
 */
/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */

/**
 * Slow method of pattern matching
 * @param {Array} text
 * @param {Array} pattern
 * @return {boolean}
 */
var hasSubstring = function(text, pattern) {
    var i = 0;
    var j = 0;
    var k = 0;
    while (i < text.length && j < pattern.length) {
        {
            if (
                (function(c) {
                    return c.charCodeAt == null ? c : c.charCodeAt(0);
                })(text[i]) ==
                (function(c) {
                    return c.charCodeAt == null ? c : c.charCodeAt(0);
                })(pattern[j])
            ) {
                i++;
                j++;
            } else {
                j = 0;
                k++;
                i = k;
            }
        }
    }
    if (j === pattern.length) {
        return true;
    }
    return false;
};
/**
 * Compute temporary array to maintain size of suffix which is same as prefix
 * Time/space complexity is O(size of pattern)
 * @param {Array} pattern
 * @return {Array}
 * @private
 */
var computeTemporaryArray = function(pattern) {
    var lps = new Array(pattern.length).fill(0);
    var index = 0;
    for (var i = 1; i < pattern.length; ) {
        if (pattern[i] === pattern[index]) {
            lps[i] = index + 1;
            index++;
            i++;
        } else {
            if (index !== 0) {
                index = lps[index - 1];
            } else {
                lps[i] = 0;
                i++;
            }
        }
    }
    return lps;
};
/**
 * KMP algorithm of pattern matching.
 * @param {Array} text
 * @param {Array} pattern
 * @return {boolean}
 */
var KMP = function(text, pattern) {
    var lps = computeTemporaryArray(pattern);
    
    var i = 0;
    var j = 0;
    while (i < text.length && j < pattern.length) {
        if (text[i] == pattern[j]) {
            i++;
            j++;
        } else {
            if (j !== 0) {
                j = lps[j - 1];
            } else {
                i++;
            }
        }
    }
    if (j === pattern.length) {
        return true;
    }
    return false;
};

var str = "abcxabcdabcdabcy";
var subString = "abcdabcy";

var result = KMP(str.split(""), subString.split(""));
console.info(result);
