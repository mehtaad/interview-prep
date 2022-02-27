/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
/**
 * http://www.careercup.com/question?id=6026101998485504
 * This answer two questions.
 * Group elements in size m such that in every group only unique elements are possible.
 * It also answers question where rearrange array such that same elements are exactly m
 * distance from each other
 * @class
 */
var Pair = (function () {
    function Pair(num, count) {
        if (this.num === undefined)
            this.num = 0;
        if (this.count === undefined)
            this.count = 0;
        this.count = count;
        this.num = num;
    }
    return Pair;
}());
Pair["__class"] = "Pair";
var Comparators = (function () {
    function Comparators() {
    }
    /**
     *
     * @param {Pair} o1
     * @param {Pair} o2
     * @return {number}
     */
    Comparators.prototype.compare = function (o1, o2) {
        if (o1.count <= o2.count) {
            return 1;
        }
        else {
            return -1;
        }
    };
    return Comparators;
}());
Comparators["__class"] = "Comparators";
Comparators["__interfaces"] = ["java.util.Comparator"];
var GroupElementsInSizeM = (function () {
    function GroupElementsInSizeM() {
    }
    GroupElementsInSizeM.prototype.group = function (input, m) {
        var count = ({});
        for (var index3215 = 0; index3215 < input.length; index3215++) {
            var i = input[index3215];
            {
                var c = 1;
                if ((function (m, k) { if (m.entries == null)
                    m.entries = []; for (var i_1 = 0; i_1 < m.entries.length; i_1++)
                    if (m.entries[i_1].key.equals != null && m.entries[i_1].key.equals(k) || m.entries[i_1].key === k) {
                        return true;
                    } return false; })(count, i)) {
                    c = (function (m, k) { if (m.entries == null)
                        m.entries = []; for (var i_2 = 0; i_2 < m.entries.length; i_2++)
                        if (m.entries[i_2].key.equals != null && m.entries[i_2].key.equals(k) || m.entries[i_2].key === k) {
                            return m.entries[i_2].value;
                        } return null; })(count, i);
                    c++;
                }
                /* put */ (function (m, k, v) { if (m.entries == null)
                    m.entries = []; for (var i_3 = 0; i_3 < m.entries.length; i_3++)
                    if (m.entries[i_3].key.equals != null && m.entries[i_3].key.equals(k) || m.entries[i_3].key === k) {
                        m.entries[i_3].value = v;
                        return;
                    } m.entries.push({ key: k, value: v, getKey: function () { return this.key; }, getValue: function () { return this.value; } }); })(count, i, c);
            }
        }
        var maxHeap = (new java.util.PriorityQueue(/* size */ (function (m) { if (m.entries == null)
            m.entries = []; return m.entries.length; })(count), function (arg0, arg1) { return new Comparators().compare(arg0, arg1); }));
        {
            var array3217 = (function (m) { var r = []; if (m.entries == null)
                m.entries = []; for (var i = 0; i < m.entries.length; i++)
                r.push(m.entries[i].key); return r; })(count);
            for (var index3216 = 0; index3216 < array3217.length; index3216++) {
                var s = array3217[index3216];
                {
                    var c = (function (m, k) { if (m.entries == null)
                        m.entries = []; for (var i = 0; i < m.entries.length; i++)
                        if (m.entries[i].key.equals != null && m.entries[i].key.equals(k) || m.entries[i].key === k) {
                            return m.entries[i].value;
                        } return null; })(count, s);
                    if (c > Math.ceil(input.length * 1.0 / m)) {
                        return false;
                    }
                    maxHeap.offer(new Pair(s, c));
                }
            }
        }
        var current = 0;
        var start = current;
        while ((maxHeap.size() > 0)) {
            {
                var p = maxHeap.poll();
                var i = 0;
                while ((i < p.count)) {
                    {
                        input[start] = p.num;
                        start = start + m;
                        if (start >= input.length) {
                            current++;
                            start = current;
                        }
                        i++;
                    }
                }
                ;
            }
        }
        ;
        return true;
    };
    GroupElementsInSizeM.main = function (args) {
        var input = [2, 1, 5, 1, 3, 5, 3, 3, 4];
        var input1 = [1, 2, 3, 8, 8, 8, 7, 8];
        var gps = new GroupElementsInSizeM();
        var r = gps.group(input1, 3);
        console.info(r);
        for (var i = 0; i < input1.length; i++) {
            {
                console.info(input1[i]);
            }
            ;
        }
    };
    return GroupElementsInSizeM;
}());
GroupElementsInSizeM["__class"] = "GroupElementsInSizeM";
GroupElementsInSizeM.main(null);
