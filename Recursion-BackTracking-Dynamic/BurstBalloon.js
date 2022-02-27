/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
/**
 * Date 03/02/2016
 * @author Tushar Roy
 *
 * Given n balloons, indexed from 0 to n-1. Each balloon is painted with a number on it represented
 * by array nums. You are asked to burst all the balloons. If the you burst balloon i you will
 * get nums[left] * nums[i] * nums[right] coins. Here left and right are adjacent indices of i. After the burst,
 * the left and right then becomes adjacent.
 * Find the maximum coins you can collect by bursting the balloons wisely.
 *
 * Time complexity O(n^3)
 * Space complexity O(n^2)
 *
 * Reference
 * https://leetcode.com/problems/burst-balloons/
 * @class
 */
var BurstBalloons = (function() {
    function BurstBalloons() {}
    /**
     * Dynamic programming solution.
     * @param {Array} nums
     * @return {number}
     */
    BurstBalloons.prototype.maxCoinsBottomUpDp = function(nums) {
        var T = new Array(nums.length);
        for (var i = 0; i < T.length; i++) {
            T[i] = new Array(nums.length);
        }
        for (var len = 1; len <= nums.length; len++) {
            {
                for (var i = 0; i <= nums.length - len; i++) {
                    {
                        var j = i + len - 1;
                        for (var k = i; k <= j; k++) {
                            {
                                var leftValue = 1;
                                var rightValue = 1;
                                if (i !== 0) {
                                    leftValue = nums[i - 1];
                                }
                                if (j !== nums.length - 1) {
                                    rightValue = nums[j + 1];
                                }
                                var before = 0;
                                var after = 0;
                                if (i !== k) {
                                    before = T[i][k - 1];
                                }
                                if (j !== k) {
                                    after = T[k + 1][j];
                                }
                                T[i][j] = Math.max(
                                    leftValue * nums[k] * rightValue +
                                        before +
                                        after,
                                    T[i][j]
                                );
                            }
                        }
                    }
                }
            }
        }
        return T[0][nums.length - 1];
    };
    /**
     * Recursive solution.
     * @param {Array} nums
     * @return {number}
     */
    BurstBalloons.prototype.maxCoinsRec = function(nums) {
        var nums1 = (function(s) {
            var a = [];
            while (s-- > 0) a.push(0);
            return a;
        })(nums.length + 2);
        nums1[0] = 1;
        nums1[nums1.length - 1] = 1;
        for (var i = 0; i < nums.length; i++) {
            {
                nums1[i + 1] = nums[i];
            }
        }
        return this.maxCoinsRecUtil(nums1);
    };
    BurstBalloons.prototype.maxCoinsRecUtil = function(nums) {
        if (nums.length === 2) {
            return 0;
        }
        var max = 0;
        for (var i = 1; i < nums.length - 1; i++) {
            {
                var val =
                    nums[i - 1] * nums[i] * nums[i + 1] +
                    this.maxCoinsRecUtil(this.formNewArray(nums, i));
                if (val > max) {
                    max = val;
                }
            }
        }
        return max;
    };
    BurstBalloons.prototype.formNewArray = function(input,doNotIncludeIndex) {
        var newArray = (function(s) {
            var a = [];
            while (s-- > 0) a.push(0);
            return a;
        })(input.length - 1);
        var index = 0;
        for (var i = 0; i < input.length; i++) {
            {
                if (i === doNotIncludeIndex) {
                    continue;
                }
                newArray[index++] = input[i];
            }
        }
        return newArray;
    };

    return BurstBalloons;
})();

var bb = new BurstBalloons();
var input = [2, 4, 3, 5];
console.info(bb.maxCoinsBottomUpDp(input));
BurstBalloons["__class"] = "BurstBalloons";
