//method 2 AVL tree
// A utility function to get height of the tree rooted with N 
var height=function(N) 
{ 
    if (N == null) 
        return 0; 
    return N.height; 
} 
  
// A utility function to size of the tree of rooted with N 
var size = function(N) 
{ 
    if (N == null) 
        return 0; 
    return N.size; 
} 
  
// A utility function to get maximum of two varegers 
var max = function(a, b) 
{ 
    return (a > b)? a : b; 
} 
  
/* Helper function that allocates a new node with the given key and 
    null left and right povarers. */
var newNode= function(key) 
{ 
    var node = {};
    node.key   = key; 
    node.left   = null; 
    node.right  = null; 
    node.height = 1;  // new node is initially added at leaf 
    node.size = 1; 
    return(node); 
} 
  
// A utility function to right rotate subtree rooted with y 
var rightRotate =function(y) { 
    var x = y.left; 
    var T2 = x.right; 
    // Perform rotation 
    x.right = y; 
    y.left = T2; 
    // Update heights 
    y.height = max(height(y.left), height(y.right))+1; 
    x.height = max(height(x.left), height(x.right))+1; 
    // Update sizes 
    y.size = size(y.left) + size(y.right) + 1; 
    x.size = size(x.left) + size(x.right) + 1; 
    // Return new root 
    return x; 
} 
  
// A utility function to left rotate subtree rooted with x 
var leftRotate = function(x) { 
    var y = x.right; 
    var T2 = y.left; 
    // Perform rotation 
    y.left = x; 
    x.right = T2; 
    //  Update heights 
    x.height = max(height(x.left), height(x.right))+1; 
    y.height = max(height(y.left), height(y.right))+1; 
    // Update sizes 
    x.size = size(x.left) + size(x.right) + 1; 
    y.size = size(y.left) + size(y.right) + 1; 
    // Return new root 
    return y; 
} 
  
// Get Balance factor of node N 
var getBalance = function(N) 
{ 
    if (N == null) 
        return 0; 
    return height(N.left) - height(N.right); 
} 
  
// Inserts a new key to the tree rotted with node. Also, updates *count 
// to contain count of smaller elements for the new key 
var insert=function(node, key, count) { 
    /* 1.  Perform the normal BST rotation */
    if (node == null) 
        return({node:newNode(key), count:count}); 
  
    if (key < node.key) {
        var obj  = insert(node.left, key, count); 
        
        node.left = obj.node?obj.node:obj;
        count = obj.count?obj.count:count;
        
    }

    else
    { 
        
        var obj = insert(node.right, key, count); 
        node.right = obj.node?obj.node:obj;
        count = obj.count?obj.count:count;

        // UPDATE COUNT OF SMALLER ELEMENTS FOR KEY 
        count = count + size(node.left) + 1; 
    } 
  
  
    /* 2. Update height and size of this ancestor node */
    node.height = max(height(node.left), height(node.right)) + 1; 
    node.size   = size(node.left) + size(node.right) + 1; 
  
    /* 3. Get the balance factor of this ancestor node to check whether 
       this node became unbalanced */
    var balance = getBalance(node); 
  
    // If this node becomes unbalanced, then there are 4 cases 
  
    // Left Left Case 
    var tnode;
    if (balance > 1 && key < node.left.key) {
        tnode = rightRotate(node); 
        return {node:tnode, count:count}
    }
        
  
    // Right Right Case 
    if (balance < -1 && key > node.right.key) {
        tnode =  leftRotate(node); 
        return {node:tnode, count:count}
    }
        
  
    // Left Right Case 
    if (balance > 1 && key > node.left.key) 
    { 
        node.left =  leftRotate(node.left); 
        tnode =  rightRotate(node); 
        return {node:tnode, count:count}
    } 
  
    // Right Left Case 
    if (balance < -1 && key < node.right.key) 
    { 
        node.right = rightRotate(node.right); 
        tnode =  leftRotate(node); 
        return {node:tnode, count:count}
    } 
  
    /* return the (unchanged) node povarer */
    return {node: node, count:count}; 
} 
  
// The following function updates the countSmaller array to contain count of 
// smaller elements on right side. 
var constructLowerArray = function(arr, countSmaller, n){ 
  var i, j; 
  var root = null; 
  debugger;
  // initialize all the counts in countSmaller array as 0 
  for  (i = 0; i < n; i++) 
     countSmaller[i] = 0; 
  
  // Starting from rightmost element, insert all elements one by one in 
  // an AVL tree and get the count of smaller elements 
  for (i = n-1; i >= 0; i--) 
  { 
    debugger;
     var obj = insert(root, arr[i], countSmaller[i]); 
     root = obj.node?obj.node:obj;
     countSmaller[i] = obj.count?obj.count:countSmaller[i];
  } 
  console.log(root);
} 
var arr = [6, 15, 20, 9, 8,5,30,7,10]; 
var n = arr.length; 

var low = new Array(n); 

constructLowerArray(arr, low, n); 

console.log("Following is the constructed smaller count array"); 
console.log(arr);
console.log(low); 



