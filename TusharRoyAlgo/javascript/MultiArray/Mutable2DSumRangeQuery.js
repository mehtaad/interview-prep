
/**
 *
 * Given a 2D matrix matrix, find the sum of the elements inside the rectangle defined by its upper left corner
 * (row1, col1) and lower right corner (row2, col2).
 *
 * https://leetcode.com/problems/range-sum-query-2d-mutable/
 *https://www.youtube.com/watch?v=PwDqpOMwg6U
 */

     var prefixSum;
     var rows;
     var cols;
     var matrix = [
        [3, 0, 1, 4, 2],
        [5, 6, 3, 2, 1],
        [1, 2, 0, 1, 5],
        [4, 1, 0, 1, 7],
        [1, 0, 3, 0, 5]
        ]

    var Mutable2DSumRangeQuery = function( matrix) {
        if (matrix.length == 0) {
            return;
        }
        prefixSum = new Array(matrix.length);
        for(var i=0; i<matrix.length;i++){
            prefixSum[i]=new Array(matrix[0].length + 1).fill(0);
        }
        
        matrix = matrix;
        rows = matrix.length;
        cols = matrix[0].length;
        for (var i = 0; i < rows; i++) {
            for (var j = 1; j <= cols; j++) {
                prefixSum[i][j] = prefixSum[i][j - 1] + matrix[i][j - 1];
            }
        }
        for(var i=0; i<matrix.length;i++){
            console.log(prefixSum[i]);
        }
    }

    var update = function( row,  col,  val) {
        var delta = val - matrix[row][col];
        matrix[row][col] = val;
        for (var i = col + 1; i <= cols; i++) {
            prefixSum[row][i] += delta;
        }
    }

    var sumRegion= function(row1, col1, row2, col2) {
        var sum = 0;
        for (var i = row1; i <= row2; i++) {
            sum += prefixSum[i][col2 + 1] - prefixSum[i][col1];
        }
        return sum;
    }
        
    Mutable2DSumRangeQuery(matrix);
    sumRegion(2, 1, 4, 3); //-> 8
    sumRegion(1, 1, 2, 2); //-> 11
    sumRegion(1, 2, 2, 4); //-> 12
    



