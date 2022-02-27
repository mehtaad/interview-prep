

/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
var updateCounter = function (result, current, counter) {
    //routine to convert number to string representation, 11--->'11'
        var tempCounter = counter;
        var len = 1;
        while ((tempCounter > 0)) {
            {
                len = len * 10;
                tempCounter = (function (n) { return n < 0 ? Math.ceil(n) : Math.floor(n); })(tempCounter / 10);
            }
        }
        ;
        len = (len / 10 | 0);
        while ((counter > 0)) {
            {
                result[current++] = String.fromCharCode((((counter / len | 0)) + '0'.charCodeAt(0)));
                counter = counter % len;
                len = (function (n) { return n < 0 ? Math.ceil(n) : Math.floor(n); })(len / 10);
            }
        }
        ;
        return current;
    };
    var encoding = function (str, result) {
        var pickedChar = str[0];
        
        var counter = 1;
        
        for (var i = 1; i < str.length; i++) {
            {
                if (str[i]===pickedChar) {
                    counter++;
                }
                else {
                    var tt = pickedChar+counter;
                    result.push(tt); 
                    pickedChar = str[i];
                    counter = 1;
                }
            }
        }
        result.push(pickedChar+counter);
        
        return current;
    };
    
    var str = "AAAAAAAAAAAAABBCDDEEEEE";
    var result = [];
    var current = encoding((str).split(''), result);
    console.info(result.join('');
    