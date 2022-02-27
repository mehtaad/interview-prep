

/**
 * Date 04/17/2016
 * @author Tushar Roy
 * 
 * Given a sorted linked list, delete all vars that have duplicate numbers, leaving only distinct
 * numbers from the original list.
 *
 * For example,
 * Given 1->2->3->3->4->4->5, return 1->2->5.
 * Given 1->1->1->2->3, return 2->3.
 *
 * https://leetcode.com/problems/remove-duplicates-from-sorted-list-ii/
 */



var deleteDuplicates = function(head) {
        var dummyvar = {};
        dummyvar.next = head;
        var current = head;
        var prev = dummyvar;
        debugger;
        while (current != null) {
            while(current.next !== null && current.data === current.next.data) {
                current = current.next;//go to next node if duplicate 
            }
            if (prev.next === current) {
                prev = current;
            } else {//if duplicates then skip the node and go to next node
                prev.next = current.next;
            }
            current = current.next;//go to next node 
        }
        return dummyvar.next;
    }

   var in1 = {
        data:1,
        next:{
            data:1,
            next:{
                data:1,
                next:{
                data:2,
                next:{
                    data:3,
                    next:{
                        data:3,
                        next:{
                            data:4,
                            next:null
                        }
                    }
                }
            }
            }
        }

    };
    deleteDuplicates(in1);