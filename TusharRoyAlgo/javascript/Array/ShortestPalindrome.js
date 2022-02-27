/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
/**
 * Date 03/04/2016
 * @author Tushar Roy
 *
 * How to append minimum numbers of characters in front of string to make it a palindrome.
 *
 * Idea is to create a new string which is original ttring + $ + reverse of original string
 * Get value of suffix which is also prefix using KMP.
 * This part of string is good. Rest needs to be copied in the front.
 *
 * Time complexity is O(n)
 * Space complexity is O(n)
 *
 * https://leetcode.com/problems/shortest-palindrome/
 * @class
 */
var shortestPalindrome = function(s, append) {
    var input = createInput(s, append);
    console.log(input);
    var val = kmp(input);
    var sb = "";
    if(!append) {
        var remaining = s.length - val;
        var strLen = s.length - 1;
        while (remaining > 0) {
            sb = sb + s[strLen];
            strLen--;
            remaining--;
        }
        sb = sb + s;
    } else {
        var remaining = s.length - val;
        var strLen = remaining-1;
        while (remaining > 0) {
            sb = sb + s[strLen];
            strLen--;
            remaining--;
        }
        sb = s+sb;
    }
    return sb;
};
var kmp = function(input) {
    var lpsIndexArr = new Array(input.length).fill(0);
    var nextIndex = 1;
    var startIndex = 0;
    while (nextIndex < input.length) {
        if (input[startIndex] == input[nextIndex]) {
            lpsIndexArr[nextIndex] = startIndex + 1;
            startIndex++;
        } else {
            while (startIndex != 0) {
                startIndex = lpsIndexArr[startIndex - 1];
                if (input[nextIndex] == input[startIndex]) {
                    lpsIndexArr[nextIndex] = startIndex + 1;
                    startIndex++;
                    break;
                }
            }
        }
        nextIndex++;
    }
    return lpsIndexArr[input.length - 1];
};
var createInput = function(s, append) {//create palindrome appending or concating char
    var str = s.split("");
    var temp = [];
    while (str.length > 0) {
        temp.push(str.pop());
    }
    var finalStr
    if(!append)
     finalStr = s + "$" + temp.join("");
    else 
      finalStr = temp.join("") + "$" + s;  
    return finalStr.split("");
};

console.info(shortestPalindrome("aacecaaa",false));
console.info(shortestPalindrome("aaacecaa",true));
console.info(shortestPalindrome("abede",true));

