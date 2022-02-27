package com.interview.multiarray;

/**
 * http://www.geeksforgeeks.org/a-boolean-matrix-question/
 */
/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
var fill = function(input) {
	var row = new Array(input.length).fill(0);
	var col = new Array(input[0].length).fill(0);
	for (var i = 0; i < input.length; i++) {
		for (var j = 0; j < input[i].length; j++) {
			if (input[i][j] === 1) {
				row[i] = true;
				col[j] = true;
			}
		}
	}
	for (var i = 0; i < input.length; i++) {
		for (var j = 0; j < input[i].length; j++) {
			if (row[i] || col[j]) {
				input[i][j] = 1;
			}
		}
	}
};

var input = [[1, 0, 0, 1], [0, 0, 1, 0], [0, 0, 0, 0]];
fill(input);
for (var i = 0; i < input.length; i++) {
	console.info(input[i]);
}