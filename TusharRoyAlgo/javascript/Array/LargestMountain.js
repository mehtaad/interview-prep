/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
/**
 * https://leetcode.com/problems/longest-mountain-in-array/description/
 * @class
 */
    var State ={
        STARTED:1,
        INCREASING:2,
        DECREASING:3
    }

    var longestMountain = function (nums) {
        var start = 0;
        var max = 0;
        var state = State.STARTED;
        for (var i = 1; i < nums.length; i++) {
            {
                if (nums[i] === nums[i - 1]) {
                    start = i;
                    state = State.STARTED;
                }
                else if (nums[i] > nums[i - 1]) {
                    if (state === State.DECREASING || state === State.STARTED) {
                        start = i - 1;
                        state = State.INCREASING;
                    }
                }
                else {
                    if (state === State.INCREASING || state === State.DECREASING) {
                        state = State.DECREASING;
                        max = Math.max(max, i - start + 1);
                    }
                    else {
                        start = i;
                    }
                }
            }
            ;
        }
        return max;
    };

        var nums = [2, 1, 4, 7, 3, 2, 5];
        console.info(longestMountain(nums));
