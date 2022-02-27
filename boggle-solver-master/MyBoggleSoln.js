//const dictionary;
//const matrix;
const directions = [ [-1, -1], [-1, 0], [-1, 1], [0, -1], [0, 1], [1, -1], [1, 0], [1, 1] ];
  
const boggleSolver=(dictionary, boardMatrix)=>{
	const wordList = [];
  	const boardSize = boardMatrix.length;
  	
	
	const containsWord= (currentWord, arr) => {
		console.log(currentWord+  " => "+arr);
		if(arr.length) {	
				if(arr.indexOf(currentWord)!=-1) return true;
			}
		return false;
	}
	const solveBoard = (currentWord, currentPosition, coords = [], usedPositions = []) => {
	  	const [row, col] = currentPosition;
	    const positions_copy = usedPositions.slice();
	    const coords_copy = coords.slice();
	    if(wordList.length===dictionary.length) return;	
	    if(currentWord.length >= 3 && containsWord(currentWord, dictionary) && !containsWord(currentWord,wordList)) {
	      wordList.push(currentWord);
	      console.log("found word "+currentWord);

	    }

	    const adjacents = getAdjacentLetters(currentWord, currentPosition, usedPositions);

	    adjacents.forEach(adjacent => {
	    	positions_copy.push(currentPosition);
	      const [x,y] = adjacent;
	      const letter = boardMatrix[x][y];
	      const word = currentWord + letter;

	      solveBoard(word, adjacent, positions_copy);
	    });
	    return;
	}
	const arrayMatch= (first, second) =>{
	  	return first.some((item) => {
	   		return item.every((x, index) => {
	      	return x === second[index];
	      });
	    });
	  }
	const  isValidPrefix = (dictionary, adjacentWord) => {
		return dictionary.some((item) => {
	   		return item.startsWith(adjacentWord);
	    });
	}
	function getAdjacentLetters(currentWord, position, usedPositions) {
	  const _directions = directions.slice(0);
	  const [row,col] = position;

		return _directions.reduce((acc, direction) => {
	  	const [x, y] = direction;
	    const rowSum = (x < 0) ? row - Math.abs(x) : row + x;
	    const colSum = (y < 0) ? col - Math.abs(y) : col + y;

	    if((rowSum >= 0 && colSum >= 0) && (rowSum < boardSize && colSum < boardSize)) {
	    	let adjacent = [rowSum, colSum];
	      let adjacentWord = currentWord + boardMatrix[rowSum][colSum];
	      if(!arrayMatch(usedPositions, adjacent) && isValidPrefix(dictionary, adjacentWord)) {
	   			acc.push(adjacent);
	      }
	    }
	    return acc;
	  }, []);
	}
	boardMatrix.forEach((row, rowIndex) => {
	   row.forEach((col, colIndex) => {
	     solveBoard(boardMatrix[rowIndex][colIndex], [rowIndex, colIndex]);
	   });
	});
	return wordList;
}
let dictionary1=['sin', 'eir'];
let boardMatrix=[['s','e','r'], ['l','i','n'], ['e','r','s']];
boggleSolver(dictionary1, boardMatrix);