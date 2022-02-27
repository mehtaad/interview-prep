/**
 * Date 03/12/2016
 * @author Tushar Roy
 *
 * Given an unsorted array find maximum gap between consecutive element in sorted array.
 *
 * Time complexity O(n)
 * Space complexity O(n)
 *
 * Reference
 * https://leetcode.com/problems/maximum-gap/
 */
/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */

var Bucket = (function() {
    function Bucket() {
        
        this.low = 0;
        this.high = 0;
        this.isSet = false;
    }
    Bucket.prototype.update = function(val) {
        if (!this.isSet) {
            this.low = val;
            this.high = val;
            this.isSet = true;
        } else {
            this.low = Math.min(this.low, val);
            this.high = Math.max(this.high, val);
        }
    };
    return Bucket;
})();
var maximumGap = function(input) {
    if (input == null || input.length < 2) {
        return 0;
    }
    var min = Math.min.apply(null, input);
    var max = Math.max.apply(null, input);
    debugger;
    var gap = Math.ceil((max - min) / (input.length - 1)) | 0;
    var buckets = new Array(input.length - 1);
    for (var i = 0; i < buckets.length; i++) {
        buckets[i] = new Bucket(this);
    }
    for (var i = 0; i < input.length; i++) {
        if (input[i] === max || input[i] === min) {
            continue;
        }
        var tt = ((input[i] - min) / gap) | 0;
        buckets[tt].update(input[i]);
    }
    var prev = min;
    var maxGap = 0;
    for (var i = 0; i < buckets.length; i++) {
        if (!buckets[i].isSet) {
            continue;
        }
        maxGap = Math.max(maxGap, buckets[i].low - prev);
        prev = buckets[i].high;
    }
    return Math.max(maxGap, max - prev);
};
    
        var input = [4, 3, 13, 50, 2, 9, 7, 55];

console.info(maximumGap(input));
    
