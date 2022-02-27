/* https://www.geeksforgeeks.org/count-number-increasing-subsequences-size-k/ */
var numOfIncSubseqOfSizeK = function (arr, arrLength, seqLength) {
        var dp = new Array(seqLength);
        for(var i=0; i<seqLength;i++){
            dp[i]=new Array(arrLength);
        }
        var sum = 0;
        // count of increasing subsequences of size 1 ending at each arr[i] 
        for (var i = 0; i < arrLength; i++) {
                dp[0][i] = 1;
        }
        // building up the matrix dp[][] Here 'lrow' signifies the size of increassing subsequence of size (lrow+1). 
        for (var lrow = 1; lrow < seqLength; lrow++) {
            // for each increasing subsequence of size 'lrow' ending with element arr[icol] 
            for (var icol = lrow; icol < arrLength; icol++) {
                dp[lrow][icol] = 0;
                // count of increasing subsequences of size 'lrow' ending with element arr[icol] 
                for (var j = lrow - 1; j < icol; j++) {
                        if (arr[j] < arr[icol]) {
                            dp[lrow][icol] += dp[lrow - 1][j];
                        }
                }
            }
        }
        console.log(dp);
        for (var i = seqLength - 1; i < arrLength; i++) {
                sum += dp[seqLength - 1][i];
        }
        return sum;
    };
   
    var arr = [12, 8, 11, 13, 10, 15, 14, 16, 20];
    var arrLength = arr.length;
    var seqLength = 4;
    console.info("Number of Increasing Subsequences of size " + seqLength + " = " + numOfIncSubseqOfSizeK(arr, arrLength, seqLength));

