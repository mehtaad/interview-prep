package com.interview.array;

/**
 * Date 03/06/2016
 * @author Tushar Roy
 *
 * Find if there exists an increasing triplet subsequence.
 * Similar method to longest increasing subsequence in nlogn time.
 *
 * Time complexity is O(n)
 * Space complexity is O(1)
 *
 * https://leetcode.com/problems/increasing-triplet-subsequence/
 */
public class IncreasingTripletSubsequence {
    public boolean increasingTriplet(int[] nums) {
        int T[] = new int[3];
        int len = 0;
        for (int i = 0; i < nums.length; i++) {
            boolean found = false;
            for (int j = 0; j < len; j++) {
                if (T[j] >= nums[i]) {
                    T[j] = nums[i];
                    found = true;
                    break;
                }
            }
            if (!found) {
                T[len++] = nums[i];
            }
            if (len == 3) {
                return true;
            }
        }
        return false;
    }

    public static void main(String args[]) {
        IncreasingTripletSubsequence tripletSubsequence = new IncreasingTripletSubsequence();
        int input[] = {9, 10, -2, 12, 6, 7, -1};
        System.out.print(tripletSubsequence.increasingTriplet(input));
    }
}


var arr =[9, 10, -2, 12, 6, 7, -1];
var kk = function (arr) {
        debugger;
        
        var count = 0;
        var max=0;//arr[arr.length-1];
        for (var i = arr.length-1; i >=0; i--) {
                if(arr[i]<max){
                    max = arr[i]; 
                    count++;
                    console.log("Max "+max+" count "+count);
                }
                else
                 max = arr[i];
             if(count===3)break;
        }
        
    };
    kk(arr);