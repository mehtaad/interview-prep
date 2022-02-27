/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
/**
 * Date 02/26/2016
 * @author Tushar Roy
 * Input: D        Output: 21
   Input: I        Output: 12
   Input: DD       Output: 321
   Input: II       Output: 123
   Input: DIDI     Output: 21435
   Input: IIDDD    Output: 126543
   Input: DDIDDIID Output: 321654798 
 * Time complexity : O(n^2)
 * Space complexity : O(n)
 *
 * Reference
 * http://www.geeksforgeeks.org/form-minimum-number-from-given-sequence/
 * @class
 */
var find = function (input) {
        var output = new Array(input.length + 1).fill(0);
        output[0] = 1;
        var low = 0;
        var start = 0;
        debugger;
        for (var i = 0; i < input.length; i++) {
            if (input[i] == 'D') {
                output[i + 1] = output[i] - 1;
                if (output[i + 1] === low) {
                    for (var j = start; j <= i + 1; j++) {
                            output[j] = output[j] + 1;
                    }
                }
            }
            else {
                low = output[start];
                output[i + 1] = low + 1;
                start = i + 1;
            }
        }
        return output;
    };
        var output = find(/* toCharArray */ ("DD").split(''));
        console.info((output));
        var output = find(/* toCharArray */ ("DDIDDIID").split(''));
        console.info((output));
        output = find(/* toCharArray */ ("IIDDD").split(''));
        console.info((output));
        output = find(/* toCharArray */ ("DIDI").split(''));
        console.info((output));
    