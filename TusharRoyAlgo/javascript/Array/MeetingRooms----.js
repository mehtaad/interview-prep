/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
/**
 * Date 05/01/2016
 * @author Tushar Roy
 *
 * Given an array of meeting time intervals consisting of start and end times 
 [[s1,e1],[s2,e2],...] (si < ei),
 * find the minimum number of conference rooms required.
 *
 * Both methods have time comlexity of nlogn
 * Method 1 has space complexity of O(1)
 *
 * https://leetcode.com/problems/meeting-rooms-ii/
 * @class
 */


var MeetingRooms = (function () {
    function MeetingRooms() {
    }
    MeetingRooms.prototype.minMeetingRooms1 = function (intervals) {
        var start = new Array(intervals.length).fill(0);
        var end = new Array(intervals.length).fill(0);
        for (var i = 0; i < intervals.length; i++) {
            {
                start[i] = intervals[i].start;
                end[i] = intervals[i].end;
            }
            ;
        }
        /* sort */ (function (l) { l.sort(); })(start);
        /* sort */ (function (l) { l.sort(); })(end);
        var j = 0;
        var rooms = 0;
        for (var i = 0; i < start.length; i++) {
            {
                if (start[i] < end[j]) {
                    rooms++;
                }
                else {
                    j++;
                }
            }
            ;
        }
        return rooms;
    };
    MeetingRooms.prototype.minMeetingRooms = function (intervals) {
        if (intervals.length === 0) {
            return 0;
        }
        /* sort */ (function (l, c) { if (c.compare)
            l.sort(function (e1, e2) { return c.compare(e1, e2); });
        else
            l.sort(c); })(intervals, function (a, b) { return a.start - b.start; });
        var pq = (new java.util.PriorityQueue(function (a, b) { return a.end - b.end; }));
        pq.offer(intervals[0]);
        var rooms = 1;
        for (var i = 1; i < intervals.length; i++) {
            {
                var it = pq.poll();
                if (it.end <= intervals[i].start) {
                    it = new MeetingRooms.Interval(it.start, intervals[i].end);
                }
                else {
                    rooms++;
                    pq.offer(intervals[i]);
                }
                pq.offer(it);
            }
            ;
        }
        return rooms;
    };
    return MeetingRooms;
}());
MeetingRooms["__class"] = "MeetingRooms";
(function (MeetingRooms) {
    var Interval = (function () {
        function Interval(s, e) {
            var _this = this;
            if (((typeof s === 'number') || s === null) && ((typeof e === 'number') || e === null)) {
                var __args = arguments;
                if (this.start === undefined)
                    this.start = 0;
                if (this.end === undefined)
                    this.end = 0;
                if (this.start === undefined)
                    this.start = 0;
                if (this.end === undefined)
                    this.end = 0;
                (function () {
                    _this.start = s;
                    _this.end = e;
                })();
            }
            else if (s === undefined && e === undefined) {
                var __args = arguments;
                if (this.start === undefined)
                    this.start = 0;
                if (this.end === undefined)
                    this.end = 0;
                if (this.start === undefined)
                    this.start = 0;
                if (this.end === undefined)
                    this.end = 0;
                (function () {
                    _this.start = 0;
                    _this.end = 0;
                })();
            }
            else
                throw new Error('invalid overload');
        }
        return Interval;
    }());
    MeetingRooms.Interval = Interval;
    Interval["__class"] = "MeetingRooms.Interval";
})(MeetingRooms || (MeetingRooms = {}));
