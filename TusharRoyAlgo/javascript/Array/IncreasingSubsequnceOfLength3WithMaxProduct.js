/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
/**
 * http://www.geeksforgeeks.org/increasing-subsequence-of-length-three-with-maximum-product/
 * Keep two arrays which keeps max from current position to right side
 * Other array keeps max on left size which is smaller than current element
 * Once you have these two arrays from 2nd to 2nd last position keep multiplying
 * elements at 3 arrays index position to get max product
 * Test cases
 * Negative numbers
 * 0 in the input
 * @class
 */
var maxProduct = function(arr) {
    var RGN = new Array(arr.length).fill(0);
    var LGN = new Array(arr.length).fill(0);
    RGN[arr.length - 1] = arr[arr.length - 1];
    var max = arr[arr.length - 1];
    for (var i = arr.length - 2; i >= 0; i--) {
        {
            if (max < arr[i]) {
                max = arr[i];
            }
            if (max > arr[i]) {
                RGN[i] = max;
            } else {
                RGN[i] = 0;
            }
        }
    }
    console.log(RGN);
    LGN[0] = 0;
    
    //This can be implemented using an AVL tree instead of this way which will
    //make it O(nLogn) operation insteado ofO(n2).
    for (var i = 1; i < arr.length; i++) {
        this.getLGN(arr, i, LGN);
    }
    console.log(LGN);
    var maxProduct = 0;
    for (var i = 1; i < arr.length - 1; i++) {
        {
            var product = arr[i] * LGN[i] * RGN[i];
            if (maxProduct < product) {
                maxProduct = product;
            }
        }
    }
    return maxProduct;
};
var getLGN = function(arr, pos, LGN) {
    var max = 0;
    var i = 0;
    while (i < pos) {
        if (arr[i] < arr[pos]) {
            if (arr[i] > max) {
                max = arr[i];
            }
        }
        i++;
    }
    LGN[pos] = max;
};

var arr = [6, 7, 8, 1, 2, 3, 9, 10];
console.info(maxProduct(arr));
//var arr1 = [1, 5, 10, 8, 9];
//console.info(maxProduct(arr1));



/* https://www.geeksforgeeks.org/maximum-product-subsequence-size-k */
var GFG = (function () {
    function GFG() {
    }
    GFG.maxProductSubarrayOfSizeK = function (A, n, k) {
        /* sort */ (function (l) { l.sort(); })(A);
        var product = 1;
        if (A[n - 1] === 0 && k % 2 !== 0)
            return 0;
        if (A[n - 1] <= 0 && k % 2 !== 0) {
            for (var i_1 = n - 1; i_1 >= n - k; i_1--) {
                product *= A[i_1];
            }
            return product;
        }
        var i = 0;
        var j = n - 1;
        if (k % 2 !== 0) {
            product *= A[j];
            j--;
            k--;
        }
        k >>= 1;
        for (var itr = 0; itr < k; itr++) {
            {
                var left_product = A[i] * A[i + 1];
                var right_product = A[j] * A[j - 1];
                if (left_product > right_product) {
                    product *= left_product;
                    i += 2;
                }
                else {
                    product *= right_product;
                    j -= 2;
                }
            }
            ;
        }
        return product;
    };
    GFG.main = function (args) {
        var A = [6, 7, 8, 1, 2, 3, 9, 10];
        var n = A.length;
        var k = 3;
        console.info(GFG.maxProductSubarrayOfSizeK(A, n, k));
    };
    return GFG;
}());
GFG["__class"] = "GFG";
GFG.main(null);
