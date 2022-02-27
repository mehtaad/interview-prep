/**
 * Copy List with Random Pointer
 *
 * A linked list is given such that each node contains an additional random pointer
 * which could point to any node in the list or null.
 *
 * Return a deep copy of the list.
 * https://www.youtube.com/watch?time_continue=1223&v=xF9goDxk5nM
 */


// Definition for singly-linked list with a random pointer.
 function RandomListNode(label) {
     this.label = label;
     this.next = this.random = null;
 }
 

/**
 * @param {RandomListNode} head
 * @return {RandomListNode}
 */
const copyRandomList = head => {
  if (!head) {
    return null;
  }

  const map = new Map();

  // Step 1. Copy all the nodes
  let p = head;
  while (p) {
    map.set(p, new RandomListNode(p.label));
    p = p.next;
  }

  // Step 2. Copy the next and random pointers
  p = head;
  while (p) {
    if (p.next) map.get(p).next = map.get(p.next);
    if (p.random) map.get(p).random = map.get(p.random);
    p = p.next;
  }

  return map.get(head);
};

export { copyRandomList };

/**New Soln*/
    private void duplicateList(Node head){
        
    }
    private void fillRandoms(Node head){
        
    }
    private Node segregate(Node head){
        
    }


    //https://www.youtube.com/watch?time_continue=1223&v=xF9goDxk5nM
    var copyRandomList = function(head) {
        if(head != null){
          debugger;
          var map={};
          var current = head;
          while(current != null){//duplicate nodes
              var temp = {val:current.val, next:current.next, random:null};
              map[current['$id']]=current;
              current.next = temp;
              current = current.next.next;
          }


            //fillRandoms
            var current = head;
            while(current != null && current.next != null){
                current.next.random = current.random != null ? map[current.random['$ref']].next : null;
                current = current.next.next;
            }
            //segregate
            var copy = head.next;
            var current = head;
            while(current.next != null){
                var temp = current.next;
                current.next = current.next.next;
                current = temp;
            }
            return copy;
        }
    }
    copyRandomList({"$id":"1","next":{"$id":"2","next":null,"random":{"$ref":"2"},"val":2},"random":{"$ref":"2"},"val":1})