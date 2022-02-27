

/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
/**
 * http://www.geeksforgeeks.org/find-a-triplet-that-sum-to-a-given-value/
 * @class
 */
var findTriplet = function (input, sum) {
        input.sort(function(a,b){return a-b;});
        
        for (var i = 0; i < input.length - 2; i++) {
            {
                var start = i + 1;
                var end = input.length - 1;
                var new_sum = sum - input[i];
                debugger;
                while ((start < end)) {
                    {
                        if (new_sum === input[start] + input[end]) {
                            var t = {};
                            t.a = input[i];
                            t.b = input[start];
                            t.c = input[end];
                            return t;
                        }
                        if (new_sum > input[start] + input[end]) {
                            start++;
                        }
                        else {
                            end--;
                        }
                    }
                }
                ;
            }
            ;
        }
        return null;
    };
    /**
     * https://leetcode.com/problems/3sum/
     * @param {Array} nums
     * @return {number[][]}
     */
    var threeSum = function (nums) {
        nums.sort(function(a,b){return a-b;});
        var result = ([]);
        for (var i = 0; i < nums.length - 2; i++) {
                if (i !== 0 && nums[i] === nums[i - 1]) {
                    continue;
                }
                var start = i + 1;
                var end = nums.length - 1;
                while ((start < end)) {
                        if (nums[i] + nums[start] + nums[end] === 0) {
                            var r = ([]);
                            /* add */ (r.push(nums[i]) > 0);
                            /* add */ (r.push(nums[start]) > 0);
                            /* add */ (r.push(nums[end]) > 0);
                            /* add */ (result.push(r) > 0);
                            start++;
                            end--;
                            while ((start < nums.length && nums[start] === nums[start - 1])) {
                                    start++;
                            }
                            while ((end >= 0 && nums[end] === nums[end + 1])) {
                                    end--;
                            }
                        }
                        else if (nums[i] + nums[start] + nums[end] < 0) {
                            start++;
                        }
                        else {
                            end--;
                        }
                }
        }
        return result;
    };
        var input = [1, 2, 6, 9, 11, 18, 26, 28];
        var sum = 22;
        console.info(findTriplet(input, sum));
    