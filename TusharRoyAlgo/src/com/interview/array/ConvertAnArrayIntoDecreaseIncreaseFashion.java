package com.interview.array;

import java.util.Arrays;


/**
 * Convert an unsorted array into an array such that
 * a < b > c < d > e < f and so on
 */
public class ConvertAnArrayIntoDecreaseIncreaseFashion {

    
    
    /**
     * Sort the array first.
     * Then swap every adjacent element to get final result
     * @param arr
     */
    public void convert1(int arr[]){
        Arrays.sort(arr);
        for(int i=1; i < arr.length; i+=2){
            if(i+1 < arr.length){
                swap(arr, i, i+1);
            }
        }
    }
    
    private void swap(int arr[],int low,int high){
        int temp = arr[low];
        arr[low] = arr[high];
        arr[high] = temp;
    }
    
    public static void main(String args[]){
        ConvertAnArrayIntoDecreaseIncreaseFashion can = new ConvertAnArrayIntoDecreaseIncreaseFashion();
        int arr[] = {0,6,9,13,10,-1,8,2,4,14,-5};
        //int arr1[] = {0,6,9,13,10,-1,8,2,4,14,-5};
        can.convert(arr);
        for(int i=0; i < arr.length; i++){
            System.out.print(arr[i] + " ");
        }
        System.out.println();
        
        
    }

}
