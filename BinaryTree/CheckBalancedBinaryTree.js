
function BinarySearchTree() {
  this.root = null;
}

BinarySearchTree.prototype.insertNode = function (val) {
  var node = {
    data : val, 
    left : null, 
    right : null
  };

  var currentNode;
  
  if (!this.root) {
    this.root = node;
  } else {
    currentNode = this.root;
    while (currentNode) {
      if (val < currentNode.data) {
          if (!currentNode.left) {
            currentNode.left = node;
            break;
          } else {
            currentNode = currentNode.left;
          }
      } else if (val > currentNode.data) {
        if (!currentNode.right) {
          currentNode.right = node;
          break;
        } else {
          currentNode = currentNode.right;
        }
      } else {
        console.log('Ignoring this value as the BST supposed to be a tree containing UNIQUE values');
        break;
      }
    }    
  }
};

var Util = {

  getHeight : function (root) {
    console.log("In Get Height Node is "+JSON.stringify(root));
    if (root === null) { // Base case
      return 0; 
    }
    var height = Math.max(Util.getHeight(root.left), Util.getHeight(root.right)) + 1;
    console.log("the height is "+height+ " Node is "+JSON.stringify(root));
    return height;
  },

  isBalanced : function (root) {
    console.log("In is Balanced Node is "+JSON.stringify(root));
    if (root === null) { // Base case
      return true;
    }
    var heightDifference = Math.abs(Util.getHeight(root.left) - Util.getHeight(root.right));
    if (heightDifference > 1) {
      return false;
    } else {
      return Util.isBalanced(root.left) && Util.isBalanced(root.right);
    }
  }

};

// Create a new Balanced Binary Tree as a sample input
// http://js-interview.tutorialhorizon.com/2015/10/12/create-a-binary-search-tree-in-javascript/
var BST = new BinarySearchTree();
BST.root = {
  data: 8,
  left: {
    data: 3,
    left: {
      data: 1,
      left: {
        data: 6,
        left: { data: 4, left: null, right: null },
        right: null
      },
      right: null
    },
    right: null
  },
  right: {
    data: 10,
    left: { data: 9, left: null, right: null },
    right: {
      data: 14,
      left: { data: 13, left: null, right: null },
      right: null
    }
  }
};
/*BST.insertNode(8);
BST.insertNode(3);
BST.insertNode(10);
BST.insertNode(1);
BST.insertNode(6);
BST.insertNode(14);
BST.insertNode(4);
BST.insertNode(7);
BST.insertNode(13);
BST.insertNode(2);
BST.insertNode(3);
BST.insertNode(9);*/

// Find if the given tree is balanced or not
console.log(Util.isBalanced(BST.root)); // true

// Un-comment L#39 to make tree imbalanced
console.log(Util.isBalanced(BST.root)); // false