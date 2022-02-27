

/**
 * Date 03/11/2016
 * @author Tushar Roy
 *
 * Given a 2D array find the sum in given range defining a rectangle.
 *
 * Time complexity construction O(n*m)
 * Time complexity of query O(1)
 * Space complexity is O(n*m)
 * 
 * Reference
 * https://leetcode.com/problems/range-sum-query-2d-immutable/
 */


   var T;
     
     var matrix = [
        [3, 0, 1, 4, 2],
        [5, 6, 3, 2, 1],
        [1, 2, 0, 1, 5],
        [4, 1, 0, 1, 7],
        [1, 0, 3, 0, 5]
        ]

    var Immutable2DSumRangeQuery = function( matrix) {
        if (matrix.length == 0) {
            return;
        }

        var row = 0;
        var col = 0;
        if (matrix.length != 0) {
            row = matrix.length;
            col = matrix[0].length;
        }
        T = new var[row + 1][col + 1];
        T = new Array(matrix.length+1);
        for(var i=0; i<matrix.length+1;i++){
            T[i]=new Array(matrix[0].length + 1).fill(0);
        }
        for (var i = 1; i < T.length; i++) {
            for (var j = 1; j < T[0].length; j++) {
                T[i][j] = T[i - 1][j] + T[i][j - 1] + matrix[i - 1][j - 1] - T[i - 1][j - 1];
            }
        }

    }

    /*var update = function( row,  col,  val) {
        var delta = val - matrix[row][col];
        matrix[row][col] = val;
        for (var i = col + 1; i <= cols; i++) {
            prefixSum[row][i] += delta;
        }
    }
    */
    var sumRegion= function(row1, col1, row2, col2) {
        row1++;
        col1++;
        row2++;
        col2++;
        return T[row2][col2] - T[row1 - 1][col2] - T[row2][col1 - 1] + T[row1 - 1][col1 - 1];
    }
        
    Immutable2DSumRangeQuery(matrix);
    sumRegion(2, 1, 4, 3); //-> 8
    sumRegion(1, 1, 2, 2); //-> 11
    sumRegion(1, 2, 2, 4); //-> 12