

/**
 * http://www.geeksforgeeks.org/sum-of-two-linked-lists/
 * Test case
 * Either of list is null
 * Size of list1 is greater, equal or smaller than list2
 * Add with carry in main
 * Add with carry in remaining
 */
/**
 * Add Two Numbers II
 *
 * You are given two non-empty linked lists representing two non-negative integers. The most significant digit comes
 * first and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.
 *
 * You may assume the two numbers do not contain any leading zero, except the number 0 itself.
 *
 * Follow up:
 * What if you cannot modify the input lists? In other words, reversing the lists is not allowed.
 *
 * Example:
 *
 * Input: (7 -> 2 -> 4 -> 3) + (5 -> 6 -> 4)
 * Output: 7 -> 8 -> 0 -> 7
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
function ListNode(val) {
      this.val = val;
      this.next = null;
 } 
var addTwoNumbers = (l1, l2) => {
  // Let's use two stacks to help
  const s1 = [];
  const s2 = [];

  while (l1) {
    s1.push(l1.val);
    l1 = l1.next;
  }

  while (l2) {
    s2.push(l2.val);
    l2 = l2.next;
  }

  // Perform the addition
  let carry = 0;
  let list = null;
  while (s1.length > 0 || s2.length > 0 || carry > 0) {
    const v1 = s1.length > 0 ? s1.pop() : 0;
    const v2 = s2.length > 0 ? s2.pop() : 0;
    const node = new ListNode((v1 + v2 + carry) % 10);

    carry = Math.floor((v1 + v2 + carry) / 10);

    if (list) {
      node.next = list;
    }
    list = node;
  }

  return list;
};




var in1 = {
    val:7,
    next: {
     val:2,
        next: {
            val:4,
            next: {
                val:3,
                next:null  
            }    
        }   
    }
}
var in2 = {
    val:5,
    next: {
     val:6,
        next: {
            val:4,
            next: null  
        }   
    }
}
console.log(addTwoNumbers(in1,in2));


