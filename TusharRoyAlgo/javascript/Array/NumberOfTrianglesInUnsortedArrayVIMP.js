/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
/**
 * http://www.geeksforgeeks.org/find-number-of-triangles-possible/
 * @class
 */
var numberOfTriangles = function(input) {
    input.sort(function(a,b){return a-b;});
    var count = 0;
    debugger;
    for (var i = 0; i < input.length - 2; i++) {
        var k = i + 2;
        for (var j = i + 1; j < input.length; j++) {
            {
                console.log("BBB "+input[i] +" " +input[j] +" "+ input[k]);
                while (k < input.length && input[i] + input[j] > input[k]) {
                    {
                        console.log(input[i] +" " +input[j] +" "+ input[k]);
                        k++;
                    }
                }
                count += k - j - 1;
                console.log(count);
            }
        }
    }
    return count;
};

var input = [3, 4, 5, 6, 8, 9, 15];

console.info(numberOfTriangles(input));
