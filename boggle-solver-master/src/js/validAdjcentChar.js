// X = ROW
// Y = COLUMN
// ROW 0: ABCD
// COL 0: AEIM
var grid = [
    ["A", "B", "C", "D"],
    ["E", "F", "G", "H"],
    ["I", "J", "K", "L"],
    ["M", "N", "O", "P"]
];

// minimum and maximum possible positions
var gridSize = grid.length;

/**
 * Determines if the given letter exists in the grid
 * @param  {string} letter  Single letter in String format
 * @return {boolean}        Indicates success or failure of operation
 */
function gridHasLetter(letter) {

    var row = 0,
        col = 0;
    
    letter = letter.toUpperCase();

    for(row; row < gridSize; row++) {        
        for(col = 0; col < gridSize; col++) {            
            if(grid[row][col] === letter) {
                return true;  
            }
        }       
    }
    return false;
}

/**
 * Get the row and col position of the required letter in the grid
 * @param  {string} letter Letter to find in grid
 * @return {array}         [row,col] position of letter
 */
function getLetterPos(letter) {

    var row = 0,
        col = 0;

    for(row; row < gridSize; row++) {        
        for(col = 0; col < gridSize; col++) {            
            if(grid[row][col] === letter) {
                return [row, col];  
            }
        }       
    }
    return null;
}

/**
 * Returns an array of valid adjacents for a the given position in the grid
 * @param  {array} positions expects [row,column] positions to check against
 * @return {array}           returns an Array of all possible adjacents
 */
function getValidDirections(letter) {    

    var letterPos = getLetterPos(letter),    
    	allDirections = [ [-1,-1], [-1,0], [-1,1], [0,-1], [0,1], [1,-1], [1,0], [1,1] ],
        validDirections = [],
        rowPos = letterPos[0],
        colPos = letterPos[1];

    allDirections.forEach(function(direction) {

        var row = direction[0],
            col = direction[1],

            rowSum = (row > 0) ? rowPos + row : rowPos - Math.abs(row),
            colSum = (col > 0) ? colPos + col : colPos - Math.abs(col);       

        if((rowSum >= 0 && rowSum < gridSize) && (colSum >= 0  && colSum < gridSize)) {
            validDirections.push(grid[rowSum][colSum]);
        }
    });

    return validDirections;
}

var firstLetter = "F",
    letterExists = gridHasLetter(firstLetter),
    validDirections;

if(letterExists) {	 
	validDirections = getValidDirections(firstLetter);
    
	console.log("Valid Next Letters for " + firstLetter + " are " + validDirections.join("|"));
}