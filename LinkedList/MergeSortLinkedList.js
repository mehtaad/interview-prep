
/* sorts the linked list by changing next pointers (not data) */
function MergeSort(headRef) 
{ 
    var head = headRef; 
    var a={}; 
    var b={}; 
  
    /* Base case -- length 0 or 1 */
    if ((head == null) || (head.next == null)) { 
        return; 
    } 
  
    /* Split head into 'a' and 'b' sublists */
    var temp = FrontBackSplit(head); 
    a=temp.a;
    b= temp.b;
    console.log("The split list are Front "+JSON.stringify(a)+" and back is "+JSON.stringify(b))
  
    /* Recursively sort the sublists */
    MergeSort(a); 
    MergeSort(b); 
    /* answer = merge the two sorted lists together */
    headRef = SortedMerge(a, b); 
} 
  
/* See https:// www.geeksforgeeks.org/?p=3622 for details of this  
function */
function SortedMerge(a, b) 
{ 
    var result = null; 
   console.log("SortedMerge "+JSON.stringify(a)+" and back is "+JSON.stringify(b));
    /* Base cases */
    if (a == null) 
        return (b); 
    else if (b == null) 
        return (a); 
  
    /* Pick either a or b, and recur */
    if (a.data <= b.data) { 
        result = a; 
        result.next = SortedMerge(a.next, b); 
    } 
    else { 
        result = b; 
        result.next = SortedMerge(a, b.next); 
    } 
    console.log("SortedMerge Result is "+JSON.stringify(result));
    return result; 
} 
  
/* UTILITY FUNCTIONS */
/* Split the nodes of the given list into front and back halves,  
    and return the two lists using the reference parameters.  
    If the length is odd, the extra node should go in the front list.  
    Uses the fast/slow pointer strategy. */
function FrontBackSplit(source, 
                    frontRef, backRef) 
{ 
    var fast; 
    var slow; 
    slow = source; 
    fast = source.next; 
  
    /* Advance 'fast' two nodes, and advance 'slow' one node */
    while (fast != null) { 
        fast = fast.next; 
        if (fast != null) { 
            slow = slow.next; 
            fast = fast.next; 
        } 
    } 
  
    /* 'slow' is before the midpoint in the list, so split it in two  
    at that point. */
    frontRef = source; 
    backRef = slow.next; 
    slow.next = null; return {a:frontRef, b:backRef}
} 
  
/* Function to insert a node at the beginging of the linked list */
function push(head_ref, new_data) { 
    /* allocate node */

    var new_node = {}; 
  
    /* put in the data */
    new_node.data = new_data; 
  
    /* link the old list off the new node */
    new_node.next = head_ref; 
  
    /* move the head to point to the new node */
    return new_node; 
} 

/* Drier program to test above functions*/
function main() { 
    /* Start with the empty list */
    var res = {}; 
    var a = null; 
  
    /* Let us create a unsorted linked lists to test the functions  
    Created lists shall be a: 2.3.20.5.10.15 */
    a = push(a, 15); 
    a = push(a, 10); 
    a = push(a, 5); 
    a = push(a, 20); 
    a = push(a, 3); 
    a = push(a, 2); 
    /* Sort the above created Linked List */
    debugger;
    MergeSort(a); 
    console.log(a);
} 
main();
  
// This is code is contributed by rathbhupendra 