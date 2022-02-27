/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
/**
 * Date 03/12/2016
 * @author Tushar Roy
 *
 * Given an array of words and a length L, format the text such that each line has exactly L characters and is fully
 * (left and right) justified.
 * You should pack your words in a greedy approach; that is, pack as many words as you can in each line.
 *
 * Time complexity - O(n) where n is the number of words
 * Space complexity - O(1)
 *
 * https://leetcode.com/problems/text-justification/
 * @class
 */

var GreedyTextJustification = (function () {
    function GreedyTextJustification() {
    }
    GreedyTextJustification.prototype.fullJustify = function (words, maxWidth) {
        var result = ([]);
        debugger;
        for (var i = 0; i < words.length; ) {
            var total = words[i].length;
            var j = i + 1;
            var buff = new String("");
            buff=buff.concat(words[i]);
            while(j < words.length && total + words[j].length + 1 <= maxWidth) {
                total += words[j].length + 1;
                j++;
            }
            var remaining = maxWidth - total;
            //since j is not word length means its not a last line. So pad accordingly.
            if (j != words.length) {
                var count = j - i - 1;
                if (count == 0) {
                    buff=this.padSpace(buff, remaining);
                } else {
                    var q = remaining/count;//distribute space amongs word
                    var r = remaining % count;
                    for (var k = i + 1; k < j; k++) {
                        buff=this.padSpace(buff, q);
                        if (r > 0) {
                            buff=buff.concat(" ");
                            r--;
                        }
                        buff=buff.concat(" ").concat(words[k]);
                    }
                }
            } else { //if it is last line then left justify all the words.
                for (var k = i + 1; k < j; k++) {
                    buff=buff.concat(" ").concat(words[k]);
                }
                buff=this.padSpace(buff, remaining);
            }
            result.push(buff.toString());
            i = j;
        }
        return result;
    };
    GreedyTextJustification.prototype.padSpace = function (buff, count) {
        for (var i = 0; i < count; i++) {
                buff=buff.concat(" ");
        }
        return buff;
    };
    GreedyTextJustification.prototype.fullJustify1 = function (words, maxWidth) {
        var currentLength = 0;
        var prevIndex = 0;
        var result = ([]);
        var _loop_4 = function (i) {
                currentLength += (words[i].length + (i === prevIndex ? 0 : 1));
                if (currentLength > maxWidth) {
                    currentLength -= words[i].length + 1;
                    var builder = { str: "", toString: function () { return this.str; } };
                    var gaps = i - 1 - prevIndex;
                    if (gaps > 0) {
                        var availableSpace = maxWidth - currentLength + gaps;
                        var remaining = availableSpace % gaps;
                        var atleast = (availableSpace / gaps | 0);
                        var _loop_5 = function (j) {
                            {
                                /* concat */ (function (sb) { sb.str = sb.str.concat(words[j]); return sb; })(builder);
                                this_2.padSpace(builder, atleast);
                                if (j - prevIndex < remaining) {
                                    this_2.padSpace(builder, 1);
                                }
                            }
                            ;
                        };
                        for (var j = prevIndex; j <= i - 2; j++) {
                            _loop_5(j);
                        }
                        /* concat */ (function (sb) { sb.str = sb.str.concat(words[i - 1]); return sb; })(builder);
                    }
                    else {
                        /* concat */ (function (sb) { sb.str = sb.str.concat(words[i - 1]); return sb; })(builder);
                        this_2.padSpace(builder, maxWidth - words[i - 1].length);
                    }
                    /* add */ (result.push(/* toString */ builder.str) > 0);
                    prevIndex = i;
                    currentLength = words[i].length;
                }
        };
        var this_2 = this;
        for (var i = 0; i < words.length; i++) {
            _loop_4(i);
        }
        if (prevIndex < words.length) {
            var builder = { str: "", toString: function () { return this.str; } };
            var count = 0;
            while ((prevIndex < words.length)) {
                {
                    /* concat */ (function (sb) { sb.str = sb.str.concat(" "); return sb; })(/* concat */ (function (sb) { sb.str = sb.str.concat(words[prevIndex]); return sb; })(builder));
                    count += words[prevIndex].length + 1;
                    prevIndex++;
                }
            }
            ;
            count--;
            /* deleteCharAt */ (function (sb, index) { sb.str = sb.str.substr(0, index) + sb.str.substr(index + 1); return sb; })(builder, /* length */ builder.str.length - 1);
            this.padSpace(builder, maxWidth - count);
            /* add */ (result.push(/* toString */ builder.str) > 0);
        }
        return result;
    };
    GreedyTextJustification.main = function (args) {
        var input = ["What", "must", "be", "shall", "be."];
        var gtj = new GreedyTextJustification();
        var result = gtj.fullJustify(input, 12);
        console.info(result);
    };
    return GreedyTextJustification;
}());
GreedyTextJustification["__class"] = "GreedyTextJustification";
GreedyTextJustification.main(null);

