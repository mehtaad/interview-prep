/**
 * Date 04/03/2016
 * @author Tushar Roy
 *
 * Given a string, find the length of the longest substring T that contains at most k distinct characters.
 * For example, Given s = “eceba” and k = 2,
 * T is "ece" which its length is 3.
 *
 * Time complexity O(n)
 * Space complexity O(n)
 *
 * https://leetcode.com/problems/longest-substring-with-at-most-k-distinct-characters/
 */
var lengthOfLongestSubstringKDistinct = function(s, k) {
    if (k == 0 || s.length == 0) {
        return 0;
    }
    var ascii = new Array(256).fill(0);
    var count = 0;
    var start = 0;
    var max = 0;
    for (var i = 0; i < s.length; i++) {
        var ch = s.charCodeAt(i);
        if (count < k) {
            if (ascii[ch] == 0) {
                count++;
            }
        } else if (ascii[ch] == 0) {
            while (start < i) {
                var ch1 = s.charCodeAt(start++);
                ascii[ch1]--;
                if (ascii[ch1] == 0) {
                    break;
                }
            }
        }
        ascii[ch]++;
        max = Math.max(max, i - start + 1);
    }
    return max;
};

var lengthOfLongestSubstringKDistinctUsingMap = function(s, k) {
    if (k == 0 || s.length == 0) {
        return 0;
    }
    var countMap = {};
    var max = 0;
    var start = 0;
    //debugger;
    for (var i = 0; i < s.length; i++) {
        var ch = s[i];
        if (!countMap[ch] && Object.keys(countMap).length >= k) {
            while (start < i) {
                var tt = countMap[s[start]];
                if (tt.val == 1) delete countMap[s[start]];
                else {
                    tt.val--;
                }

                start++;
                if (Object.keys(countMap).length < k) {
                    break;
                }
            }
        }
        if (countMap[ch]) countMap[ch].val++;
        else {
            countMap[ch] = {};
            countMap[ch].val = 1;
        }
        max = Math.max(max, i - start + 1);
    }
    return max;
};

console.log(lengthOfLongestSubstringKDistinctUsingMap("aabbbhhjjjjjj", 2));
console.log(lengthOfLongestSubstringKDistinct("aabbbhhjjjjjj", 2));
