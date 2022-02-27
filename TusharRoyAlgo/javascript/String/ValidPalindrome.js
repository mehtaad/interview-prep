package com.interview.string;

/**
 * Date 04/09/2016
 * @author Tushar Roy
 *
 * Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.
 * For example,
 * "A man, a plan, a canal: Panama" is a palindrome.
 * "race a car" is not a palindrome.
 *
 * https://leetcode.com/problems/valid-palindrome/
 */

    var isPalindrome = function( s) {
        var start = 0;
        var end = s.length - 1;
        while (start < end) {
            if (!isAlphaNum(s[start])) {
                start++;
            } else if (!isAlphaNum(s[end])) {
                end--;
            } else {
                if ((s[start++]).toLowerCase() != (s[end--]).toLowerCase()) {
                    return false;
                }
            }
        }
        return true;
    }

    var isAlphaNum = function( ch) {
        if ((ch >= '0' && ch <= '9') || (ch >= 'a' && ch <= 'z') || (ch >= 'A' && ch <= 'Z')) {
            return true;
        }
        return false;
    }
    console.log(isPalindrome("A man, a plan, a canal: Panama"));
