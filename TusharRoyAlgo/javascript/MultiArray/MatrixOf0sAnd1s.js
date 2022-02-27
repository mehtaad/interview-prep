

/**
 * http://www.geeksforgeeks.org/create-a-matrix-with-alternating-rectangles-of-0-and-x/
 * Test case : negative or 0 for rowNum or colNum
 */

	var create = function(rowNum, colNum){
		var matrix = new Array(rowNum);
		for(var i=0;i<rowNum;i++)
			matrix[i] = new Array(colNum);
		
		var currRow = 0;
		var ch = 'X';
		var high = Math.min(rowNum, colNum);
		//high is min of rowNum and colNum. If high is odd then high is ceiling of high/2
		//else high is high/2. e.g high is 5 then high becomes 3 if high is 4
		//high becomes 2
		high = Math.ceil(high*1.0/2);
		while(currRow < high){
			debugger;
			
			for(var i=currRow; i < colNum-currRow ; i++){
				matrix[currRow][i] = ch;//1st row
				matrix[rowNum-currRow-1][i] = ch;//last row
			}
			
			
			for(var i = currRow; i < rowNum-currRow; i++ ){
				matrix[i][colNum-currRow-1] = ch;//last col
				matrix[i][currRow] = ch;//1st col
			}
			
		
			if(ch =='X'){
				ch = 'O';
			}else{
				ch = 'X';
			}
			currRow++;
		}
		return matrix;
	}
	
	var matrix = create(4, 7);
	for(var i=0; i < matrix.length; i++){
			console.log(matrix[i]);
	}
