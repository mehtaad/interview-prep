/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
/**
 * Date 10/19/2016
 * @author Tushar Roy
 *
 * Given a sorted integer array without duplicates, return the summary of its ranges.
 * For example, given [0,1,2,4,5,7], return ["0->2","4->5","7"].
 *
 * Solution -
 * Just check if num[i] + 1 != num[i + 1]. If its not equal means you need to add previous range to result
 * and start a new range.
 *
 * Time complexity O(n)
 *
 * https://leetcode.com/problems/summary-ranges/
 * @class
 */
var summaryRanges = function (nums) {
        if (nums.length === 0) {
        }
        if (nums.length === 1) {
        }
        var start = 0;
        for (var i = 0; i < nums.length - 1; i++) {
            {
                if ((nums[i] + 1) !== nums[i + 1]) {
                    makeRange(nums[start], nums[i]);
                    start = i + 1;
                }
            }
            ;
        }
        if ((nums[nums.length - 2] + 1) !== nums[nums.length - 1]) {
            start = nums.length - 1;
        }
        makeRange(nums[start], nums[nums.length - 1]);
    };
    var makeRange = function (a, b) {
        if (a === b) {
            return new String(a).toString();
        }
        return a + "->" + b;
    };
    return SummaryRanges;
}());
SummaryRanges["__class"] = "SummaryRanges";
