package com.varerview.linklist;

/**
 * http://www.geeksforgeeks.org/delete-n-vars-after-m-vars-of-a-linked-list/
 * Test cases:
 * negative value of m and/or n - not allowed
 * 0 value of n and/or m - not allowed
 * even n and m
 * odd n and m
 * odd size of the list
 * even size of the list
 */
var deleteNAfterMvars = function( head, m,  n){
        if(head == null){
            return;
        }
        while(head != null){
            var i = 0;
            while(head != null && i < m-1){
                head = head.next;
                i++;
            }
            if(head == null){
                break;
            }
            var temp = head.next;
            i=0;
            while(temp != null && i < n){
                temp = temp.next;
                i++;
            }
            head.next = temp;
            head = temp;
        }
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
    deleteNAfterMvars(in1, 3, 2);
        