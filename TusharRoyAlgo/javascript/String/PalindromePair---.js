

/**
 * Given a list of unique words. Find all pairs of distinct indices (i, j) in the given list,
 * so that the concatenation of the two words, i.e. words[i] + words[j] is a palindrome.
 *
 * Solution -
 * First keep mapping of word and its index.
 * Then iterate through every word and split it varo every possible 2 substring. Then if first substring is palindrome
 * and reverse of second substring is in map means you can form a palindrome by combing this word with the word
 * in the map.
 *
 * Time complexity is O(n*k*k)
 *
 * Reference
 * https://leetcode.com/problems/palindrome-pairs/
 */
    var palindromePairs = function(words) {
        if (words == null || words.length < 2) {
            return [];
        }
        var wordMap = {};
        var result = [];

        for (var i = 0; i < words.length; i++) {
            wordMap[words[i]]= {index:i};
        }

        for (var i = 0; i < words.length; i++) {
            for (var j = 0; j < words[i].length; j++) {
                var str1 = words[i].substring(0, j + 1);
                var str2 = words[i].substring(j + 1, words[i].length);
                if (isPalindrome(str2)) {
                    var revStr1 = reverseString(str1);
                    var index = wordMap[revStr1]?wordMap[revStr1].index:null;;
                    if (index != null) {
                        createList(i, index, result);
                    }
                }
                if (isPalindrome(str1)) {
                    var revStr2 = reverseString(str2);
                    var index = wordMap[revStr2]?wordMap[revStr2].index:null;
                    if (index != null) {
                        createList(index, i, result);
                        if (revStr2==="") {
                            createList(i, index, result);
                        }
                    }
                }
            }
        }
        return result;
    }
    var reverseString = function(str) {
        var tt=str.split('');
        var rev =[];
        while(tt.length)
           rev.push(tt.pop());
        return rev.join('');
    }

    var isPalindrome = function(word) {
        var start = 0;
        var end = word.length - 1;
        while (start < end) {
            if (word[start] != word[end]) {
                return false;
            }
            start++;
            end--;
        }
        return true;
    }

    var createList=function( i1,  i2,  result) {
        if (i1 == i2) {
            return;
        }
        var r = [];
        r.push(i1);
        r.push(i2);
        result.push(r);
    }

   
        
/*var words = ["bat", "tab"];
var result = palindromePairs(words);
console.log(result);
var words1 = ["abcd", "dcba", "lls", "s", "sssll"];
result = palindromePairs(words1);
console.log(result);*/
var words2 = ["", "abcd", "abba"];
result = palindromePairs(words2);
console.log(result);
/*var words3 = ["a","abc","aba",""];
result = palindromePairs(words3);
console.log(result);
var words4 = ["abcd","dcba","lls","s","sssll"];
result = palindromePairs(words4);
console.log(result);
   */