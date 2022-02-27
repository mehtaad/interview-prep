

/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
/**
 * http://www.geeksforgeeks.org/find-subarray-with-given-sum/
 * @class
 */
var SubarrayWithGivenSum = (function () {
    function SubarrayWithGivenSum() {
    }
    SubarrayWithGivenSum.prototype.findSubArray = function (input, sum) {
        var currentSum = 0;
        var p = new SubarrayWithGivenSum.Pair(this);
        p.start = 0;
        for (var i = 0; i < input.length; i++) {
            {
                currentSum += input[i];
                p.end = i;
                if (currentSum === sum) {
                    return p;
                }
                else if (currentSum > sum) {
                    var s = p.start;
                    while ((currentSum > sum)) {
                        {
                            currentSum -= input[s];
                            s++;
                        }
                    }
                    ;
                    p.start = s;
                    if (currentSum === sum) {
                        return p;
                    }
                }
            }
            ;
        }
        return null;
    };
    SubarrayWithGivenSum.main = function (args) {
        var sgs = new SubarrayWithGivenSum();
        var input = [6, 3, 9, 11, 1, 3, 5];
        console.info(sgs.findSubArray(input, 15));
    };
    return SubarrayWithGivenSum;
}());
SubarrayWithGivenSum["__class"] = "SubarrayWithGivenSum";
(function (SubarrayWithGivenSum) {
    var Pair = (function () {
        function Pair(__parent) {
            this.__parent = __parent;
            if (this.start === undefined)
                this.start = 0;
            if (this.end === undefined)
                this.end = 0;
        }
        Pair.prototype.toString = function () {
            return this.start + " " + this.end;
        };
        return Pair;
    }());
    SubarrayWithGivenSum.Pair = Pair;
    Pair["__class"] = "SubarrayWithGivenSum.Pair";
})(SubarrayWithGivenSum || (SubarrayWithGivenSum = {}));
SubarrayWithGivenSum.main(null);

