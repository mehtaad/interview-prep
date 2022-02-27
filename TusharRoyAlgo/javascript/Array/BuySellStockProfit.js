/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
/**
 * Date 03/04/2016
 * @author Tushar Roy
 *
 * Best time to buy and sell stocks.
 * 1) Only 1 transaction is allowed
 * 2) Infinite number transactions are allowed
 *
 * Time complexity O(n)
 * Space complexity O(1)
 *
 * https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
 * https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/
 * @class
 */
 /*
Stock Buy Sell to Maximize Profit
The cost of a stock on each day is given in an array, find the max profit that you can make by buying and selling in those days. For example, if the given array is {100, 180, 260, 310, 40, 535, 695}, the maximum profit can earned by buying on day 0, selling on day 3. Again buy on day 4 and sell on day 6. If the given array of prices is sorted in decreasing order, then profit cannot be earned at all.

Recommended: Please solve it on “PRACTICE ” first, before moving on to the solution.
If we are allowed to buy and sell only once, then we can use following algorithm. Maximum difference between two elements. Here we are allowed to buy and sell multiple times. Following is algorithm for this problem.
1. Find the local minima and store it as starting index. If not exists, return.
2. Find the local maxima. and store it as ending index. If we reach the end, set the end as ending index.
3. Update the solution (Increment count of buy sell pairs)
4. Repeat the above steps if end is not reached.
https://www.geeksforgeeks.org/stock-buy-sell/
*/
/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */


var BuySellStockProfit = (function() {
    function BuySellStockProfit() {}
    BuySellStockProfit.prototype.oneProfit = function(arr) {
        var minPrice = arr[0];
        var maxProfit = 0;
        for (var i = 1; i < arr.length; i++) {
            {
                if (arr[i] - minPrice > maxProfit) {
                    maxProfit = arr[i] - minPrice;
                }
                if (arr[i] < minPrice) {
                    minPrice = arr[i];
                }
            }
        }
        return maxProfit;
    };
    BuySellStockProfit.prototype.allTimeProfit = function(arr) {
        var profit = 0;
        var min = 0;
        for (var i = 1; i < arr.length; i++) {
            {
                if (arr[i - 1] < arr[i]) {
                    min = i - 1;
                    for(i=i+1; i< arr.length-1;i++) {
                        if(arr[i+1] <arr[i]) break;
                    }
                    profit += arr[i] - arr[min];
                    console.log("Buty on "+min +" sell on "+i+ " profit "+profit);
                    i++;
                }
            }
        }
        return profit;
    };
    BuySellStockProfit.main = function(args) {
        var arr = [7, 10, 15, 5, 11, 2, 7, 9, 3];
        var arr1 = [100, 180, 260, 310, 40, 535, 695];
        var bss = new BuySellStockProfit();
        console.info(bss.oneProfit(arr));
        console.info(bss.allTimeProfit(arr1));
    };
    return BuySellStockProfit;
})();
BuySellStockProfit["__class"] = "BuySellStockProfit";
BuySellStockProfit.main(null);

