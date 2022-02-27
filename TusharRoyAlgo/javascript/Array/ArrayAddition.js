/*
 Add 2 vareger array as if adding 2 vareger number
 Given 
 var arr1[] = {9,9,9,9,9,9,9};
 var arr2[] = {1,6,8,2,6,7};

 result should be 9999999+168267
        
*/
function add(arr1, arr2){
    var l = Math.max(arr1.length, arr2.length);
    var result = new Array(l);
    
    var i = arr1.length-1;
    var j= arr2.length-1;
    var c=0;
    var r=0;
    l--;
    while(l>=0){
        //debugger;
        r = (arr1[i]?arr1[i]:0) + (arr2[j]?arr2[j]:0) + c;
        c = Math.floor(r/10);
        result[l] = r%10;
        console.log(""+c+""+r);
        i--;j--;l--;
    }
    if(c) result.unshift(c);
    return result;
}
var arr1 = [9,9,9,9]
var arr2 = [1,6,8];
var result = add(arr1, arr2);
console.log(result);