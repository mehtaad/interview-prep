/* https://www.geeksforgeeks.org/maximum-number-chocolates-distributed-equally-among-k-students/ */
var maxNumOfChocolates = function(arr, n, k) {
    var um = {};
    var sum = new Array(n).fill(0);
    var curr_rem;
    var maxSum = 0;
    sum[0] = arr[0];
    for (var i = 1; i < n; i++) {
        sum[i] = sum[i - 1] + arr[i];
    }
    
    for (var i = 0; i < n; i++) {
        curr_rem = sum[i] % k;
        if (curr_rem === 0) {
            if (maxSum < sum[i]) maxSum = sum[i];
        } else if (!um.hasOwnProperty(curr_rem)) {
            um[curr_rem] = i;
        } else if (maxSum < sum[i] - sum[um[curr_rem]]) {
            maxSum = sum[i] - sum[um[curr_rem]];
        }
    }
    return (maxSum / k) | 0;
};

var arr = [2, 7, 6, 1, 4, 5];
var n = arr.length;
var k = 3;
console.info("Maximum number of chocolates: " + maxNumOfChocolates(arr, n, k));