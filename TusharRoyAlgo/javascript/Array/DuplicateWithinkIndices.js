
/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
/**
 * Write a function that determines whether a array contains duplicate
 * characters within k indices of each other
 * @class
 */
var duplicate = function (arr, k) {
    var visited = {};
    for(var i=0; i < arr.length; i++){
        console.log(JSON.stringify(visited))
        if(visited[arr[i]]){
            return true;
        }
        if(i >= k && visited[arr[i-k]]){
            delete visited[arr[i-k]];
        }
        visited[arr[i]]=true;
    }
    return false;
}
    
var arr = [1, 2, 3, 11, 2, 5, 6];

console.info(duplicate(arr, 3));
    