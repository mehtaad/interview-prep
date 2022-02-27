

/**
 * http://www.geeksforgeeks.org/next-greater-element/
 * Find next larger element on right side of a number in array for 
 * all positions in array
 * This is different than finding largest element on right side which can 
 * be done by keeping max while iterating from right
 * It is also different from find next higher number on right side which can
 * be found by keeping AVL tree and finding ceiling.
 */
var findLargRightElement=function(arr) {
    var max=0;
    var result=[];
    max=arr[arr.length-1];
    result.unshift(-1);
    ;
    for(var i=arr.length-2;i>=0;i--) {
        if(arr[i]<max) {
            result.unshift(max);
        } else {
          result.unshift(-1);  
        }
        if(max<arr[i])
            max=arr[i];
        
    }
    console.log(arr);
    console.log(result);
}
var arr = [4,2,-8,6,0,-3,-1,1,9];
findLargRightElement(arr);