package com.interview.sort;

/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
/**
 * http://www.geeksforgeeks.org/sort-elements-by-frequency/
 * @class
 */
var sortByFrequence = function (arr) {
    var countMap = {};
    var index = 0;
    for (var index3631 = 0; index3631 < arr.length; index3631++) {
        var a = arr[index3631];
        if(countMap[a]){
            
            countMap[a].count++;
        }else{
            countMap[a] ={};
            countMap[a].count = 1;
            countMap[a].firstIndex = index;
        }
        index++;
    }
    arr.sort(function(i1,i2){
        var n1 = countMap[i1];
        var n2 = countMap[i2];
        if(n1.count > n2.count){
            return -1;
        }else if(n1.count < n2.count){
            return 1;
        }else{
            return n1.firstIndex < n2.firstIndex ? -1 : 1;
        }
    });
    return arr;
};

var input = [5, 2, 8, 9, 9, 9, 2];
console.log(sortByFrequence(input));
    