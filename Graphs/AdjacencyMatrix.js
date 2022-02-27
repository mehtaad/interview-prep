// Code goes here

function Graph(numVert, directed) {
	this.numV = numVert;
	this.directed = directed;
	this.matrix =  [];
	for(var i=0; i<numVert;i++){
		var n = new Array(numVert).fill(0);
		
		this.matrix[i]=n;
	}
	
	//console.loge.log(this.matrix);
}
Graph.prototype.add = function(v1,v2,weight) {

	if(v1>=this.numV || v2>=this.numV || v1<0 || v2<0) return;
	if(weight < 1) return;
	//console.loge.log("adding weight to "+v1+ " "+v2);
	//console.loge.log(this.matrix);
	this.matrix[v1][v2]=weight;
	if(this.directed)this.matrix[v2][v1]=weight;
	//console.loge.log(this.matrix[v1][v2]);
	//console.loge.log(this.matrix);

}
Graph.prototype.get_adj_Vert = function(v) {
	if(v>=this.numV || v<0) return;
	var adjM = [];
	for(var i=0; i< this.matrix.length; i++) {
		if(this.matrix[v][i]>0)adjM.push(i);
	}
	//console.loge.log(adjM);
	return adjM;

}
Graph.prototype.get_indegree = function(v) {
	if(v>=this.numV || v<0) return;
	var indegree = 0;
	for(var i=0; i< this.numV; i++) {
		if(this.matrix[i][v]>0)indegree++;
	}
	return indegree;

}
Graph.prototype.get_edgeW = function(v1,v2) {
	if(v1>=this.numV || v2>=this.numV || v1<0 || v2<0) return;
	return this.matrix[v1][v2]
	
}

Graph.prototype.display = function() {
	for(var i=0; i< this.matrix.length; i++) {
		for(var j=0; i< this.matrix[i].length; j++) {
			console.log(this.matrix[i][j]);
			if(this.matrix[i][j]>0)console.log(i +" --> "+j);
		}
	}
}


breadth_first = function(graph, start) {
	var visited =[graph.numV];
	var queue = [];
	queue.push(start);
	while(queue.length) {
		var vertex =queue.shift();
		if(visited[vertex]===1)continue;
		console.log("visit "+vertex);
		visited[vertex]=1;
		var v = graph.get_adj_Vert(vertex);
		//console.log("adj is "+v);
		for(var f=0; f<v.length;f++){
			if(visited[v[f]]!=1)queue.push(v[f]);
			//console.log("que is "+queue);
		}

	}

}

var depth_first = function(graph, visited, current) {
	if(visited[current]===1)return;
	visited[current]=1;
	console.log("visit "+current);
	var v = graph.get_adj_Vert(current);
	for(var f=0; f<v.length;f++){
	  depth_first(graph, visited, v[f]);
			
			//console.log("que is "+queue);
		}
	

}

var g = new Graph(9,0);
g.add(0,1,1);
g.add(1,2,1);
//g.add(2,0,1);
g.add(2,7,1);
g.add(2,4,1);
g.add(2,3,1);
g.add(1,5,1);
g.add(5,6,1);
g.add(6,3,1);
g.add(3,4,1);
g.add(6,8,1);
g.get_adj_Vert(0)

var visited1 =[g.numV];
depth_first(g, visited1, 0);

var topo = function(g) {
	var queue = [];
	var indegreeMap = [];
	for(var i=0; i<g.numV;i++) {
		indegreeMap[i]=g.get_indegree(i);	
		if(indegreeMap[i] ===0) queue.push(i);
	}
	var sortedList = [];
	console.log("indegreeMap "+indegreeMap);
	while(queue.length) {
		var vertex = queue.shift();
		sortedList.push(vertex);
		var v = g.get_adj_Vert(vertex);
		for(var j=0; j<v.length; j++) {
			indegreeMap[v[j]] = indegreeMap[v[j]]-1;
			if(indegreeMap[v[j]] ===0) queue.push(v[j]);
		}
	}
	if(sortedList.length !=g.numV){
		console.log("This graph has cycle ");
		return;	
	}
	console.log(sortedList);

}
topo(g);

//distance table unweighted graph
//Node  Distance  Preceding
// A      0         A
// B      1         A
// C      2         A  
//O(V squere) for matrix
//O(v+e) for list and set       

function buildDisTable(g, source) {
	distanceTable = [];
	for(var i=0; i<g.numV;i++) {
		distanceTable[i]={distance:null,prceeding:null};	
		
	}
	distanceTable[source]={distance:0,prceeding:source};
	var queue=[];
	queue.push(source);
	while(queue.length){
		var currentV = queue.shift();
		currentD = distanceTable[currentV.distance];
		var v = g.get_adj_Vert(currentV);
		for(var j=0; j<v.length; j++) {
			if(distanceTable[v[j]].distance === null)
			  distanceTable[v[j]]={distance:1+currentD,prceeding:currentV};	
			if(g.get_adj_Vert(v[j]).length>0) queue.push(v[j]);
			
		}
	}	
	return distanceTable;

}
function shortest_path(g1, source, dest) {
	var dist = buildDisTable(g, source);
	var path =[];
	path.unshift(dest);
	var priviousV = dist[dest].prceeding;
	while(priviousV!== null && priviousV!= source){
		path.unshift(priviousV);
		priviousV = dist[priviousV].prceeding;
	}
	if(priviousV === null) console.log("path not found");
	else {
		path.unshift(source);
		console.log("The path is "path);
	}

}
var g1 = new Graph(9,0);
g1.add(0,1,1);
g1.add(1,2,1);
g1.add(1,3,1);
g1.add(2,3,1);
g1.add(1,4,1);
g1.add(3,5,1);
g1.add(5,4,1);
g1.add(3,6,1);
g1.add(6,7,1);
g1.add(0,7,1);

//weighted path shortest path

//Prims spanning tree graph spanning tree
//kruskal algo 
