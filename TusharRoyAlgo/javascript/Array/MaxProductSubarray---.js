/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
/**
 * Date 04/`7/2016
 * @author Tushar Roy
 *
 * Find the contiguous subarray within an array (containing at least one number) which has the largest product.
 *
 * Time complexity is O(n)
 * Space complexity is O(1)
 *
 * http://www.geeksforgeeks.org/maximum-product-subarray/
 * https://leetcode.com/problems/maximum-product-subarray/
 * @class
 */
var MaxProductSubarray = (function () {
    function MaxProductSubarray() {
    }
    MaxProductSubarray.prototype.maxProduct = function (nums) {
        var neg = 1;
        var pos = 1;
        var maxProduct = nums[0];
        for (var i = 0; i < nums.length; i++) {
            {
                if (nums[i] === 0) {
                    neg = 1;
                    pos = 1;
                    maxProduct = Math.max(maxProduct, 0);
                }
                else if (nums[i] < 0) {
                    var temp = pos;
                    if (neg < 0) {
                        pos = neg * nums[i];
                        maxProduct = Math.max(pos, maxProduct);
                    }
                    else {
                        pos = 1;
                    }
                    neg = temp * nums[i];
                }
                else {
                    if (neg < 0) {
                        neg *= nums[i];
                    }
                    pos *= nums[i];
                    maxProduct = Math.max(pos, maxProduct);
                }
            }
            ;
        }
        return maxProduct;
    };
    MaxProductSubarray.main = function (args) {
        var mps = new MaxProductSubarray();
        var input = [-6, -3, 8, -9, -1, -1, 3, 6, 9, 0, 3, -1];
        console.info(mps.maxProduct(input));
    };
    return MaxProductSubarray;
}());
MaxProductSubarray["__class"] = "MaxProductSubarray";
MaxProductSubarray.main(null);
