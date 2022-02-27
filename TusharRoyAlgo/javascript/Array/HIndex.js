/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
/**
 * Given an array of citations (each citation is a non-negative integer) of a researcher,
 * write a function to compute the researcher's h-index.
 * https://leetcode.com/problems/h-index/
 * @class
 */
var HIndex = (function () {
    function HIndex() {
    }
    HIndex.prototype.hIndex = function (citations) {
        var count = new Array(citations.length + 1).fill(0);
        for (var index3219 = 0; index3219 < citations.length; index3219++) {
            var c = citations[index3219];
            {
                if (c <= citations.length) {
                    count[c]++;
                }
                else {
                    count[citations.length]++;
                }
            }
        }
        console.log(count);
        debugger;

        var sum = 0;
        var max = 0;
        var t=[];
        for (var i = 0; i < count.length; i++) {
            {
                sum += count[i];//count has number of citation given count
                //we are trying to see if i is answer.
                //already everything before i has less than i citations. Since count array store cititation count received in increasing order
                //so only thing to check is that number of paper p were cittation count is more then or equal to p >= i where p is
                //total number of papers with i or more citations.
                /*Total number of paper length minus papers with less then i citation*/
                var p = citations.length - sum + count[i];
                t.push[p];
                if (p >=i) {
                    max = i;
                }
            }
            ;
        }
        console.log(t);
        return max;
    };
    HIndex.main = function (args) {
        var hi = new HIndex();
        var input = [0, 1, 1, 1, 1, 6, 7, 8];
        console.info(hi.hIndex(input));
    };
    return HIndex;
}());
HIndex["__class"] = "HIndex";
HIndex.main(null);

//0 1 2 6 6 6 6 7
//0 1 2 3 4 5 6 7
//0 1 1 1 3 6 7 8
//0 1 2 3 4 5 6 7

//0 1 2 5 6
