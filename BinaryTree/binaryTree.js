function Node(data, left, right) {
	this.data = data;
	this.left = left;
	this.right = right;
	this.show = show;
	this.list = undefined;
}

show = function () {

	return this.data;

}

BST = function () {


	this.root = null;
	this.insert = insert;
	this.inOrder = inOrder;
	this.dllListObj = undefined;
	this.dllroot = undefined;
	this.dllList = dllList
}
//Depth First Linked List
dllList = function(node) {
	
	if(!this.dllListObj) {
		this.dllListObj = {
			data: node.data,
			right: null,
			left: null
		}
		this.dllroot = this.dllListObj;
	} else {
		var dllListObj = {
			data: node.data,
			right: null,
			left: this.dllListObj

		}
		this.dllListObj.right = dllListObj;
		this.dllListObj = dllListObj;
		
	}

}

insert = function(data) {
	var n = new Node(data, null, null);
	if (this.root == null) {
		this.root = n;
	} else {
		var current = this.root;
		var parent;
		while (true) {
			parent = current;
			if (data < current.data) {
				current = current.left;
				if (current == null) {
					parent.left = n;
					break;
				}
			} else {
				current = current.right;
				if (current == null) {
					parent.right = n;
					break;
				}
			}
		}
	}
}
function getMin() {
	var current = this.root;
	while (!(current.left == null)) {
		current = current.left;
	}
	return current.data;
}

function getMax() {
	var current = this.root;
	while (!(current.right == null)) {
		current = current.right;
	}
	return current.data;
}


function find(data) {
	var current = this.root;
	while (current.data != data) {
		if (data < current.data) {
			current = current.left;
		} else {
			current = current.right;
		}
		if (current == null) {
			return null;
		}
	}
	return current;
}

function remove(data) {
	root = removeNode(this.root, data);
}

function removeNode(node, data) {
	if (node == null) {
		return null;
	}
	if (data == node.data) {
		// node has no children
		if (node.left == null && node.right == null) {
			
			return null;
		}
		// node has no left child
		if (node.left == null) {
			return node.right;
		}
		// node has no right child
		if (node.right == null) {
			return node.left;
		}
		// node has two children
		var tempNode = getSmallest(node.right);
		node.data = tempNode.data;
		node.right = removeNode(node.right, tempNode.data);
		return node;
	} else if (data < node.data) {
		node.left = removeNode(node.left, data);
		return node;
	} else {
		node.right = removeNode(node.right, data);
		return node;
	}
}



inOrder = function(node) {//left-parent-right
	if (!(node == null)) {
		inOrder(node.left);
		//if(!node.left && !node.right) {//ptint leafs only
			console.log(node.show() + " ");
		 	//dllList(node);
		//}
		inOrder(node.right);
	}
}

function postOrder(node) {//left-right-parent
	if (!(node == null)) {
		postOrder(node.left);
		postOrder(node.right);
		putstr(node.show() + " ");
	}
}
function preOrder(node) {//parent-left-right
	if (!(node == null)) {
		console.log(node.data);
		preOrder(node.left);
		preOrder(node.right);
		
	}
}
function bfs(node, level, arr) {
	console.log(node.show() + " ");
	while (node.left || node.right) {
		if (node.right) arr.push(node.right);
		if (node.left) arr.push(node.left);

		//store child on queue
		//Push childern left then right
	}
	if (arr.length) BFS(arr.shift(), level + 1, arr);
	//remove child from queue call BFS(child);  
	//unshift item
}
//Breadth First Search:   Good for routing/ least cost problem 
//FIFO stack process all node at a level before going to next level
var node = {
	data:26,
	left: {
		data:10,
		left: {
			data:4
		},
		right:{
			data:6
		}
	},
	right: {
		data:3,
		left: {
			data:2
		},
		right:{
			data:1
		}	
	}
}
function sumCheck(node) {
	return node.data === preOrderSum(node.right, 0)+preOrderSum(node.left, 0);
}
function preOrderSum(node, result) {//parent-left-right
	if (!(node == null)) {
		result=result+node.data;
		preOrderSum(node.left, result);
		preOrderSum(node.right, result);
		
	}
	return result;
}
//Find Kth smalles element, use inorder traversal and count kth element poped