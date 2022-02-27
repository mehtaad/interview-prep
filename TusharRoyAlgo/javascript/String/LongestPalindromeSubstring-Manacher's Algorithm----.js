
/**
 * Date 07/29/2015
 * @author Tushar Roy
 *
 * Given a string find longest palindromic substring in this string.
 *
 * References 
 * https://www.youtube.com/watch?v=nbTSfrEfo6M  (watch this )
 * https://www.youtube.com/watch?v=V-sEwsca1ak 
 * http://www.geeksforgeeks.org/longest-palindrome-substring-set-1/
 * http://www.geeksforgeeks.org/longest-palindromic-substring-set-2/
 * http://articles.leetcode.com/2011/11/longest-palindromic-substring-part-ii.html
 * http://www.akalin.cx/longest-palindrome-linear-time
 * http://tarokuriyama.com/projects/palindrome2.php
 */


var longestPalindromeSubstringEasy = function(arr) {

    var longest_substring = 1;
    for (var i = 0; i < arr.length; i++) {

        var x, y;
        var palindrome;
        x = i;
        y = i + 1;
        palindrome = 0;
        while (x >= 0 && y < arr.length && arr[x] == arr[y]) {//even compair
            x--;
            y++;
            palindrome += 2;
        }
        longest_substring = Math.max(longest_substring, palindrome);
        
        x = i - 1;
        y = i + 1;
        palindrome = 1;
        while (x >= 0 && y < arr.length && arr[x] == arr[y]) {//odd compare
            x--;
            y++;
            palindrome += 2;
        }
        longest_substring = Math.max(longest_substring, palindrome);
    }
    return longest_substring;
}
var longestPalindromeDynamic = function(str){
    var T = new Array(str.length);
    for(var i=0;i<str.length;i++){
        T[i]=new Array(str.length);
    }
    
    
    for(var i=0; i < T.length; i++){
        T[i][i] = true;
    }
    
    var max = 1;
    for(var l = 2; l <= str.length; l++){
        var len = 0;
        for(var i=0; i < str.length-l+1; i++){
            var j = i + l-1;
            len = 0;
            if(l == 2){
                if(str[i] == str[j]){
                    T[i][j] = true;
                    len = 2;
                }
            }else{
                if(str[i] == str[j] && T[i+1][j-1]){
                    T[i][j] = true;
                    len = j -i + 1;
                }
            }
            if(len > max){
                max = len;
            }
        }
    }
    return max;
}
/**
 * Linear time Manacher's algorithm to find longest palindromic substring.
 * There are 4 cases to handle
 * Case 1 : Right side palindrome is totally contained under current palindrome. In this case do not consider this as center.
 * Case 2 : Current palindrome is proper suffix of input. Terminate the loop in this case. No better palindrom will be found on right.
 * Case 3 : Right side palindrome is proper suffix and its corresponding left side palindrome is proper prefix of current palindrome. Make largest such point as
 * next center.
 * Case 4 : Right side palindrome is proper suffix but its left corresponding palindrome is be beyond current palindrome. Do not consider this
 * as center because it will not extend at all.
 *
 * To handle even size palindromes replace input string with one containing $ between every input character and in start and end.
 */
var longestPalindromicSubstringLinear = function(input) {
    var index = 0;
    //preprocess the input to convert it into type abc -> $a$b$c$ to handle even length case.
    //Total size will be 2*n + 1 of this new array.
    debugger;
    var newInput = new Array(2*input.length + 1);
    for(var i=0; i < newInput.length; i++) {
        if(i % 2 != 0) {
            newInput[i] = input[index++];
        } else {
            newInput[i] = '$';
        }
    }

    //create temporary array for holding largest palindrome at every point. There are 2*n + 1 such points.
    var T =  new Array(newInput.length).fill(0);
    var start = 0;
    var end = 0;
    //here i is the center.
    debugger;
    for(var i=0; i < newInput.length; ) {
        //expand around i. See how far we can go.
        while(start >0 && end < newInput.length-1 && newInput[start-1] == newInput[end+1]) {
            start--;
            end++;
        }
        //set the longest value of palindrome around center i at T[i]
        T[i] = end - start + 1;

        //this is case 2. Current palindrome is proper suffix of input. No need to proceed. Just break out of loop.
        if(end == T.length -1) {
            break;
        }
        //Mark newCenter to be either end or end + 1 depending on if we dealing with even or old number input.
        var newCenter = end + (i%2 ==0 ? 1 : 0);

        for(var j = i + 1; j <= end; j++) {

            //i - (j - i) is left mirror. Its possible left mirror might go beyond current center palindrome. So take minimum
            //of either left side palindrome or distance of j to end.
            T[j] = Math.min(T[i - (j - i)], 2 * (end - j) + 1);
            //Only proceed if we get case 3. This check is to make sure we do not pick j as new center for case 1 or case 4
            //As soon as we find a center lets break out of this inner while loop.
            if(j + Math.floor(T[i - (j - i)]/2) == end) {
                newCenter = j;
                break;
            }
        }
        //make i as newCenter. Set right and left to atleast the value we already know should be matching based of left side palindrome.
        i = newCenter;
        end = i + Math.floor(T[i]/2);
        start = i - Math.floor(T[i]/2);
    }

    //find the max palindrome in T and return it.
    var max = 0;
    for(var i = 0; i < T.length; i++) {
        var val;
  
        val = Math.floor(T[i]/2);
        if(max < val) {
            max = val;
        }
    }
    return max;
}

console.log(longestPalindromicSubstringLinear("abba".split("")));
console.log(longestPalindromicSubstringLinear("abbababba".split("")));
console.log(longestPalindromicSubstringLinear("babcbaabcbaccba".split("")));
console.log(longestPalindromicSubstringLinear("cdbabcbabdab".split("")));
    