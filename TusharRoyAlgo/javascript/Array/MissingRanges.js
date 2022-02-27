/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
/**
 * Given a sorted integer array where the range of elements are in the inclusive range [lower, upper], return its missing ranges.
 * For example, given [0, 1, 3, 50, 75], lower = 0 and upper = 99, return ["2", "4->49", "51->74", "76->99"].
 *
 * Time complexity O(n)
 *
 * https://leetcode.com/problems/missing-ranges/
 * @class
 */
var findMissingRanges = function (nums, lower, upper) {
        if (nums.length === 0) {
            return makeRange(lower, upper);
        }
        var result = ([]);
        if (lower < nums[0]) {
            result.push(this.makeRange(lower, nums[0] - 1));
        }
        for (var i = 0; i < nums.length - 1; i++) {
            if (nums[i] === nums[i + 1]) {
                continue;
            }
            if ((nums[i] + 1) !== nums[i + 1]) {
                result.push(this.makeRange(nums[i] + 1, nums[i + 1] - 1) );
            }
        }
        if (nums[nums.length - 1] < upper) {
            result.push(this.makeRange(nums[nums.length - 1] + 1, upper));
        }
        return result;
    };
    var makeRange = function (a, b) {
        if (a === b) {
            return new String(a).toString();
        }
        else {
            return a + "->" + b;
        }
    };
    
   var m= [3, 7, 10, 50, 75], lower = 0 , upper = 99;
   console.log(findMissingRanges(m,lower,upper));