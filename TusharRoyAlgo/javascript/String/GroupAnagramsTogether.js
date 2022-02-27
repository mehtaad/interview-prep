

/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
/**
 * https://leetcode.com/problems/anagrams/
 * @class
 */

    var groupAnagrams = function (strs) {
        if (strs == null || strs.length === 0)
            return ([]);
        var listIndex = 0;
        var result = [];
        var anagramGroup = {};
        for (var index3729 = 0; index3729 < strs.length; index3729++) {
            var str = strs[index3729];
                var chars = str.split('').sort();
                var sorted = chars.join('');
                if (anagramGroup.hasOwnProperty(sorted)) {

                    var index = anagramGroup[sorted];
                    var listResult = result[index];
                    listResult.push(str);
                }
                else {
                    var resultList = [];
                    resultList.push(str);
                    result.splice(listIndex, 0, resultList);
                    anagramGroup[sorted] = listIndex;
                    listIndex++;
                }
        }
        return result;
    };
    
    console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"])); 