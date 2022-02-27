
//https://www.geeksforgeeks.org/lexicographic-rank-of-a-string/
/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */

var factorial = (function() {
    var store = [];
    return function getFactoril1(num) {
        if (store[num]) return store[num];
        if (num <= 1) return 1;
        var result = num * getFactoril1(num - 1);
        store[num] = result;
        //console.log(store);
        return result;
    };
})();
var findNumberOfSmallerCharactersOnRight = function(index, str) {
    var count = 0;
    for(var i=index+1; i < str.length; i++){
        if(str[i] < str[index]){
            count++;
        }
    }
    return count;
};

var rank = function(str) {
    var rank = 0;
    for (var i = 0; i < str.length; i++) {
        {
            var num = findNumberOfSmallerCharactersOnRight(i, str);
            rank += factorial(str.length - i - 1) * num;
        }
    }
    return rank + 1;
};
var rank = rank("STRING".split(""));
console.info(rank);



