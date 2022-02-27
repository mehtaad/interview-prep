

/**
 * Date 12/31/2015
 * @author Tushar Roy
 *
 * Given two sorted arrays such the arrays may have some common elements. Find the sum of the maximum sum
 * path to reach from beginning of any array to end of any of the two arrays. We can switch from one array
 * to another array only at common elements.
 *
 * Time complexity is O(n + m)
 * Space complexity is O(1)
 *
 * http://www.geeksforgeeks.org/maximum-sum-path-across-two-arrays/
 */
/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
var maxSum = function (input1, input2) {
        var maxSum = 0;
        var i = 0;
        var j = 0;
        var sum1 = 0;
        var sum2 = 0;
        while ((i < input1.length && j < input2.length)) {
            {
                if (input1[i] === input2[j]) {
                    if (sum1 > sum2) {
                        maxSum += sum1 + input1[i];
                    }
                    else {
                        maxSum += sum2 + input2[j];
                    }
                    i++;
                    j++;
                    sum1 = 0;
                    sum2 = 0;
                }
                else if (input1[i] < input2[j]) {
                    sum1 += input1[i++];
                }
                else {
                    sum2 += input2[j++];
                }
            }
        }
        ;
        while ((i < input1.length)) {
            {
                sum1 += input1[i++];
            }
        }
        ;
        while ((j < input2.length)) {
            {
                sum2 += input2[j++];
            }
        }
        ;
        if (sum1 > sum2) {
            maxSum += sum1;
        }
        else {
            maxSum += sum2;
        }
        return maxSum;
    };
   
        var input1 = [2, 3, 7, 10, 12, 15, 30, 34];
        var input2 = [1, 5, 7, 8, 10, 15, 16, 19];
        
        console.info(maxSum(input1, input2));
   