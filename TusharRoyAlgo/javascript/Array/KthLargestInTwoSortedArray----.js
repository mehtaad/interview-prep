/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
/**
 * http://stackoverflow.com/questions/4686823/given-2-sorted-arrays-of-integers-find-the-nth-largest-number-in-sublinear-time
 * http://articles.leetcode.com/2011/01/find-k-th-smallest-element-in-union-of.html
 * @class
 */
var kthLargest = function (arr1, arr2, low1, high1, low2, high2, k) {
    var len1 = high1 - low1 + 1;
    var len2 = high2 - low2 + 1;
    if (len1 === 0) {
        return arr2[low2 + k];
    }
    if (len2 === 0) {
        return arr1[low1 + k];
    }
    if (k === 0) {
        return Math.min(arr1[low1], arr2[low2]);
    }
    if((high1 - low1 ) + (high2 - low2 )+1 === k) {
     return Math.max(arr1[high1], arr2[high2]);   
    }
    var mid1 = (len1 * k / (len1 + len2) | 0);
    var mid2 = k - mid1 - 1;
    mid1 = low1 + mid1;
    mid2 = low2 + mid2;
    if (arr1[mid1] > arr2[mid2]) {
        k = k - mid2 + low2 - 1;
        high1 = mid1;
        low2 = mid2 + 1;
    }
    else {
        k = k - mid1 + low1 - 1;
        high2 = mid2;
        low1 = mid1 + 1;
    }
    return kthLargest(arr1, arr2, low1, high1, low2, high2, k);
};

/*WRONG RESULTS var kthLargest1 = function (input1, input2, lowArr1, highArr1, lowArr2, highArr2, k) {
    if (lowArr1 > highArr1) {
        return input2[k - 1];
    }
    if (lowArr2 > highArr2) {
        return input1[k - 1];
    }
    if ((highArr1 - lowArr1 + 1) + (highArr2 - lowArr2 + 1) === k) {
        return Math.max(input1[highArr1], input2[highArr2]);
    }
    if (k === 1) {
        return Math.min(input1[lowArr1], input2[lowArr2]);
    }
    if (lowArr2 === highArr2 || lowArr1 === highArr1) {
        
        if (lowArr2 === highArr2) {
            if (input1[lowArr1 + k - 1] < input2[lowArr2]) {
                return input1[lowArr1 + k - 1];
            }
            else if (input1[lowArr1 + k - 2] > input2[lowArr2]) {
                return input1[lowArr1 + k - 2];
            }
            else {
                return input2[lowArr2];
            }
        }
        if (lowArr1 === highArr1) {
            if (input2[lowArr2 + k - 1] < input1[lowArr1]) {
                return input2[lowArr2 + k - 1];
            }
            else if (input2[lowArr2 + k - 2] > input1[lowArr1]) {
                return input2[lowArr2 + k - 2];
            }
            else {
                return input1[lowArr1];
            }
        }
    }
    //debugger;
    var midArr1 = ((highArr1 + lowArr1) / 2 | 0);
    var midArr2 = ((highArr2 + lowArr2) / 2 | 0);
    var diff1 = midArr1 - lowArr1 + 1;
    var diff2 = midArr2 - lowArr2 + 1;
    if (diff1 + diff2 >= k) {//k lies after/at sum of 2 mid point 
        if (input1[midArr1] < input2[midArr2]) {
            return kthLargest(input1, input2, lowArr1, highArr1, lowArr2, midArr2, k);
        }
        else {
            return kthLargest(input1, input2, lowArr1, midArr1, lowArr2, highArr2, k);
        }
    }
    else {
        if (input1[midArr1] < input2[midArr2]) {
            return kthLargest(input1, input2, midArr1 + 1, highArr1, lowArr2, highArr2, k - diff1);
        }
        else {
            return kthLargest(input1, input2, lowArr1, highArr1, midArr2 + 1, highArr2, k - diff2);
        }
    }
};*/


var input1 = [1, 4, 7, 11, 17, 21];
var input2 = [-4, -1, 3, 4, 6, 28, 35, 41, 56, 70];

    //input1 = [2, 3, 6, 7, 9]; 
    //input2 = [1, 4, 8, 10]; 
for (var i = 0; i < input1.length + input2.length; i++) {
        console.info(kthLargest(input1, input2, 0, input1.length - 1, 0, input2.length - 1, i));
        //console.info(kthLargest1(input1, input2, 0, input1.length - 1, 0, input2.length - 1, i+1));
        
};
    
