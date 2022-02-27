/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
/**
 * Date 03/24/2016
 * @author Tushar Roy
 *
 * A group of two or more people wants to meet and minimize the total travel distance.
 * You are given a 2D grid of values 0 or 1, where each 1 marks the home of someone in the group.
 * The distance is calculated using Manhattan Distance, where distance(p1, p2) = |p2.x - p1.x| + |p2.y - p1.y|.
 * Find the total distance that needs to be travelled to reach this meeting point.
 *
 * Time complexity O(m*n)
 * Space complexity O(m + n)
 *
 * https://leetcode.com/problems/best-meeting-point/
 * @class
 */
var BestMeetingPoint = (function () {
    function BestMeetingPoint() {
    }
    BestMeetingPoint.prototype.minTotalDistance = function (grid) {
        if (grid.length === 0 || grid[0].length === 0) {
            return 0;
        }
        var vertical = ([]);
        var horizontal = ([]);
        for (var i = 0; i < grid.length; i++) {
            {
                for (var j = 0; j < grid[0].length; j++) {
                    {
                        if (grid[i][j] === 1) {
                            /* add */ (vertical.push(i) > 0);
                            /* add */ (horizontal.push(j) > 0);
                        }
                    }
                    ;
                }
            }
            ;
        }
        /*console.log(vertical);
        console.log(horizontal);*/
        vertical.sort();
        horizontal.sort();
        /*console.log(vertical);
        console.log(horizontal);*/
        var size = (vertical.length / 2 | 0);
        var x = vertical[size];
        var y = horizontal[size];
        var distance = 0;
        for (var i = 0; i < grid.length; i++) {
            {
                for (var j = 0; j < grid[0].length; j++) {
                    {
                        if (grid[i][j] === 1) {
                            distance += Math.abs(x - i) + Math.abs(y - j);
                        }
                    }
                    ;
                }
            }
            ;
        }
        return distance;
    };
    BestMeetingPoint.main = function (args) {
        var bmp = new BestMeetingPoint();
        //var grid = [[1, 0, 0, 0, 0], [1, 0, 0, 0, 0], [1, 0, 0, 0, 0]];
        var grid = [[1, 0, 0, 0, 1], [0, 1, 0, 0, 0], [0, 1, 1, 0, 0]];
        //var grid = [[1, 0, 0, 0, 1], [0, 0, 0, 0, 0], [0, 0, 1, 0, 0]];
        console.info(bmp.minTotalDistance(grid));
    };
    return BestMeetingPoint;
}());
BestMeetingPoint["__class"] = "BestMeetingPoint";
BestMeetingPoint.main(null);