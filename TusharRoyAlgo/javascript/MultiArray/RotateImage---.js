package com.interview.multiarray;

/**
 * Date 07/31/2016
 * @author Tushar Roy
 *
 * You are given an n x n 2D matrix representing an image.
 * Rotate the image by 90 degrees (clockwise).
 *
 * https://leetcode.com/problems/rotate-image/
 */
/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
var rotate = function (matrix) {
        var length = matrix.length - 1;
        var currRow = 0;
        //debugger;
        while ((currRow < Math.floor(matrix.length / 2 | 0))) {
            {
                for (var colToChange = currRow; colToChange < length - currRow; colToChange++) {
                    {
                        var temp = matrix[currRow][colToChange];
                        matrix[currRow][colToChange] = matrix[length - colToChange][currRow];
                        matrix[length - colToChange][currRow] = matrix[length - currRow][length - colToChange];
                        matrix[length - currRow][length - colToChange] = matrix[colToChange][length - currRow];
                        matrix[colToChange][length - currRow] = temp;
                    }
                    ;
                }
                currRow++;
            }
        }
        ;
    };
            
                
                
    
var matrix = [[1, 2, 3, 4, 20], [5, 6, 7, 8, 30], [9, 10, 11, 12, 40], [13, 14, 15, 16, 50], [21, 22, 23, 24, 25]];
rotate(matrix);
for (var i = 0; i < matrix.length; i++) {
    console.info(matrix[i]);
}
