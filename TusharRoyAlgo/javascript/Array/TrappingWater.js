/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
/**
 * References
 * https://oj.leetcode.com/problems/trapping-rain-water/
 * https://leetcode.com/problems/trapping-rain-water/
 * https://www.youtube.com/watch?v=KV-Eq3wYjxI
 * @class
 */
/*var trap = function(height) {
    if (height == null || height.length === 0) {
        return 0;
    }
    var len = height.length;
    var left = new Array(len).fill(0);
    var right = new Array(len).fill(0);
    left[0] = height[0];
    right[len - 1] = height[len - 1];
    for (var i = 1; i < len; i++) {
        left[i] = Math.max(height[i], left[i - 1]);
        right[len - i - 1] = Math.max(height[len - i - 1], right[len - i]);
    }
    var maxWaterTrapped = 0;
    for (var i = 1; i < len - 1; i++) {
        var min = Math.min(left[i], right[i]);
        if (height[i] < min) {
            maxWaterTrapped += min - height[i];
        }
    }
    return maxWaterTrapped;
};

var input = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];
console.info(trap(input));*/


var trap = function(height) {
    if (height == null || height.length === 0) {
        return 0;
    }
    var maxSeenSofar=0;
    var right = new Array(height.length).fill(0);
    var maxSeenSofarLeft=0;

    for (var i =  height.length-1; i>=0; i--) {
        
        if(maxSeenSofar < height[i]) {
            maxSeenSofar = height[i];
        }
        right[i]=maxSeenSofar;
    }
    var trw=0;
    for (var i = 0; i < height.length - 1; i++) {
        trw=trw+Math.max(Math.min(maxSeenSofarLeft, right[i])-height[i],0);
        if(height[i]>maxSeenSofarLeft){
            maxSeenSofarLeft = height[i];
        }
    }

    return trw;
}


var input = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];
console.info(trap(input));
