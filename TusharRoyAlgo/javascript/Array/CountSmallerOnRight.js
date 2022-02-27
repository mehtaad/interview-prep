/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
/**
 * Date 03/01/2016
 * @author Tushar Roy
 *
 * Count number of smaller elements on right side of an array for every element.
 *
 * Time complexity is O(nlogn)
 * Space complexity is O(n)
 *
 * https://leetcode.com/problems/count-of-smaller-numbers-after-self/
 * @class
 */
var countSmaller = function(nums) {
    //debugger;
    if (nums.length === 0) {
        return [];
    }
    var input = new Array(nums.length);
    for (var i = 0; i < nums.length; i++) {
        input[i] = { val: nums[i], index: i };
    }
    var result = new Array(nums.length).fill(0);
    mergeUtil(input, result, 0, input.length - 1);
    var r = [];
    for (var index3185 = 0; index3185 < result.length; index3185++) {
        var s = result[index3185];
        /* add */ r.push(s) > 0;
    }
    return r;
};
var mergeUtil = function(nums, result, low, high) {
    if (low === high) {
        return;
    }
    debugger;
    var mid = ((low + high) / 2) | 0;
    console.log("mid " + mid + " low " + low + " high " + high);
    mergeUtil(nums, result, low, mid);

    mergeUtil(nums, result, mid + 1, high);
    var i = low;
    var j = mid + 1;
    var t = new Array(high - low + 1).fill(null);
    console.log(t);
    var k = 0;
    var tempResult = new Array(high - low + 1).fill(0);
    console.log(tempResult);
    while (i <= mid && j <= high) {
        {
            if (nums[i].val <= nums[j].val) {
                tempResult[nums[i].index - low] = j - mid - 1;
                t[k++] = nums[i++];
            } else {
                tempResult[nums[i].index - low] = j - mid;
                t[k++] = nums[j++];
            }
        }
    }
    console.log(JSON.stringify(tempResult));
    console.log(t);
    var i1 = i;
    while (i1 <= mid) {
        tempResult[nums[i1].index - low] = j - mid - 1;
        t[k++] = nums[i1++];
    }
    console.log(JSON.stringify(tempResult));
    console.log(t);

    while (j <= high) {
        t[k++] = nums[j++];
    }
    console.log(JSON.stringify(tempResult));
    console.log(t);

    k = 0;
    for (i = low; i <= high; i++) {
        nums[i] = t[k];
        result[i] += tempResult[k++];
    }
    console.log(nums);
    console.log(result);
    console.log("returning *******************");
};

var nums = [6, 15, 20, 9, 8,5,30,7,10];
var result = countSmaller(nums);
console.info(result);


