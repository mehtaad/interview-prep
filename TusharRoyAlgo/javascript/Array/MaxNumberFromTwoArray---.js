/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
/**
 * Date 03/01/2016
 * @author Tushar Roy
 *
 * Given two arrays of length m and n with digits 0-9 representing two numbers.
 * Create the maximum number of length k <= m + n from digits of the two
 *
 * e.g
 * nums1 = [3, 4, 6, 5]
 * nums2 = [9, 1, 2, 5, 8, 3]
 * k = 5
 * return [9, 8, 6, 5, 3]
 *
 * https://leetcode.com/problems/create-maximum-number/
 * @class
 */
var solution = (function () {
    function solution() {
    }
    solution.prototype.maxNumber = function (nums1, nums2, k) {
        var max = new Array(k).fill(0);
        for (var i = 0; i <= k; i++) {
            {
                if (nums1.length < i || nums2.length < k - i) {
                    continue;
                }
                var a = this.merge(this.findLargest1(nums1, i), this.findLargest1(nums2, k - i));
                if (this.isGreater(a, max, 0, 0)) {
                    max = a;
                }
            }
            ;
        }
        return max;
    };
    /*private*/ solution.prototype.merge = function (a1, a2) {
        var result = (function (s) { var a = []; while (s-- > 0)
            a.push(0); return a; })(a1.length + a2.length);
        var i = 0;
        var j = 0;
        var k = 0;
        while ((i < a1.length || j < a2.length)) {
            {
                if (i === a1.length) {
                    result[k++] = a2[j++];
                }
                else if (j === a2.length) {
                    result[k++] = a1[i++];
                }
                else if (a1[i] > a2[j]) {
                    result[k++] = a1[i++];
                }
                else if (a1[i] < a2[j]) {
                    result[k++] = a2[j++];
                }
                else {
                    if (this.isGreater(a1, a2, i, j)) {
                        result[k++] = a1[i++];
                    }
                    else {
                        result[k++] = a2[j++];
                    }
                }
            }
        }
        ;
        return result;
    };
    /*private*/ solution.prototype.isGreater = function (a, b, i, j) {
        while ((i < a.length && j < b.length)) {
            {
                if (a[i] > b[j]) {
                    return true;
                }
                else if (a[i] < b[j]) {
                    return false;
                }
                i++;
                j++;
            }
        }
        ;
        return j === b.length;
    };
    /*private*/ solution.prototype.findLargest1 = function (nums, k) {
        if (k === 0) {
            return [];
        }
        var result = (function (s) { var a = []; while (s-- > 0)
            a.push(0); return a; })(k);
        var index = 0;
        for (var i = 0; i < nums.length; i++) {
            {
                while ((index > 0 && index + (nums.length - i - 1) >= k && result[index - 1] < nums[i])) {
                    {
                        index--;
                    }
                }
                ;
                if (index < k) {
                    result[index++] = nums[i];
                }
            }
            ;
        }
        return result;
    };
    solution.main = function (args) {
        var max = new solution();
        var input1 = [9, 1, 2, 5, 8, 3];
        var input2 = [3, 4, 6, 5];
        var input3 = [2, 5, 6, 4, 4, 0];
        var input4 = [7, 3, 8, 0, 6, 5, 7, 6, 2];
        var result = max.maxNumber(input3, input4, 15);
        console.info(java.util.Arrays.toString(result));
    };
    return solution;
}());
solution["__class"] = "solution";
solution.main(null);
