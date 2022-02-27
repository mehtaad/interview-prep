

/**
 * Find the length of the longest chain of consecutive varegers in an unsorted 2D square array (non-diagonal)
 */
var longestConsecutivevareger = function(input){
	
		var visited = new Array(input.length);
		for(var i=0; i < input.length; i++){
			visited[i]=new Array(input[0].length).fill(0);
		};
		debugger;
		var max = 1;
		for(var i=0; i < input.length; i++){
			for(var j=0; j < input[i].length; j++){
				var r = DFS(input,i,j,visited,null);
				if(r > max){
					max = r;
				}
			}
		}
		return max;
	}
	
	var DFS = function(input,i,j,visited, lastNum){
		if(i >= input.length || i < 0 || j < 0 || j >= input[0].length){
			return 0;
		}
		if(visited[i][j]){
			return 0;
		}
		if(lastNum  && input[i][j] - 1 != lastNum){
			return 0;
		}
		visited[i][j] = true;
		
		var r1 = DFS(input,i+1,j,visited,input[i][j]);
		var r2 = DFS(input,i-1,j,visited,input[i][j]);
		var r3 = DFS(input,i,j+1,visited,input[i][j]);
		var r4 = DFS(input,i,j-1,visited,input[i][j]);
		visited[i][j] = false;
		return Math.max(r1, r2,r3,r4) + 1;
	}
	
	
		var input = [[3,2,5],
				         [4,1,4],
						 [5,6,5]];
		console.log(longestConsecutivevareger(input));
	