/**
 * https://leetcode.com/problems/shortest-subarray-with-sum-at-least-k/description/
 */
/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
var SmallestSubarrayWithAtleastKSum = (function () {
    function SmallestSubarrayWithAtleastKSum() {
    }
    SmallestSubarrayWithAtleastKSum.prototype.shortestSubarray = function (A, K) {
        var skip = new Array(A.length).fill(0);
        var sum = 0;
        var start = A.length - 1;
        debugger;
        skip[A.length - 1] = 1;
        for (var i = A.length - 1; i > 0; i--) {
            {
                skip[i - 1] = 1;
                sum += A[i];
                if (sum <= 0) {
                    skip[i - 1] = start - i + 1;
                }
                else {
                    start = i;
                    sum = 0;
                }
            }
            ;
        }
        start = 0;
        var end = 0;
        sum = 0;
        var min = 2147483647;
        while ((end < A.length)) {
            {
                sum += A[end++];
                while ((start <= end && sum >= K)) {
                    {
                        min = Math.min(end - start, min);
                        for (var j = start; j < start + skip[start]; j++) {
                            {
                                sum -= A[j];
                            }
                            ;
                        }
                        start = start + skip[start];
                    }
                }
                ;
                if (sum <= 0) {
                    start = end;
                    sum = 0;
                }
            }
        }
        ;
        return min === 2147483647 ? -1 : min;
    };
    SmallestSubarrayWithAtleastKSum.main = function (args) {
        var input = [48,99,37,4,-31];
//input = [1, 3, -1, -4, -2, 3, 4, 5, -5, -1, 8];
        var ss = new SmallestSubarrayWithAtleastKSum();
        console.log(ss.shortestSubarray(input, 140));
    };
    return SmallestSubarrayWithAtleastKSum;
}());
SmallestSubarrayWithAtleastKSum["__class"] = "SmallestSubarrayWithAtleastKSum";
SmallestSubarrayWithAtleastKSum.main(null);




/*
https://leetcode.com/articles/shortest-subarray-with-sum-atleast-k/ 
*/
var callMin=function(A,K) {
    var N = A.length;
    var P = [];
    P[0]=0;
    for (var i = 0; i < N; ++i)
        P[i+1] = P[i] + A[i];

    // Want smallest y-x with P[y] - P[x] >= K
    var ans = N+1; // N+1 is impossible
    var monoq = []; //opt(y) candidates, as indices of P

    for (var y = 0; y < P.length; ++y) {
        // Want opt(y) = largest x with P[x] <= P[y] - K;
        while (monoq.length>0 && P[y] <= P[monoq[monoq.length-1]])
            monoq.pop();
        while (monoq.length>0  && P[y] >= P[monoq[0]] + K)
            ans = Math.min(ans, y - monoq.shift());

        monoq.push(y);
    }

    return ans < N+1 ? ans : -1;
}
var input = [-34,37,51,3,-12,-50,51,100,-47,99,34,14,-13,89,31,-14,-44,23,-38,6]

console.log(callMin(input,151));