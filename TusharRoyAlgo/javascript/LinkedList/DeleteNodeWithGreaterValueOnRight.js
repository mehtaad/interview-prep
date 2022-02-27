

/**
 * http://www.geeksforgeeks.org/delete-nodes-which-have-a-greater-value-on-right-side/
 * Test cases
 * Sorted list
 * reverse sorted list
 * 0 1 or more nodes in the list
 */


    var maxFound = 0;
    
    var  deleteNodes=function(head){
        if(head == null){
            return null;
        }
        var nextNode = deleteNodes(head.next);
        if(head.data > maxFound){
            maxFound = head.data;
        }
        if(maxFound > head.data){
            return nextNode;
        }
        head.next = nextNode;
        return head;
    }
    var in1 = {
        data:12,
        next:{
            data:15,
            next:{
                data:10,
                next:{
                data:11,
                next:{
                    data:5,
                    next:{
                        data:6,
                        next:{
                            data:3,
                            next:null
                        }
                    }
                }
            }
            }
        }

    };
    deleteNodes(in1);
        
