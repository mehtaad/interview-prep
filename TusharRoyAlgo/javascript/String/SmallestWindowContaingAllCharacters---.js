
/**
 * References
 * https://leetcode.com/problems/minimum-window-subvar /
 * http://www.geeksforgeeks.org/find-the-smallest-window-in-a-var -containing-all-characters-of-another-var /
 */

    //find sub str charcter in any order in given string in any order, output the found sub string length

    var  minWindow = function(s, t) {
        var countMap = {};
        t= t.split('');
        for (var i=0;i<t.length;i++) {
            if(countMap[t[i]]){
                countMap[t[i]].val++;
            } else{
                countMap[t[i]]={val:1};
            }
        }
        var  start = 0;
        var  currLen = t.length;
        var  minWindow = 99999;
        var  minStart = 0;
        var  i = 0;
        while (i < s.length) {
            //find 1st occurence of t in string s
            var  val = countMap[s[i]]?countMap[s[i]].val:null;
            if (val == null) {
                i++;
                continue;
            }
            if (val > 0) {
                currLen--;//count can go -ve
            }
            val--;
            countMap[s[i]].val= val;
            while (currLen == 0) {
                //after 1st occurence of t patteren this loop will execute for each character found in s string
                //maintain rolling window and count the window 
                
                if (minWindow > i - start + 1) {
                    minWindow = i - start + 1;//found new smaller window of string
                    minStart = start;
                }
                var  val1 = countMap[s[start]]?countMap[s[start]].val:null;
                if (val1 != null) {
                    if (val1 == 0) {
                        break;//break if any mapped char count is 0
                    } else {
                        val1++;
                        countMap[s[start]].val=val1;
                    }
                }
                start++;
            }
            i++;
        }

        return minWindow != 99999 ? s.subString(minStart, minStart + minWindow) : "";
    }

   
    var  str = "Tsuaosyogrlmnsluuorjkoruost";
    var  subvar  = "soor";
    var  result = minWindow(str, subvar );
    console.log(result);
