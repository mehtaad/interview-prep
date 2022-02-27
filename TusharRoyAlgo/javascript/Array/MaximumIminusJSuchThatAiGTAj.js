

/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
/**
 * http://www.geeksforgeeks.org/given-an-array-arr-find-the-maximum-j-i-such-that-arrj-arri/
 * @class
 */
var maximumGeeks = function (input) {
        var lhs = new Array(input.length).fill(0);
        var rhs =  new Array(input.length).fill(0);
        console.log(input);
        lhs[0] = 0;
        for (var i_1 = 1; i_1 < lhs.length; i_1++) {
                if (input[lhs[i_1 - 1]] < input[i_1]) {
                    lhs[i_1] = lhs[i_1 - 1];
                }
                else {
                    lhs[i_1] = i_1;
                }
        }
        rhs[input.length - 1] = input.length - 1;
        for (var i_2 = input.length - 2; i_2 >= 0; i_2--) {
                if (input[rhs[i_2 + 1]] > input[i_2]) {
                    rhs[i_2] = rhs[i_2 + 1];
                }
                else {
                    rhs[i_2] = i_2;
                }
        }
        console.log(lhs);
        console.log(rhs);
        var i = 0;
        var j = 0;
        var max = 0;
        for (; j < input.length;) {
                if (input[lhs[i]] < input[rhs[j]]) {
                    max = Math.max(max, j - i);
                    j++;
                }
                else {
                    i++;
                }
        }
        return max;
    };
        
        var input = [11, 14, 13, 1, 4, 13, 1, 10];
        console.info(maximumGeeks(input));
    
