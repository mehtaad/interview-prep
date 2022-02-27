/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
/**
 * http://www.geeksforgeeks.org/an-in-place-algorithm-for-string-transformation/
 * @class
 */
var InPlaceTransformationOfString = (function () {
    function InPlaceTransformationOfString() {
    }
    /*private*/ InPlaceTransformationOfString.prototype.reverse = function (str, low, high) {
        while ((low < high)) {
                this.swap(str, low, high);
                low++;
                high--;
        }
    };
    /*private*/ InPlaceTransformationOfString.prototype.swap = function (str, index1, index2) {
        var temp = str[index1];
        str[index1] = str[index2];
        str[index2] = temp;
    };
    InPlaceTransformationOfString.prototype.cycleLeaderIteration = function (str, start, end) {
        var power = 1;
        var index = start;
        var new_index;
        var len = end - start + 1;
        var temp;
        var temp1;
        while ((power < len)) {
            {
                index = start + power;
                new_index = start;
                temp = str[index];
                while ((new_index !== power + start)) {
                    {
                        if (index % 2 === 0) {
                            new_index = ((index + start) / 2 | 0);
                        }
                        else {
                            new_index = (len / 2 | 0) + ((index + start) / 2 | 0);
                        }
                        temp1 = str[new_index];
                        str[new_index] = temp;
                        temp = temp1;
                        index = new_index;
                    }
                }
                ;
                power *= 3;
            }
        }
        ;
    };
    InPlaceTransformationOfString.prototype.inPlaceTransformationImproved = function (str) {
        var low = 0;
        var size = str.length;
        while ((size > 0)) {
            {
                var end_1 = this.get3PowerK1(size);
                size = size - end_1;
                this.cycleLeaderIteration(str, low, end_1 + low - 1);
                low = low + end_1;
            }
        }
        ;
        size = str.length;
        low = 0;
        var end = this.get3PowerK1(size);
        while ((end < str.length)) {
            {
                var nextEnd = this.get3PowerK1(str.length - end);
                this.reverse(str, (end / 2 | 0), end - 1);
                this.reverse(str, (end / 2 | 0), end + (nextEnd / 2 | 0) - 1);
                this.reverse(str, (end / 2 | 0), (end / 2 | 0) + (nextEnd / 2 | 0) - 1);
                end = end + nextEnd;
            }
        }
        ;
    };
    /*private*/ InPlaceTransformationOfString.prototype.get3PowerK1 = function (size) {
        var power = 1;
        while (((power * 3 + 1) <= size)) {
            {
                power = power * 3;
            }
        }
        ;
        return power + 1;
    };
    InPlaceTransformationOfString.main = function (args) {
        var str = ['a', '1', 'b', '2', 'c', '3', 'd', '4', 'e', '5', 'f', '6', 'g', '7', 'h', '8', 'i', '9', 'j', 'A', 'k', 'B', 'l', 'C', 'm', 'D'];
        var ip = new InPlaceTransformationOfString();
        ip.inPlaceTransformationImproved(str);
        for (var i = 0; i < str.length; i++) {
            {
                console.info(str[i]);
            }
            ;
        }
    };
    return InPlaceTransformationOfString;
}());
InPlaceTransformationOfString["__class"] = "InPlaceTransformationOfString";
InPlaceTransformationOfString.main(null);
