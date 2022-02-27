

/**
 * References
 * http://www.geeksforgeeks.org/length-of-the-longest-substring-without-repeating-characters/
 * https://leetcode.com/problems/longest-substring-without-repeating-characters/
 */
var lengthOfLongestSubstring = function(s) {
        var uniqueSet = {};
        var maxSize = 0;
        var start = 0;
        for(var i = 0; i < s.length; i++) {
            if(!uniqueSet[s[i]]) {
                uniqueSet[s[i]] = {}
                var tt =Object.keys(uniqueSet).length;
                if(tt > maxSize) {
                    maxSize = tt;
                }
            } else {
                while (s[start] != s[i]) {
                    delete uniqueSet[s[start]];
                    start++;
                }
                start++;
            }
        }
        return maxSize;
    }
    
    
    console.log(lengthOfLongestSubstring("ABCDECAMNCZB"));
    