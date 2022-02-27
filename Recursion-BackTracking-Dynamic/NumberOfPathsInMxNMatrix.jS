
/**
 * http://www.geeksforgeeks.org/count-possible-paths-top-left-bottom-right-nxm-matrix/
 */
var hh = function countPathsRecursive(n, m){
        if(n == 1 || m == 1){
            return 1;
        }
        return countPathsRecursive(n-1, m) + countPathsRecursive(n, m-1);
    }
    
   kk= function countPaths(n,m){
        var T= new Array(n).fill(new Array(m));
        for(var i=0; i < n; i++){
            T[i][0] = 1;
        }
        
        for(var i=0; i < m; i++){
            T[0][i] = 1;
        }
        for(var i=1; i < n; i++){
            for(var j=1; j < m; j++){
                T[i][j] = T[i-1][j] + T[i][j-1];
            }
        }
        return T[n-1][m-1];
    }
   console.log(kk(3,3));
    console.log(hh(3,3));
