
/**
 * http://www.geeksforgeeks.org/iterative-quick-sort/
 * Test case
 * 0,1 or more elements in the array
 */


    var sort = function(arr){
        var stack = [];
        var l = 0;
        var h = arr.length-1;
        stack.push(l);
        stack.push(h);
        
        while(stack.length>0){
            h = stack.pop();
            l = stack.pop();
            
            var p = partition(arr,l,h);
            if(l < p-1 && h > p+1){
                stack.push(l);
                stack.push(p-1);
                stack.push(p+1);
                stack.push(h);
            }
            else if(l < p-1){
                stack.push(l);
                stack.push(p-1);
            }else if(h > p+1){
                stack.push(p+1);
                stack.push(h);
            }
        }
    }
    
    var partition = function(arr, low, high){
        var pivot = arr[low];
        var i = low+1;
        var j = low+1;
        while(j <= high){
            if(arr[j] < pivot){
                swap(arr,i,j);
                i++;
            }
            j++;
        }
        swap(arr,i-1,low);
        return i-1;
        
    }
    
    var swap = function(arr, a, b){
        var temp = arr[a];
        arr[a] = arr[b];
        arr[b] = temp;
    }
    
    
    var arr = [3,2,8,0,11,-1,-5,4,32,-60,44];
    
    sort(arr);
    console.log(arr);