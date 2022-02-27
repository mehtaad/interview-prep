//N queen problem Mysolution
function usedPosition1(row, col, usedPosition) {
  var maxlength = usedPosition.length;
  if(usedPosition[row][col]) {
    for(var j=0;j<usedPosition.length;j++){
      usedPosition[row][j] = 0;
      usedPosition[j][col] = 0;
    }
    
    var row1=row, row2=row,col1=col, col2=col;
    for(var i=0;i<usedPosition.length;i++){
      row1=row1+1;
      col1 = col1+1;
      row2=row2-1;
      col2 = col2-1;
      if(row1>=usedPosition.length || col1 >= usedPosition.length) {}
        else usedPosition[row1][col1] = 0; 

      
      if(row1>usedPosition.length-1 || col2 < 0) {}
      else{
          usedPosition[row1][col2] = 0;       
      }
      
      
      if(row2<0 || col1 > usedPosition.length-1) {}
        else  usedPosition[row2][col1] = 0; 
      if(row2<0 || col2 < 0) {}else usedPosition[row2][col2] = 0; 
    }
    return true;
  }
}
function driver(nQueen) {
  var row = nQueen;
  var col = nQueen;
  var matrix= new Array(row);
  for(var i=0;i<row;i++){
    matrix[i]= new Array(col).fill(1);
  }
  for(var i=0; i<row;i++){
    placeQueen(matrix, 0,i);
  }
  console.log("Solu are "+gCount); 
}
var gCount=0;
function placeQueen(matrix, row, col) {
  if(row>matrix.length-1) return;
  
  
  if(matrix[row][col]) {
    //console.log("USING Row "+row +" COL "+col);
    if(row === matrix.length-1) {
      //console.log("Found solution*****");
      gCount++;
      //console.log("Solu are "+gCount);
      return true;
    }
    var copeofMatrix = JSON.parse(JSON.stringify(matrix));
    usedPosition1(row, col, copeofMatrix);
    row=++row;
    if(row>=matrix.length) {
      return true;
    }
    for(var i=0; i<matrix.length; i++) {
      if(copeofMatrix[row][i]){
        placeQueen(copeofMatrix, row, i)
      }
    }
  }
  return false;
  
}
driver(11);



//Tushar soln better then mine
var count=0;
function solveQ1(n) {
	var posUsed = new Array(n);
  count=0;
	var hasSoln = solveQ(n, 0, posUsed, count);
	//console.log(posUsed);
  console.log(count);
  
}
function solveQ(n, row, posUsed) {
	if (n === row) {
		//console.log("found Solution");
    count++;
    //return true; //uncomment to find only one solution
	}
	var col;
	for (col = 0; col < n; col++) {
		var foundSafe = true;
		for (var q = 0; q < row; q++) {
			if (
				(posUsed[q] && posUsed[q].col === col) ||
				posUsed[q].row - posUsed[q].col === row - col ||
				posUsed[q].row + posUsed[q].col === row + col
			) {
				foundSafe = false;
				break;
			}
		}
		if (foundSafe) {
			posUsed[row] = { row: row, col: col };
      //console.log(JSON.stringyfy(posUsed));
			if (solveQ(n, row + 1, posUsed)) {
				//return true; //uncomment to find only one solution
			}
		}
	}
	return false;
}


//Efficient solution to the problem
var countNQueensSolutions = function (n) {

  //Keeps track of the # of valid solutions
  var count = 0;
  //Helps identify valid solutions
  var done = Math.pow(2,n) - 1;
  //Checks all possible board configurations
  var innerRecurse = function(ld, col, rd) {
    debugger;
    //All columns are occupied,
    //so the solution must be complete
    if (col === done) {
      count++;
      return;
    }
    //Gets a bit sequence with "1"s
    //whereever there is an open "slot"
    var poss = ~(ld | rd | col);
    //Loops as long as there is a valid
    //place to put another queen.
    while ( poss & done ) {
      var bit = poss & -poss;
      poss -= bit;
      innerRecurse((ld|bit)>>1, col|bit, (rd|bit)<<1);
    }
  };
  innerRecurse(0,0,0);
  return count;
};
countNQueensSolutions(4);