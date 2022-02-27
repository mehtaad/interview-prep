

/**
 * An image is represented by a binary matrix with 0 as a white pixel and 1 as a black pixel.
 * The black pixels are connected, i.e., there is only one black region. Pixels are connected horizontally
 * and vertically. Given the location (x, y) of one of the black pixels, return the area of the smallest
 * (axis-aligned) rectangle that encloses all black pixels.
 * https://leetcode.com/problems/smallest-rectangle-enclosing-black-pixels/
 */
/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
var minArea = function (image, x, y) {
        var m = image.length;
        var n = image[0].length;
        debugger;
        var left = searchColumns(image, 0, y, 0, m - 1, true);
        var right = searchColumns(image, y, n - 1, 0, m - 1, false);
        var top = searchRows(image, 0, x, left, right, true);
        var bottom = searchRows(image, x, m - 1, left, right, false);
        return (right - left + 1) * (bottom - top + 1);
    };
    var searchColumns = function (image, i, j, top, bottom, opt) {
        var result = 0;
        while ((i <= j)) {
                var k = top;
                var mid = ((i + j) / 2 | 0);
                while (k <= bottom && image[k][mid] == '0') {
                        k++;
                }
                if (k !== bottom + 1) {
                    result = mid;
                }
                if ((k === bottom + 1) === opt) {
                    i = mid + 1;
                }
                else {
                    j = mid - 1;
                }
        }
        return result;
    };
    var searchRows = function (image, i, j, left, right, opt) {
        var result = 0;
        while ((i <= j)) {
                var k = left;
                var mid = ((i + j) / 2 | 0);
                while (k <= right && image[mid][k] == '0') {
                        k++;
                }
                if (k !== right + 1) {
                    result = mid;
                }
                if ((k === right + 1) === opt) {
                    i = mid + 1;
                }
                else {
                    j = mid - 1;
                }
        }
        return result;
    };
    var image1 = [['1'], ['1']];
    var image = [['0', '0', '1', '0'], ['0', '1', '1', '0'], ['0', '1', '0', '0']];
    console.info(minArea(image, 0, 2));
    