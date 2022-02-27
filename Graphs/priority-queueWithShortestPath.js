// Code goes here

"use strict";

var _createClass = (function() {
   function defineProperties(target, props) {
      for (var key in props) {
         var prop = props[key];
         prop.configurable = true;
         if (prop.value) prop.writable = true;
      }
      Object.defineProperties(target, props);
   }
   return function(Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
   };
})();

var _classCallCheck = function(instance, Constructor) {
   if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
   }
};

var PriorityQueue = (function() {
   function PriorityQueue(maxSize) {
      _classCallCheck(this, PriorityQueue);

      // Set default max size if not provided
      if (isNaN(maxSize)) {
         maxSize = 10;
      }
      this.maxSize = maxSize;
      // Init an array that'll contain the queue values.
      this.container = [];
   }

   _createClass(PriorityQueue, {
      display: {
         // Helper function to display all values while developing

         value: function display() {
            console.log(this.container);
         }
      },
      isEmpty: {
         // Checks if queue is empty

         value: function isEmpty() {
            return this.container.length === 0;
         }
      },
      isFull: {
         // checks if queue is full

         value: function isFull() {
            return this.container.length >= this.maxSize;
         }
      },
      enqueue: {
         value: function enqueue(data, priority) {
            // Check if Queue is full
            if (this.isFull()) {
               console.log("Queue Overflow!");
               return;
            }
            var currElem = new this.Element(data, priority);
            var addedFlag = false;
            // Since we want to add elements to end, we'll just push them.
            for (var i = 0; i < this.container.length; i++) {
               if (currElem.priority < this.container[i].priority) {
                  this.container.splice(i, 0, currElem);
                  addedFlag = true;
                  break;
               }
            }
            if (!addedFlag) {
               this.container.push(currElem);
            }
         }
      },
      dequeue: {
         value: function dequeue() {
            // Check if empty
            if (this.isEmpty()) {
               console.log("Queue Underflow!");
               return;
            }
            return this.container.pop();
         }
      },
      peek: {
         value: function peek() {
            if (isEmpty()) {
               console.log("Queue Underflow!");
               return;
            }
            return this.container[this.container.length - 1];
         }
      },
      clear: {
         value: function clear() {
            this.container = [];
         }
      }
   });

   return PriorityQueue;
})();

// Create an inner class that we'll use to create new nodes in the queue
// Each element has some data and a priority
PriorityQueue.prototype.Element = (function() {
   var _class = function(data, priority) {
      _classCallCheck(this, _class);

      this.data = data;
      this.priority = priority;
   };

   return _class;
})();

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


function buildDisTable(g, source) {
   var distanceTable = [];
   for(var i=0; i<g.numV;i++) {
      distanceTable[i]={distance:null,prceeding:null};   
   }
   distanceTable[source]={distance:0,prceeding:source};
   var queue = new PriorityQueue(10);
   queue.enqueue(source, 0);
   while(!queue.isEmpty()){
      var currentV = queue.dequeue().data;
      var currentD = distanceTable[currentV].distance;
      var v = g.get_adj_Vert(currentV);
      for(var j=0; j<v.length; j++) {
         var distance = currentD+g.get_edgeW(currentV, v[j])
         var nDist =  distanceTable[v[j]].distance;
         if(nDist===null || nDist > distance) {
            distanceTable[v[j]] = {distance:distance, prceeding:currentV};
            queue.enqueue(v[j], distance);
         }
      }
   }  
   return distanceTable;
}

function shortest_path(g, source, dest) {
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
      console.log("The path is "+path);
   }

}
var g1 = new Graph(9,0);
g1.add(0,1,1);
g1.add(1,2,2);
g1.add(1,3,6);
g1.add(2,3,2);
g1.add(1,4,3);
g1.add(3,5,1);
g1.add(5,4,5);
g1.add(3,6,1);
g1.add(6,7,1);
g1.add(0,7,8);
shortest_path(g1, 0, 6);
shortest_path(g1, 4,7);
shortest_path(g1, 7,0);
//weighted path shortest path

//Prims spanning tree graph spanning tree
//kruskal algo 
