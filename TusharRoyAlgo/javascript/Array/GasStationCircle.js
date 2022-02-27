

/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
/**
 * http://www.geeksforgeeks.org/find-a-tour-that-visits-all-stations/
 * You can solve this one using kadane wrap since it finds max contiguous sum
 * for wrapped array. That start point is a best place to start a tour.
 * Test cases
 * Check if length of both input array is same
 * Check that there exists a path after kadane wrap responds
 * Check that there is at least one positive difference before you call kadane
 * @class
 */
var Triplet = (function () {
    function Triplet() {
        if (this.start === undefined)
            this.start = 0;
        if (this.end === undefined)
            this.end = 0;
        if (this.sum === undefined)
            this.sum = 0;
    }
    /**
     *
     * @return {string}
     */
    Triplet.prototype.toString = function () {
        return "Triplet [start=" + this.start + ", end=" + this.end + ", sum=" + this.sum + "]";
    };
    return Triplet;
}());
Triplet["__class"] = "Triplet";
var KadaneWrapArray = (function () {
    function KadaneWrapArray() {
    }
    KadaneWrapArray.prototype.kadaneWrap = function (arr) {
        var straightKadane = this.kadane(arr);
        var sum = 0;
        for (var i = 0; i < arr.length; i++) {
            {
                sum += arr[i];
                arr[i] = -arr[i];
            }
            ;
        }
        var wrappedNegKadane = this.kadane(arr);
        for (var i = 0; i < arr.length; i++) {
            {
                arr[i] = -arr[i];
            }
            ;
        }
        if (straightKadane.sum < sum + wrappedNegKadane.sum) {
            straightKadane.sum = wrappedNegKadane.sum + sum;
            straightKadane.start = wrappedNegKadane.end + 1;
            straightKadane.end = wrappedNegKadane.start - 1;
        }
        return straightKadane;
    };
    /**
     * This method assumes there is at least one positive number in the array.
     * Otherwise it will break
     * @param {Array} arr
     * @return
     * @return {Triplet}
     */
    KadaneWrapArray.prototype.kadane = function (arr) {
        var sum = 0;
        var cStart = 0;
        var mStart = 0;
        var end = 0;
        var maxSum = -2147483648;
        for (var i = 0; i < arr.length; i++) {
            {
                sum += arr[i];
                if (sum <= 0) {
                    sum = 0;
                    cStart = i + 1;
                }
                else {
                    if (sum > maxSum) {
                        maxSum = sum;
                        mStart = cStart;
                        end = i;
                    }
                }
            }
            ;
        }
        var p = new Triplet();
        p.sum = maxSum;
        p.start = mStart;
        p.end = end;
        return p;
    };
    return KadaneWrapArray;
}());
KadaneWrapArray["__class"] = "KadaneWrapArray";
var GasStationCircle = (function () {
    function GasStationCircle() {
    }
    GasStationCircle.prototype.startTour = function (gasAvailable, gasRequired) {
        var start = -1;
        var end = 0;
        var currentGas = 0;
        var visitedOnce = false;
        while ((start !== end)) {
            {
                currentGas += gasAvailable[end] - gasRequired[end];
                if (start === -1) {
                    start = end;
                }
                if (end === gasAvailable.length - 1 && visitedOnce === false) {
                    visitedOnce = true;
                }
                else if (end === gasAvailable.length - 1 && visitedOnce === true) {
                    return -1;
                }
                if (currentGas < 0) {
                    start = -1;
                    currentGas = 0;
                }
                end = (end + 1) % gasAvailable.length;
            }
        }
        ;
        return end;
    };
    /**
     * If it is not guaranteed that tour exists then once you get
     * result of kadanewrap make an actual trip to see if value is positive
     * @return {number} -1 if no solution exists otherwise returns gas station at which to start.
     * @param {Array} gasAvailable
     * @param {Array} gasRequired
     */
    GasStationCircle.prototype.startTour1 = function (gasAvailable, gasRequired) {
        var diff = new Array(gasAvailable.length).fill(0);
        for (var i_1 = 0; i_1 < diff.length; i_1++) {
            {
                diff[i_1] = gasAvailable[i_1] - gasRequired[i_1];
            }
            ;
        }
        var allNegative = true;
        for (var i_2 = 0; i_2 < diff.length; i_2++) {
            {
                if (diff[i_2] >= 0) {
                    allNegative = false;
                    break;
                }
            }
            ;
        }
        if (allNegative) {
            return -1;
        }
        var kwa = new KadaneWrapArray();
        var t = kwa.kadaneWrap(diff);
        var i = t.start;
        var netGas = 0;
        do {
            {
                netGas += diff[i];
                i = (i + 1) % diff.length;
                if (netGas < 0) {
                    return -1;
                }
            }
        } while ((i !== t.start));
        return t.start;
    };
    GasStationCircle.main = function (args) {
        var gsc = new GasStationCircle();
        var gasAvailable = [4, 4, 6, 5, 6];
        var gasRequired = [5, 6, 1, 7, 5];
        console.info(gsc.startTour(gasAvailable, gasRequired));
        console.info(gsc.startTour1(gasAvailable, gasRequired));
    };
    return GasStationCircle;
}());
GasStationCircle["__class"] = "GasStationCircle";
GasStationCircle.main(null);
