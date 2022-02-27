package com.interview.array;

/**
 * References
 * https://leetcode.com/problems/candy/
 */
/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
var candy = function (ratings) {
        var pointOfChange = 0;
        var totalCandies = 1;
        var currentCandy = 1;
        var isIndependent = true;
        var maxHeight = 0;
        var diff = 0;
        var result;
        for (var i = 1; i < ratings.length; i++) {
                diff = 0;
                if (ratings[i] > ratings[i - 1]) {
                    currentCandy += 1;
                }
                else if (ratings[i] === ratings[i - 1]) {
                    isIndependent = true;
                    pointOfChange = i;
                    currentCandy = 1;
                }
                else {//if current rating is less then privious
                    
                    if (currentCandy === 1) {
                        if (!isIndependent) {
                            if (i - pointOfChange === maxHeight - 1) {
                                pointOfChange--;
                            }
                        }
                    }
                    else {
                        maxHeight = currentCandy;
                        currentCandy = 1;
                        isIndependent = false;
                        pointOfChange = i;
                    }
                    diff = i - pointOfChange;
                }
                totalCandies += (diff + currentCandy);
        }
        return totalCandies;
    };
    
   
