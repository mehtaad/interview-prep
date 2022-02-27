/**
 * Date 06/12/2014 
 * @author tusroy
 * 
 * Given an array of non negative integers where each element represents the max 
 * number of steps that can be made forward from that element. Write a function to 
 * return the minimum number of jumps to reach the end of the array from first element
 * 
 * Solution 
 * Have 2 for loop. j trails i. If arr[j] + j >= i then you calculate new jump
 * and result.
 * 
 * Space complexity O(n) to maintain result and min jumps
 * Time complexity O(n^2)
 * 
 * Reference
 * http://www.geeksforgeeks.org/minimum-number-of-jumps-to-reach-end-of-a-given-array/
 */

 var kk = function minJump(jumpArrInput) {
	var jump = new Array(jumpArrInpu.length).fill(999999);
	var result = new Array(jumpArrInpu.length);
	jump[0]=0;
    
	for(var destLocationCell=1;destLocationCell<jumpArrInpu.length; destLocationCell++) {
		for(jumpStartLocationCell=0; jumpStartLocationCell<destLocationCell; jumpStartLocationCell++) {
			if(jumpStartLocationCell+jumpArrInpu[jumpStartLocationCell]>=destLocationCell) {//yes Jump is possible
				if(jump[destLocationCell]>jump[jumpStartLocationCell]+1) {//jump to i is more hops then possible by this new value
					result[destLocationCell]=jumpStartLocationCell;
					jump[destLocationCell]=jump[jumpStartLocationCell]+1;
				}
				console.log(jump);
				console.log(result);
			}
		}
	} 
    return jump[jump.length-1];
}
kk([1,3,5,3,2,2,6]);