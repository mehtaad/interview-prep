/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
/**
 * Longest Substring with At Most Two Distinct Characters
 * https://leetcode.com/problems/longest-substring-with-at-most-two-distinct-characters/
 * @class
 */
var lengthOfLongestSubstringTwoDistinct = function(s) {
    var count1 = 0;
    var count2 = 0;
    var c1 = String.fromCharCode(0);
    var c2 = String.fromCharCode(0);
    var start = 0;
    var current = 0;
    var max = 0;
    {
        var array3286 = s.split("");
        for (var index3285 = 0; index3285 < array3286.length; index3285++) {
            var ch = array3286[index3285];
            if (ch === c1 || ch === c2) {
                if (ch === c1) {
                    count1++;
                } else {
                    count2++;
                }
            } else {
                if (count1 != 0 && count2 != 0) {
                    while (start < current) {
                        if (s[start] === c1) {
                            count1--;
                        } else if (s[start] === c2) {
                            count2--;
                        }
                        start++;
                        if (count1 == 0 || count2 == 0) {
                            break;
                        }
                    }
                }
                if (count1 === 0) {
                    c1 = ch;
                    count1 = 1;
                } else {
                    c2 = ch;
                    count2 = 1;
                }
            }
            max = Math.max(max, current - start + 1);
            current++;
        }
    }
    return max;
};
console.info(lengthOfLongestSubstringTwoDistinct("eceba"));
