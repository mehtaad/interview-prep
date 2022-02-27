package com.var erview.array;

/**
 * Date 03/04/2016
 * @author Tushar Roy
 *
 * Given an array of size n + 1 with elements from 1 to n. One element is duplicated mulitiple times.
 * Find that element in O(1) space. Array cannot be changed.
 *
 * Reference
 * https://leetcode.com/problems/find-the-duplicate-number/
 */
 var findDuplicate1 = function(nums) {
        if (nums.length == 0 || nums.length == 1) {
            return -1;
        }

        for(var i=0;i<nums.length;i++){
          if(nums[Math.abs(nums[i])] < 0) return Math.abs(nums[i]);
          nums[Math.abs(nums[i])] = -nums[Math.abs(nums[i])]; 
          console.log(nums);
        }
        
        return "No duplicate";
    }
    
 var findDuplicate = function(nums) {
    if (nums.length == 0 || nums.length == 1) {
        return -1;
    }

    var  slow = nums[0];
    var  fast = nums[nums[0]];
    console.log("slow = nums[0]; "+nums[0])
    console.log("fast = nums[nums[0]]"+nums[nums[0]])
    while (slow != fast) {
        console.log("slow != fast")
        console.log("slow = nums[slow]; "+nums[slow])
        slow = nums[slow];
        fast = nums[nums[fast]];
        console.log("slow != fast "+slow +" != "+fast);
    }
    fast = 0;
    console.log("fast = 0");
    while (slow != fast) {
        console.log("slow != fast")
        console.log("slow = nums[slow]; "+nums[slow])
        console.log("fast = nums[fast] "+nums[fast])
        
        slow = nums[slow];
        fast = nums[fast];
        console.log("slow != fast "+slow +" != "+fast);
    }
    return fast;
}
var input = [2,1,3,4,8,3,7,6,5,3];
console.log(findDuplicate(input));
//console.log(findDuplicate1(input));
    

