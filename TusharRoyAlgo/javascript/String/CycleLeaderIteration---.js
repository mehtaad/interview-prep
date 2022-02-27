
//https://www.geeksforgeeks.org/an-in-place-algorithm-for-string-transformation/
////assumption that size is going to be 3^k +1 from start to end
var CycleLeaderIteration = (function () {
    function CycleLeaderIteration() {
    }
    CycleLeaderIteration.prototype.iterate = function (str, start, end) {
        var len = end - start + 1;
        var power = 1;//3^0
        //debugger;
        while ((power < len)) {
            {
                var index = power;
                var newIndex = -1;
                var temp = str[start + index];
                var temp1 = void 0;
                 console.log(str);
                while ((newIndex !== power)) {
                    {
                        if (index % 2 === 0) {
                            newIndex = (index / 2 | 0);
                        }
                        else {
                            newIndex = (len / 2 | 0) + (index / 2 | 0);
                        }
                        temp1 = str[start + newIndex];
                        str[start + newIndex] = temp;
                        temp = temp1;
                        index = newIndex;
                         console.log(str);
                    }
                }
                ;
                power = power * 3;
            }
        }
        ;
    };
    CycleLeaderIteration.main = function (args) {
        var str = "1a2b3c4d5e";
        var str1 = (str).split('');
        var cli = new CycleLeaderIteration();
        cli.iterate(str1, 0,str1.length);
        /*for (var index3727 = 0; index3727 < str1.length; index3727++) {
            var ch = str1[index3727];
            {
                console.info(ch + " ");
            }
        }*/
    };
    return CycleLeaderIteration;
}());
CycleLeaderIteration["__class"] = "CycleLeaderIteration";
CycleLeaderIteration.main(null);

