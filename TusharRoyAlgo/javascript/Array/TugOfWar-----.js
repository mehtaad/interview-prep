

/*
 * http://www.geeksforgeeks.org/tug-of-war/
 */
var TugOfWar = (function () {
    function TugOfWar() {
        /*private*/ this.minFoundSoFar = 1000000;
    }
    TugOfWar.prototype.findMind = function (arr) {
        var total = 0;
        for (var i = 0; i < arr.length; i++) {
                total += arr[i];
        }
        var result = ([]);
        this.combinationUtil(arr, (arr.length / 2 | 0), 0, 0, total, 0, result);
        return this.minFoundSoFar;
    };
    TugOfWar.prototype.combinationUtil = function (arr, k, start, sum, total, pos, result) {
        if (pos === k) {
            if (Math.abs(sum - (total / 2 | 0)) < this.minFoundSoFar) {
                this.minFoundSoFar = Math.abs(sum - (total / 2 | 0));
                console.info(result);
            }
            return;
        }
        for (var i = start; i < arr.length; i++) {
                sum += arr[i];
                result.push(arr[i]);
                this.combinationUtil(arr, k, i + 1, sum, total, pos + 1, result);
                /* remove */ result.splice(/* size */ result.length - 1, 1)[0];
                sum -= arr[i];
        }
    };
    TugOfWar.main = function (args) {
        var tow = new TugOfWar();
        var arr = [23, 45, 34, 12, 11, 98, 99, 4, 189, 1, 7, 19, 105, 201];
        var min = tow.findMind(arr);
        console.info(min);
    };
    return TugOfWar;
}());
TugOfWar["__class"] = "TugOfWar";
TugOfWar.main(null);

