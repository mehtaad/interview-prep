/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
/**
 * Given a list of lists. Each element in the list is sorted. Sort the
 * entire list.
 * Test cases
 * One or more lists are empty
 * All elements in one list are smaller than all elements in another list
 * @class
 */
var ChunkMerge = (function () {
    function ChunkMerge() {
    }
    ChunkMerge.prototype.mergeUsingHeap = function (chunks) {
        var result = ([]);
        var queue = (new java.util.PriorityQueue());
        for (var i = 0; i < chunks.length; i++) {
            {
                var p = new ChunkMerge.Triplet(this);
                p.pos = i;
                p.val = chunks[i][0];
                p.index = 1;
                queue.add(p);
            }
            ;
        }
        while ((!queue.isEmpty())) {
            {
                var p = queue.poll();
                /* add */ (result.push(p.val) > 0);
                if (p.index < chunks[p.pos].length) {
                    p.val = chunks[p.pos][p.index];
                    p.index += 1;
                    queue.add(p);
                }
            }
        }
        ;
        return result;
    };
    ChunkMerge.prototype.mergeChunksOfDifferentSize = function (chunks) {
        var result = ([]);
        var sum = (function (s) { var a = []; while (s-- > 0)
            a.push(0); return a; })(/* size */ chunks.length + 1);
        sum[0] = 0;
        for (var i = 1; i < sum.length; i++) {
            {
                sum[i] = sum[i - 1] + chunks[i - 1].length;
            }
            ;
        }
        for (var index3167 = 0; index3167 < chunks.length; index3167++) {
            var chunk = chunks[index3167];
            {
                for (var index3168 = 0; index3168 < chunk.length; index3168++) {
                    var i = chunk[index3168];
                    {
                        /* add */ (result.push(i) > 0);
                    }
                }
            }
        }
        this.mergeSort(result, 0, /* size */ chunks.length - 1, sum);
        return result;
    };
    ChunkMerge.prototype.mergeSort = function (result, start, end, sum) {
        if (start >= end) {
            return;
        }
        var mid = ((start + end) / 2 | 0);
        this.mergeSort(result, start, mid, sum);
        this.mergeSort(result, mid + 1, end, sum);
        this.sortedMerge(result, start, end, sum);
    };
    ChunkMerge.prototype.sortedMerge = function (result, start, end, sum) {
        var mid = ((start + end) / 2 | 0);
        var i = sum[start];
        var j = sum[mid + 1];
        var temp = ([]);
        while ((i < sum[mid + 1] && j < sum[end + 1])) {
            {
                if (result[i] < result[j]) {
                    /* add */ (temp.push(/* get */ result[i]) > 0);
                    i++;
                }
                else {
                    /* add */ (temp.push(/* get */ result[j]) > 0);
                    j++;
                }
            }
        }
        ;
        while ((i < sum[mid + 1])) {
            {
                /* add */ (temp.push(/* get */ result[i]) > 0);
                i++;
            }
        }
        ;
        while ((j < sum[end + 1])) {
            {
                /* add */ (temp.push(/* get */ result[j]) > 0);
                j++;
            }
        }
        ;
        var index = sum[start];
        for (var index3169 = 0; index3169 < temp.length; index3169++) {
            var k = temp[index3169];
            {
                /* set */ (result[index] = k);
                index++;
            }
        }
    };
    ChunkMerge.main = function (args) {
        var arr1 = [1, 5, 6, 9, 21];
        var arr2 = [4, 6, 11, 14];
        var arr3 = [-1, 0, 7];
        var arr4 = [-4, -2, 11, 14, 18];
        var arr5 = [2, 6];
        var arr6 = [-5, -2, 1, 5, 7, 11, 14];
        var arr7 = [-6, -1, 0, 15, 17, 22, 24];
        var list1 = arr1.slice(0);
        var list2 = arr2.slice(0);
        var list3 = arr3.slice(0);
        var list4 = arr4.slice(0);
        var list5 = arr5.slice(0);
        var list6 = arr6.slice(0);
        var list7 = arr7.slice(0);
        var chunks = ([]);
        /* add */ (chunks.push(list1) > 0);
        /* add */ (chunks.push(list2) > 0);
        /* add */ (chunks.push(list3) > 0);
        /* add */ (chunks.push(list4) > 0);
        /* add */ (chunks.push(list5) > 0);
        /* add */ (chunks.push(list6) > 0);
        /* add */ (chunks.push(list7) > 0);
        var cm = new ChunkMerge();
        debugger;
        var result = cm.mergeChunksOfDifferentSize(chunks);
        console.info(/* size */ result.length);
        for (var index3170 = 0; index3170 < result.length; index3170++) {
            var r = result[index3170];
            {
                console.info(r + " ");
            }
        }
        /*result = cm.mergeUsingHeap(chunks);
        console.info();
        for (var index3171 = 0; index3171 < result.length; index3171++) {
            var r = result[index3171];
            {
                console.info(r + " ");
            }
        }*/
    };
    return ChunkMerge;
}());
ChunkMerge["__class"] = "ChunkMerge";
(function (ChunkMerge) {
    var Triplet = (function () {
        function Triplet(__parent) {
            this.__parent = __parent;
            if (this.pos === undefined)
                this.pos = 0;
            if (this.val === undefined)
                this.val = 0;
            if (this.index === undefined)
                this.index = 0;
        }
        /**
         *
         * @param {ChunkMerge.Triplet} o
         * @return {number}
         */
        Triplet.prototype.compareTo = function (o) {
            if (this.val <= o.val) {
                return -1;
            }
            else {
                return 1;
            }
        };
        return Triplet;
    }());
    ChunkMerge.Triplet = Triplet;
    Triplet["__class"] = "ChunkMerge.Triplet";
    Triplet["__interfaces"] = ["java.lang.Comparable"];
})(ChunkMerge || (ChunkMerge = {}));
ChunkMerge.main(null);