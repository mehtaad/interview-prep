
/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
/**
 * Date 04/06/2016
 * @author Tushar Roy
 *
 * Design an algorithm to encode a list of strings to a string. The encoded string is then sent over the network
 * and is decoded back to the original list of strings.
 *
 * Reference
 * https://leetcode.com/problems/encode-and-decode-strings/
 * @class
 */
var encode = function (strs) {
        var buff = { str: "", toString: function () { return str; } };
        var _loop_1 = function (index3756) {
            var str = strs[index3756];
            {
                var size_1 = toFixedLength(str.length);
                /* append */ (function (sb) { sb.str = sb.str.concat(size_1); return sb; })(buff);
                /* append */ (function (sb) { sb.str = sb.str.concat(str); return sb; })(buff);
            }
        };
      
        for (var index3756 = 0; index3756 < strs.length; index3756++) {
            _loop_1(index3756);
        }
        return buff.str;
    };
    var toFixedLength = function (len) {
        var buff = { str: "", toString: function () { return this.str; } };
        var _loop_2 = function (i) {
            {
                var b1_1 = String.fromCharCode(len);
                /* append */ (function (sb) { sb.str = sb.str.concat(b1_1); return sb; })(buff);
                len = len >> 8;
            }
            ;
        };
        for (var i = 0; i < 4; i++) {
            _loop_2(i);
        }
        return buff.str;
    };
    var toSize = function (str) {
        var val = 0;
        for (var i = str.length - 1; i > 0; i--) {
                val += (str.charAt(i)).charCodeAt(0);
                val = val << 8;
        }
        val += (str.charAt(0)).charCodeAt(0);
        return val;
    };
    var decode = function (s) {
        var result = ([]);
        while ((s.length !== 0)) {
                var size = toSize(s.substring(0, 4));
                result.push(s.substring(4, size + 4));
                s = s.substring(size + 4);
        }
        return result;
    };
    console.log(encode(["Ashok Mehta", "Ratan M"]));