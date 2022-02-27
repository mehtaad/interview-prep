/**
 * http://www.geeksforgeeks.org/dynamic-programming-set-6-min-cost-path/
 */

    function minCost( cost,  m,  n){
        
        var temp = new Array(m+1);
        var sum = 0;
        for(var i=0; i <= m; i++){
            temp[i]=new Array(n);
        }
        
        for(var i=0; i <= n; i++){
            temp[0][i] = sum + cost[0][i];
            sum = temp[0][i];
        }
        sum = 0;
        for(var i=0; i <= m; i++){
            temp[i][0] = sum + cost[i][0];
            sum = temp[i][0];
        }
        console.log(temp);
        for(var i=1; i <= m; i++){
            for(var j=1; j <= n; j++){
                temp[i][j] = cost[i][j] + min(temp[i-1][j-1], temp[i-1][j],temp[i][j-1]);
            }
        }
        console.log(temp);
        return temp[m][n];
    }
    
   
    function minCostRec( cost,  m,  n,  x,  y){
        
        console.log("x "+x +" y "+y);
        if(x > m || y > n){
            console.log("returning "+9999);
            return 999999;
        }
        if(x == m && y == n){
            console.log("returning "+cost[m][n]);
            return cost[m][n];
        }
        
        var t1 = minCostRec(cost, m , n, x+1, y);
        var t2 = minCostRec(cost, m , n, x+1, y+1);
        var t3 = minCostRec(cost, m , n, x, y+1);
        console.log("t1 "+t1+" t2 "+t2+" t3 "+t3);      
        console.log(" cost[x][y] + min(t1,t2,t3) "+cost[x][y] + min(t1,t2,t3));
        return cost[x][y] + min(t1,t2,t3);
    }
    
    function min( a, b,  c){
        var l = Math.min(a, b);
        return Math.min(l, c);
    }
    
    
var cost = [[1,2,3],[4,8,2],[1,5,3],[6,2,9]];
var result = minCost(cost, 3, 2);
//var result1 = minCostRec(cost, 3, 2,0,0);
console.log(result);
//console.log(result1);



