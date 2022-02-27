
/**
 * Date 04/24/2016
 * @author Tushar Roy
 *
 * Additive number is a string whose digits can form additive sequence.
 * A valid additive sequence should contain at least three numbers.
 * Except for the first two numbers, each subsequent number in the sequence must be the sum of the preceding two.
 *
 * https://leetcode.com/problems/additive-number/
 */

    function isAdditiveNumber(num) {
        if (num.length < 3) {
            return false;
        }
        debugger;
        for (var i = 0; i <= Math.floor(num.length/2); i++) {
            if (num[0] == '0' && i > 0) {
                break;
            }

            var x1 = num.substring(0, i + 1);
            console.log("index " + i + " x1 " + x1);
            //make sure remaining size is at least size of first and second integer.
            for (var j = i + 1; Math.max(i, j - (i + 1)) + 1 <= num.length - j - 1 ; j++) {
                if (num[i + 1] == '0' && j > i + 1) {
                    break;
                }
                var x2 = num.substring(i + 1, j + 1);
                if (isValid(num, j + 1, x1, x2)) {
                    return true;
                }
            }
        }
        return false;
    }

    function isValid(num, start, x1, x2) {
        if (start == num.length) {
            return true;
        }
        var x3 = (x1*1 +x2*1)+"";
        //if num starts with x3 from offset start means x3 is found. So look for next number.
        return num.substring(start,start+x3.length)===x3 && isValid(num, start + x3.length, x2, x3);
    }
    
    console.log(" " + isAdditiveNumber("199100199"));
    
