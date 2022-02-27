/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
/**
 * Date 07/31/2016
 * @author Tushar Roy
 *
 * Given an array of non-negative integers, you are initially positioned at the first index of the array.
 * Each element in the array represents your maximum jump length at that position.
 * Determine if you are able to reach the last index.
 *
 * Time complexity O(n)
 * Space complexity O(1)
 *
 * https://leetcode.com/problems/jump-game/
 *
 * Given an array of non-negative integers, you are initially positioned at the first index of the array.
 * Each element in the array represents your maximum jump length at that position.
 * Your goal is to reach the last index in the minimum number of jumps.
 *
 * Time complexity O(n)
 * Space complexity O(1)
 *
 * https://leetcode.com/problems/jump-game-ii/
 * @class
 */
var JumpGame = (function () {
    function JumpGame() {
    }
    JumpGame.prototype.canJump = function (nums) {
        var jump = 0;
        var i;

        for (i = 0; i < nums.length && i <= jump; i++) {
            {
                jump = Math.max(jump, i + nums[i]);
            }
            ;
        }
        return i === nums.length;
    };
    JumpGame.prototype.jump = function (nums) {
        var current = 0;
        var max = 0;
        var count = 0;
        for (var i = 0; i < nums.length - 1; i++) {
            {
                max = Math.max(max, i + nums[i]);
                if (current === i) {
                    count++;
                    current = max;
                }
            }
            ;
        }
        return count;
    };
    JumpGame.main = function (args) {
        var jumpGame = new JumpGame();
        var nums = [3, 2, 3, 0, 2, 1];
        console.info(jumpGame.jump(nums));
        var nums1 = [3, 0, 2, 0, 0, 1];
        console.info(jumpGame.canJump(nums1));
    };
    return JumpGame;
}());
JumpGame["__class"] = "JumpGame";
JumpGame.main(null);
