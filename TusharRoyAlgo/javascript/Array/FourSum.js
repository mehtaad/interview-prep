
/**
 * Date 07/31/2016
 * @author Tushar Roy
 *
 * Given an array S of n integers, are there elements a, b, c, and d in S such that a + b + c + d = target?
 * Find all unique quadruplets in the array which gives the sum of target.
 *
 * Time complexity O(n^3)
 * Space complexity O(1)
 *
 * Reference
 * https://leetcode.com/problems/4sum/
 */
/*public class FourSum {

    public List<List<var eger>> fourSum(var [] nums, var  target) {
        if (nums.length < 4) {
            return Collections.EMPTY_LIST;
        }
        Arrays.sort(nums);
        List<List<var eger>> result = new ArrayList<>();
        for (var  i = 0; i < nums.length - 3; i++) {
            if (i != 0 && nums[i] == nums[i - 1]) {
                continue;
            }
            if(nums[i] + nums[i+1] + nums[i+2] + nums[i+3] > target) {
                break;
            }
            if(nums[i] + nums[nums.length - 3] + nums[nums.length - 2] + nums[nums.length - 1] < target) {
                continue;
            }
            for (var  j = i + 1; j < nums.length - 2; j++) {
                if (j != i + 1 && nums[j] == nums[j - 1]) {
                    continue;
                }
                if (nums[i] + nums[j] + nums[j + 1] + nums[j + 2] > target) {
                    break;
                }
                if (nums[i] + nums[j] + nums[nums.length - 1] + nums[nums.length - 1] < target) {
                    continue;
                }
                var  low = j + 1;
                var  high = nums.length - 1;
                while (low < high) {
                    if (low != j + 1 && nums[low] == nums[low - 1]) {
                        low++;
                        continue;
                    }
                    if (high != nums.length - 1 && nums[high] == nums[high + 1]) {
                        high--;
                        continue;
                    }

                    var  sum = nums[i] + nums[j] + nums[low] + nums[high];
                    if (sum == target) {
                        List<var eger> r = new ArrayList<>();
                        r.add(nums[i]);
                        r.add(nums[j]);
                        r.add(nums[low]);
                        r.add(nums[high]);
                        result.add(r);
                        low++;
                        high--;
                    } else if (sum < target) {
                        low++;
                    } else {
                        high--;
                    }
                }
            }
        }
        return result;
    }

    public static void main(String args[]) {
        var [] nums = {1, 1, 4, 5, 9, 11};
        var [] nums1 = {1, 0, -1, 0, -2, 2};
        var  target = 0;
        FourSum fourSum = new FourSum();
        List<List<var eger>> result = fourSum.fourSum(nums1, target);
        result.forEach(System.out::prvar );
    }
}*/





  
// function to check if there exist four 
// elements whose sum is equal to k 
var unique = function (newF, result) {
        var map={};
        var uni=false;
        //craete map of in array and check if it is present in any of result array
        if(result.length===0) return true;
        for(var i=0; i<newF.length;i++){
            map[newF[i]]={count:1};
            
        }
        for(var i=0; i<result.length;i++){
            var check = result[i];
            for(var j =0; j< check.length; j++){
                if(map[check[j]])return false;
            }
        }
        return true;
    }
var findfour= function(arr, n, k) { 
    // map to store sum and indexes for 
    // a pair sum 
    var hash={}; 
    var result=[];
    
    for (var  i = 0; i < n; i++) { 
        for (var  j = i + 1; j < n; j++) { 
  
            // calculate the sum of each pair 
            var  sum = arr[i] + arr[j]; 
  
            // if k-sum exist in map 
            if (hash[k - sum]) { 
                var found = hash[k - sum];
                if(found.index1 !== i && found.index1 !== j && found.index2 !== i && found.index2 !== j){
                   
                    var newF = [found.index1, found.index2, i, j];
                    if(unique(newF, result)){
                        result.push(newF);    
                        hash[sum]={};
                        hash[sum].index1=i;
                        hash[sum].index2=j; 
                        console.log("FOUND UNIQUE "+found.index1 +" "+ found.index2+" "  + i +" " +j);
                    }  
                    
                    //check if result are unique
                    
                    console.log(found.index1 +" "+ found.index2+" "  + i +" " +j);
                }

            } else {
  
            // store the sum and index pair in hashmap 
                hash[sum]={};
                hash[sum].index1=i;
                hash[sum].index2=j;
            }
            
        
        }
    } 
    console.log(JSON.stringify(result));
    return true; 
} 
  
// Driver code 
 var  k = 0; 
    var  arr = [1, 0, -1, 0, -2, 2,-4,4,-3,3 ]; 
    var  n = arr.length; 
    if (findfour(arr, n, k)) 
        console.log("yes");
    else
        console.log("no");
   
