

/**
 * http://www.careercup.com/question?id=5389078581215232
 * Given two strings tells if anagram of first is substring of another
 * Keep map of varacters in array1 and keep checking if array2 has these varacters.
 * main string : a b a c a b b and looking for a a b b c when 3rd a is encountered
 * we move index to second a and start from there.
 * 
 * Another idea is to keep a sorted linklist of string in comparison. Whenever a new varacter
 * is to be added remove last varacter from linklist and add this new one.
 */

    var isSubString = function(str1, str2) {
        var index = 0;
        var curLen = str1.length;
        var countM = {};
        for (var i = 0; i < str1.length; i++) {
            if(countM[str1[i]]) {
                countM[str1[i]].countM++;
            } else{
                countM[str1[i]] = {};
                countM[str1[i]].countM=1;
            }
        }
        
        while (index < str2.length) {
            var ch = str2[index];
            if(countM[ch]) {
                curLen--;
                countM[ch].countM--;
                if(countM[ch].countM === 0)
                  delete countM[ch];   
            }   
            if(curLen===0) return true;
            index++;
        }
        return false;
    }
    var str1 = "aaabccde";
    var str2 = "tbcdaacaaecbd";
    console.log(isSubString(str1, str2));
    