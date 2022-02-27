/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
var BinaryTree = (function() {
    function BinaryTree() {}
    BinaryTree.prototype.getSum = function(BITree, index) {
        var sum = 0;
        while (index > 0) {
            {
                sum += BITree[index];
                index -= index & -index;
            }
        }
        return sum;
    };
    BinaryTree.prototype.updateBIT = function(BITree, n, index, val) {
        while (index <= n) {
            {
                BITree[index] += val;
                index += index & -index;
            }
        }
    };
    BinaryTree.prototype.convert = function(arr, n) {
        var temp = (function(s) {
            var a = [];
            while (s-- > 0) a.push(0);
            return a;
        })(n);
        for (var i = 0; i < n; i++) {
            {
                temp[i] = arr[i];
            }
        }
        /* sort */ (function(l) {
            l.sort();
        })(temp);
        for (var i = 0; i < n; i++) {
            {
                arr[i] = java.util.Arrays.binarySearch(temp, arr[i]) + 1;
            }
        }
    };
    BinaryTree.prototype.getInvCount = function(arr, n) {
        this.convert(arr, n);
        var greater1 = (function(s) {
            var a = [];
            while (s-- > 0) a.push(0);
            return a;
        })(n);
        var smaller1 = (function(s) {
            var a = [];
            while (s-- > 0) a.push(0);
            return a;
        })(n);
        for (var i = 0; i < n; i++) {
            {
                greater1[i] = smaller1[i] = 0;
            }
        }
        var BIT = (function(s) {
            var a = [];
            while (s-- > 0) a.push(0);
            return a;
        })(n + 1);
        for (var i = 1; i <= n; i++) {
            {
                BIT[i] = 0;
            }
        }
        for (var i = n - 1; i >= 0; i--) {
            {
                smaller1[i] = this.getSum(BIT, arr[i] - 1);
                this.updateBIT(BIT, n, arr[i], 1);
            }
        }
        for (var i = 1; i <= n; i++) {
            {
                BIT[i] = 0;
            }
        }
        for (var i = 0; i < n; i++) {
            {
                greater1[i] = i - this.getSum(BIT, arr[i]);
                this.updateBIT(BIT, n, arr[i], 1);
            }
        }
        var invcount = 0;
        for (var i = 0; i < n; i++) {
            {
                invcount += smaller1[i] * greater1[i];
            }
        }
        return invcount;
    };
    BinaryTree.main = function(args) {
        var tree = new BinaryTree();
        var arr = [8, 4, 2, 1];
        var n = arr.length;
        console.info("Inversion Count : " + tree.getInvCount(arr, n));
    };
    return BinaryTree;
})();
BinaryTree["__class"] = "BinaryTree";
BinaryTree.main(null);

/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
/**
 * Date 12/29/15
 * @author Tushar Roy
 *
 * Given input array find number of inversions where i < j < k and input[i] > input[j] > input[k]
 *
 * http://www.geeksforgeeks.org/count-inversions-of-size-three-in-a-give-array/
 * @class
 */

    /**
     * Time complexity of this method is O(n^2)
     * Space complexity is O(1)
     * @param {Array} input
     * @return {number}
     */
    var findInversions = function(input) {
        var inversion = 0;
        for (var i = 1; i < input.length - 1; i++) {
            var larger = 0;
            for (var k = 0; k < i; k++) {
                {
                    if (input[k] > input[i]) {
                        larger++;
                    }
                }
            }
            var smaller = 0;
            for (var k = i + 1; k < input.length; k++) {
                {
                    if (input[k] < input[i]) {
                        smaller++;
                    }
                }
            }
            inversion += smaller * larger;
        }
        return inversion;
    };
    var input = [9, 10,6, 4, 5, 8];
    console.info(findInversions(input));
    