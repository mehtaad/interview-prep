

/**
 * http://www.geeksforgeeks.org/divide-and-conquer-set-6-tiling-problem/
 * Test cases
 * Size of matrix is at least 2 and power of 2 always
 * Missing povar could be on edges
 * Missing povar could be in any of 4 quadrants
 *https://www.youtube.com/watch?v=lQhNiv3w45w
 */


var tileCount = 'a';
var fit = function(size, misPos){
    var matrix = new Array(size);
    for(var i=0;i<size;i++){
        matrix[i]=new Array(size).fill(0);
    }
    matrix[misPos.x][misPos.y] = 'X';
    fit1(matrix, {x:0,y:0}, matrix.length, misPos);
    return matrix;
}

var fit1 = function(matrix, topLeftPo, size, misPos){
    debugger;
    if(size == 2){
        updateMatrix(matrix, topLeftPo, misPos);
        return;
    }
    var alrdyFildQuadPos = determineQuadrant(topLeftPo, size, misPos);
    var t1 =topLeftPo.x + (size/2)-1;
    var t2=topLeftPo.y + (size/2)-1;
    updateMatrix(matrix, {x:t1, y:t2}, alrdyFildQuadPos);
    for(var i=0 ; i < 2; i++){
        for(var j=0; j < 2; j++){
            var t3=topLeftPo.x + (size/2) -1+i;
            var t4=topLeftPo.y + (size/2) -1 + j;
            var newmisPos = {x:t3, y:t4};
            var t5=topLeftPo.x + (i*size/2);
            var t6=topLeftPo.y + (j*size/2);  
            if(newmisPos.x === alrdyFildQuadPos.x && newmisPos.y === alrdyFildQuadPos.y){
                fit1(matrix, {x:t5, y:t6} , (size/2), misPos);
            }else{
                fit1(matrix, {x:t5, y:t6} , (size/2), newmisPos);
            }
        }
    }
}

var determineQuadrant = function(topLeftPo, size, misPos){
    for(var i = 0; i < 2; i++){
        for(var j = 0; j < 2; j++){
            var t1 = topLeftPo.x + (i*size/2);
            var t2 = topLeftPo.x + (i*size/2) + (size/2)-1;
            var t3 = topLeftPo.y + (j*size/2);
            var t4 = topLeftPo.y + (j*size/2) + (size/2) -1;
            if(misPos.x >= t1 && misPos.x <= t2 && misPos.y >= t3 && misPos.y <= t4){
                    var t5 =  topLeftPo.x+(size/2) -1 +i;
                    var t6 =  topLeftPo.y + (size/2) - 1 + j;
                    return {x:t5, y:t6};
            }
        }
    }
    throw "Something went wrong in determining quadrant";
}

var updateMatrix = function(matrix, topLeftPo, misPos){
    for(var i=topLeftPo.x; i < topLeftPo.x + 2; i++){
        for(var j=topLeftPo.y; j < topLeftPo.y + 2; j++){
            if(i == misPos.x && j == misPos.y){
                continue;
            }
            matrix[i][j] = tileCount;
        }
    }
    tileCount= String.fromCharCode(tileCount.charCodeAt(0)+1);
    
}
    
    
var matrix = fit(8, {x:3,y:3});
for(var i=0; i < matrix.length; i++){
    console.log(matrix[i]);
}
        