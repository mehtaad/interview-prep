

/**
 * http://www.careercup.com/question?id=6685828805820416
 * Test Edge cases
 * Values in cell should be in range of 2D array.
 */

var isAllCellTraversed = function(grid){
	var visited = new Array(grid.length);
	for (var t=0;t<grid.length;t++) {
		visited[t]=new Array(grid[0].length).fill(0);
	}
	
	var total = grid.length * grid[0].length;
	var startx = grid[0][0].x;
	var starty = grid[0][0].y;
	for(var i=0; i < total-2; i++){
		if(grid[startx][starty] == null){
			return false;
		}
		if(visited[startx][starty] == true){
			return false;
		}
		visited[startx][starty] = true;
		var x = grid[startx][starty].x;
		var y = grid[startx][starty].y;
		startx = x;
		starty = y;
	}
	if(grid[startx][starty] == null){
		return true;
	}
	return false;
}

var cell = new Array(3);
cell[0] = [{x:0,y:1},{x:2,y:0}]
cell[1] = [{null},{x:1,y:0}];
cell[2] = [{x:2,y:1},{x:1,y:1}]


console.log(isAllCellTraversed(cell));
	