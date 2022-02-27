/**
 * Date 04/16/2016
 * @author Tushar Roy
 *
 * Given a sorted array of positive varegers, rearrange the array alternately i.e first element should be maximum value,
 * second minimum value, third second max, fourth second min and so on.
 *
 * Time complexity O(n)
 * Space complexity O(1)
 *
 * http://www.geeksforgeeks.org/rearrange-array-maximum-minimum-form/
 */
var rearrange = function(input) {
    //debugger;
    for (var i = 0; i < input.length; i++) {
        var t = input[i];
        if (t < 0) {
            continue;
        }
        var i1 = i;
        debugger;
        while (true) {
            var j =
                i1 < ((input.length / 2) | 0)
                    ? 2 * i1 + 1
                    : (input.length - 1 - i1) * 2;
            console.log("i "+i+" i1 "+i1+" j "+j);        
            if (j === i1) {
                break;
            }
            if (input[j] < 0) {
                break;
            }
            var t1 = input[j];
            input[j] = -t;
            t = t1;
            i1 = j;
            console.log(arr);
        }
    }
    for (var i = 0; i < input.length; i++) {
        input[i] = Math.abs(input[i]);
    }
};

var arr = [1, 2, 3, 4, 5, 6, 7];
rearrange(arr);


    // Prvars max at first position, min at second 
    // position second max at third position, second 
    // min at fourth position and so on. 
    var rearrange = function( arr) 
    { 
        var n = arr.length;
        // initialize index of first minimum and first 
        // maximum element 
        var max_idx = n - 1, min_idx = 0; 
  
        // store maximum element of array 
        var max_elem = arr[n - 1]+1; 
  
        // traverse array elements 
        for (var i = 0; i < n; i++) { 
            // at even index : we have to put 
            // maximum element 
            if (i % 2 == 0) { 
                arr[i] += (arr[max_idx] % max_elem) * max_elem; 
                max_idx--; 
            } 
  
            // at odd index : we have to put minimum element 
            else { 
                arr[i] += (arr[min_idx] % max_elem) * max_elem; 
                min_idx++; 
            } 
        } 
    
        // array elements back to it's original form 
        for (var i = 0; i < n; i++) 
            arr[i] = Math.floor(arr[i] / max_elem); 
    } 
  
    // Driver code 
     
        var arr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9]; 
         
  
        rearrange(arr); 
        console.log(arr);
        