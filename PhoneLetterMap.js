//Write function that will, take as input a string consisting of numbers 0-9, and outputs an array of all possible combinations of letters that can be produced from the input series of numbers.

//Use this map to see the letters that an individual number can result in
var numberToLetters = {
	'0': [],
	'1': [],
	'2': ['a', 'b', 'c'],
	'3': ['d', 'e', 'f'],
	'4': ['g', 'h', 'i'],
	'5': ['j', 'k', 'l'],
	'6': ['m', 'n', 'o'],
	'7': ['p', 'q', 'r'],
	'8': ['t', 'u', 'v'],
	'9': ['w', 'x', 'y', 'z']	
};



var rec = function(input, result=[], index=0, str='') {
	//debugger;
	
	while(index<input.length && numberToLetters[input[index]].length===0 ) {
		index++
	}
	var str1='';
	if(index<input.length) {
		for(var i=0; i<numberToLetters[input[index]].length; i++) {
			str1= str+ numberToLetters[input[index]][i];
			if(index===input.length-1) {
				result.push(str1);
			} else {
				rec(input, result,index+1, str1)				
			}
		}
	}
}
function getPossibleLetters (input) {
	//Interviewee's code goes here
	var result;
	if(input.length>0)
		result=rec(input);
	console.log(result);	
}
getPossibleLetters("23");



//Another solution Use this map to see the letters that an individual number can result in
var numberToLetters = {
	'0': [],
	'1': [],
	'2': ['a', 'b', 'c'],
	'3': ['d', 'e', 'f'],
	'4': ['g', 'h', 'i'],
	'5': ['j', 'k', 'l'],
	'6': ['m', 'n', 'o'],
	'7': ['p', 'q', 'r'],
	'8': ['t', 'u', 'v'],
	'9': ['w', 'x', 'y', 'z']	
};

function getPossibleLetters (input) {
	//Interviewee's code goes here
}

//Possible solution
function getPossibleLetters (input) {
	var results = [];
	for ( var i = 0; i < input.length; i++ ) {
		getLettersForDigit(input[i], results);
	}
	return results;

}

function getLettersForDigit (digit, currResults) {
	if (!numberToLetters[digit] || numberToLetters[digit].length === 0 ) return false;

	var possibleLetters = numberToLetters[digit];
	//If there are no results
	if ( currResults.length === 0 ) {
		for ( var i = 0; i < possibleLetters.length; i++ ) {
			currResults.push(possibleLetters[i]);
		}	
		return true;
	}
	//If there are already results
	var count = currResults.length;
	for ( var i = 0; i < count; i++ ) {
		var old = currResults.shift();
		for ( var j = 0; j < possibleLetters.length; j++ ) {
			currResults.push(old + possibleLetters[j]);
		}
	}
	return true;
}