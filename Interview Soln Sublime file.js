var find10 = function(ch) {
  qnum = 0;
  dig = 0;
  var strArray = ch.split("");
  for (var j = 0; j < strArray.length; j++) {
    if (!isNaN(strArray[j])) {
      if ((strArray[j] * 1 + dig * 1) === 10) { //sum is 10 check if 3 '?'
        if (qnum === 3) {
          return "true"; //success
        } else { //no 3 '?', reset
          dig = strArray[j];
          qnum = 0;
        }
      } else { //reset
        dig = strArray[j];
        qnum = 0;
      }
    } else {
      if (strArray[j] === '?') {
        qnum++;
      }
    }
  }
  return "false";
}


var parentheses = function(str) {
  var array = str.split("");
  var arr = [];
  for (var j = 0; j < array.length; j++) {
    var ch = array[j];
    if (ch === '(' || ch === '{' || ch === '[') {
      arr.unshift(ch);
    } else if (ch === ')' || ch === '}' || ch === ']') {
      var check = arr.shift();
      if (!check) return "false extra closing braces in string";
      switch (check) {
        case '[':
          if (ch !== ']')
            return "false no matching ]";
          break;
        case '{':
          if (ch !== '}')
            return "false no matching {";
          break;
        case '(':
          if (ch !== ')')
            return "false no matching )";
          break;
        default:
          break;

      }
    }
  }
  if (arr.length) return "false extra opening braces  in string";
  return "true";
}


//timeout in ES5
for (var i = 0; i < arr.length; i++) {
  // pass in the variable i so that each function 
  // has access to the correct index
  setTimeout(function(i) {
    return function() {
      console.log('The index of this number is: ' + i);
    }
  }(i), 3000);
}


//factoril
var getFactorial = (function() {
  var store = [1,1,2];
  return function getFactoril1(num) {
    if(num<0) return "number should be greater then 0";
    if (store[num]) return store[num];
    
    var result = num * getFactoril1(num - 1);
    store[num] = result;
    //console.log(store);
    return result;
  }

}());

//fib number 
// 0,1,1,2,3,5,8

var getFib = (function() {
  var store = [0,1,1];
  return function fib(n) {
    //console.log("Number is " + n);
    if(n<0) return "number should be greater then 1";
    if (store[n]) return store[n];
    
    var result = n <= 2 ? n : fib(n - 1) + fib(n - 2);;
    store[n] = result;
    //console.log(store);
    return result;
  }

}());


//Find max divide and conqor
(function maxx() {
  var arr = [12, 24, 36, 48, 60, 72, 233, 84, 96, 108, 120, 132, 144];
  var len = arr.length;
  var midlen = Math.floor(len / 2);
  var max = 0;
  if (len % 2) {
    max = arr[midlen];
  } else max = arr[0];
  console.log(len);
  console.log(midlen);
  console.log(max);
  for (var i = 1; i < midlen; i++) {
    if (arr[i] > max) max = arr[i];
    if (arr[--len] > max) max = arr[len];
  }
  return max;
})()
//Find max divide and conqor recursive
(function maxx(arr) {
  debugger;
  var len = arr.length;
  if(len===1) return arr[0];
  if(len ===2) return arr[0] > arr[1]? arr[0]:arr[1];
  var halflen = Math.floor(len / 2);

  var k =maxx(arr.splice(0,halflen))
  var j = maxx(arr);
  return k>j? k : j;
  
})([12, 24, 36, 48, 60, 72, 233, 84, 96, 108, 120, 132, 144])


//Problem Given an array of n integers, return an array of same size such that prod[i] is equal to the product of all the elements of arr[] except arr[i].
function prod(data) {
  var prod = data.reduce(function(total, val) {
    return total * val;
  },1);
  console.log(data.map(function(val, index) {
    return prod / val
  }));
}
prod([1, 2, 3, 4]);

//Find median of 2 sorted array
function median(arr1, arr2) {
  if(arr1.length===0 && arr2.length===0) return 0;
  if(arr1.length>arr2.length){
    let temp=arr2;
    arr2=arr1;
    arr1=temp;
  }
  var len = arr1.length+arr2.length;
  var mid = Math.floor(len/2), mid1=0;
  if(len%2) {//its odd length result array
    mid1=mid;
  } else {//even length array
    mid1= mid-1;
  }
  var result = 0;
  var ind1=0, ind2=0;
  for(var i=0; i<=mid; i++) {
    if(arr1[ind1]<=arr2[ind2]) {
      if(i===mid || i===mid1)
        result=result+arr1[ind1]; 
      ind1++;
    } else {
      if(i===mid || i===mid1)
        result=result+arr2[ind2]; 
      ind2++;
    }
  }
  return mid === mid1?result: result/2;
}
//efficient method to find median
const findMedian = function(nums1,nums2) {
  if(nums1.length===0 && nums2.length===0) {
    return 'one array should have data';
  }
  debugger;
  let length = nums1.length + nums2.length;
  let result=0;
  if(length === 2){
    result = nums1.concat(nums2).reduce(function(T, val){return T+val}, 0);
    result=result/2;  
  } else {
    let eleToFind = Math.floor(length / 2);
    let rem = (nums1.length + nums2.length) % 2;
    let findele=[];
    findele.push(eleToFind);
    //debugger;
    if(rem===0) {   
      findele.unshift(eleToFind-1);
    }
    result=findElementOfSortedArrays(nums1, nums2,findele);
    if(rem===0) result=result/2;
  }
  return result;
}
const findElementOfSortedArrays= (nums1, nums2,findele) => {
  if(nums2.length>nums1.length) {
    let temp = nums1;
    nums1=nums2;
    nums2= temp;
  }
  let eleToFind = findele.shift();
  let result=0;
  let i=0,j=0, count=0;
  let value=0;
  while(count<=eleToFind){
    if(nums1[i]>nums2[j]){
      value=nums2[j];
      j++
    } else {
      value=nums1[i]; 
      i++
    }
    if(count=== eleToFind) {
      result=result+value;
      if(findele.length>0) {
        eleToFind=findele.shift();
      }
    }
    count++;
  }
  return result;
};
findMedian([2,3,5,8,9,10],[]);




// has 2 elements whose sum is equal  to the given value 
function hasArrayTwoCandidates(A, arr_size, sum) 
{ 
    var l, r, map={}; 
    /* Sort the elements decending order*/
    for(var i=0; i<A.length;i++){
      map[A[i]]=i;
      var valToFind = sum-A[i]; 
      if(map[valToFind]) {
        console.log("Index is "+i+ "value is "+A[i]);
        console.log("Index is "+map[valToFind]+ "value is "+valToFind);
      }
    }
    console.log(map);

    //second solution
    A = A.sort(function(a,b){return a-b}); 
    console.log(A);
    /* Now look for the two candidates  
    in the sorted array*/
    l = 0; 
    r = arr_size-1;  
    while (l < r) 
    { 
        if(A[l] + A[r] == sum) {
            console.log("left index is "+l+" value is "+A[l]);
            console.log(" R index is "+r+" value is "+A[r]);
            l++;r--;
              
        }
           
        else if(A[l] + A[r] < sum) 
            l++; 
        else // A[i] + A[j] > sum 
            r--; 
    }  
    return false; 
} 
hasArrayTwoCandidates([1, 24, 45, 6, 10, -8], 6, 16);


//Find the longest non repeating sub-string aabbbcccc return the number of the longest substring
function callMax(s){
    var max = 0;
    var str = '';
    var i = 0;
    var cache = [];
    
    while (i < s.length) {
        if (cache[s[i]]) {
          console.log(cache);
            console.log(str);
            // Found a repeating character.
            if (str.length > max) {
                max = str.length;
            }
            cache = [];
            str="";
        }

        if (i < s.length) {
            str += s[i];
            cache[s[i]] = i + 1;
            i++;
            //console.log(cache);
            //console.log(str);
        }
    }
    
    if (str.length > max) {
        max = str.length;
    }
    
    return max;
}
//Find the longest repeating sub-string aabbbcccc return the number of the longest substring
function callMax(s){
    var max = 0;
    var str = '';
    var i = 0;
    var cache = [];
    var index = 0;
    while (i < s.length) {
        if (!cache[s[i]]) {
            // Found a break in repeating character.
            if (str.length > max) {
                max = str.length;
                index = i-str.length;
                console.log("index is "+index);
            }

            cache = [];
            str="";

        }

        if (i < s.length) {
            str += s[i];
            cache[s[i]] = i + 1;
            i++;
            console.log(cache);
            console.log(str);
        }
    }
    
    if (str.length > max) {
        max = str.length;
        index = i-str.length;
        console.log("index is "+index);
    }
    
    return max;
}



//Given an http log file: find the IP address that occurs most frequently
function findMaxIP() {
  var arr=[
  "10.0.0.1 - http://blah.blah.blah",
  "10.1.2.1 - http://blah.blah.blah",
  "10.0.0.1 - http://blah.blah.blah",
  "10.0.1.1 - http://blah.blah.blah"
  ]

  var map={};
  for(var i=0; i < arr.length;i++){
    var split = arr[i].split(" ");
    map[split[0]]? map[split[0]]++: map[split[0]] = 1;
  }
  console.log(map);
}

//Number of ways to decode a message, string represented as 1 to 26 number
function helper_dp(data, k, memo){
  if(k===0) return 1;
  var s= data.length-k;
  if(data[s]*1===0) return 0;
  if(memo[k]) return memo[k];
  var result = helper_dp(data, k-1, memo);
  if(k>=2 && data.substr(s,2)*1<=26)
    result+=helper_dp(data,k-2, memo);
  memo[k]=result;
  return result;
}
function numWayDP(data ){
  var memo = new Array(data.length+1);
  return helper_dp(data, data.length, memo);
}

//Binary tree sum node = children sum
function sumCheck(node) {
  var sum =0;
  preOrder(node.right, 0);
  preOrder(node.left, 0);

  if(node.data === sum){
    console.log("SUCESS");
  }
  function preOrder(node) {//parent-left-right
    if (!(node == null)) {
      sum=sum+node.data;
      if(node.left) preOrder(node.left);
      if(node.right) preOrder(node.right);
      
    }
    
  }
}
var node = {
  data:26,
  left: {
    data:10,
    left: {
      data:4
    },
    right:{
      data:6
    }
  },
  right: {
    data:3,
    left: {
      data:2
    },
    right:{
      data:1
    } 
  }
}
sumCheck(node);


//Flattening array ES6
function flatArray([x,...xs]){
  return x !== undefined ? [...Array.isArray(x) ? flatArray(x) : [x],...flatArray(xs)]
                         : [];
}

var na = [[1,2],[3,[4,5]],[6,7,[[[8],9]]],10];
    fa = flatArray(na);
console.log(fa);
//Flattening Array ES5
function flatten(ary) {
  return ary.reduce(function(a, b) {
    if (Array.isArray(b)) {
      return a.concat(flatten(b))
    }
    return a.concat(b)
  }, [])
}

//encoding decoding mapping Z-A reversed G oldmen Sach
function createTries() {
  var tries = {};
  
  for(var i=25, char=0;i>=0; i--, char++){
    tries[String.fromCharCode(65+i)] = String.fromCharCode(65+char);
    tries[String.fromCharCode(97+i)] = String.fromCharCode(97+char);
  }
  tries[" "] = " ";
  console.log(tries);
  var str = "Gold Standard Act signed varo US law";
  str="Tlow Hgzmwziw Zxg hrtmvw rmgl FH ozd";
  var x=Array(str.length);
  var y=Array(str.length);
  var offset, key;
  for(var i=0; i<str.length;i++) {
    x[i] = tries[str[i]];
    if(str.charCodeAt(i) > 96) {
      offset=122; key=97;
    } else if(str.charCodeAt(i) > 64) {
      offset=90; key=65;
    } else {
      offset=-64; key=0;
    }
    y[i] = String.fromCharCode((str.charCodeAt(i)-offset)*-1+key);
  }
  console.log(x.join(""));
  console.log(y.join(""));

}
createTries();


//find anagram in given array
function alphabetize(word) {
   if (!word) { return; }

    word = word.split('');
    word = word.sort();
    word = word.join('');
    return word;
}
function anagram(arr) {
  var map={};
  for(var i=0;i<arr.length;i++){
  
    var str = alphabetize(arr[i]);
    if(map[str]){
      console.log("found anagram "+arr[i]+" "+map[str]);   
    } else {
      map[str]=arr[i];
    }
  }
}
anagram(["geeksquiz", "geeksforgeeks", "abcd",
                 "forgeeksgeeks", "zuiqkeegs"]);

//Check if characters of a given string can be rearranged to form a palindrome
function palindrome(word) {
   if (!word) { return; }
    word = word.split('');
    word = word.sort();
    var foundodd=0;
    for(var i=0;i<word.length;i++) {
      if(word[i]!==word[i+1]){
        foundodd++;
        if(foundodd>1) return false;    
      } else {
        i++;
      }
      
    }
    return true;
}
palindrome("geksoogeeks");

//Find Excel column name from a given column number
var ExcelColCharFromNumber = function(n) {
  debugger;
  var str = []; // To store result (Excel column name)
  var i = 0; // To store current index in str which is result
  while (n > 0) {
    // Find remainder
    var rem = n % 26;
    // If remainder is 0, then a 'Z' must be there in output
    if (rem == 0) {
      str.unshift("Z");
      n = Math.floor(n / 26) - 1;
    } // If remainder is non-zero
    else {
      str.unshift(String.fromCharCode(rem - 1 + "A".charCodeAt(0)));
      n = Math.floor(n / 26);
    }
  }
  // Reverse the string and prvar result
  return str.join("");
};
ExcelColCharFromNumber(705);


// Function to find contiguous sub-array with the largest sum
// in given set of varegers (handles negative numbers as well) KADANE'S ALGO
function kadaneNeg(arr) {
  var n = arr.length; 
  var max_so_far = arr[0];
  var max_ending_here = arr[0];
  debugger;
  for (var i = 1; i < n; i++)
  {
    // update maximum sum of sub-array "ending" at index i (by adding
    // current element to maximum sum ending at previous index i-1)
    max_ending_here = max_ending_here + arr[i];

    // maximum sum is should be more than the current element
    max_ending_here = max_ending_here>arr[i]?max_ending_here:arr[i];

    // update result if current sub-array sum is found to be greater
    max_so_far = max_so_far>max_ending_here?max_so_far: max_ending_here;
  }
  console.log("Max So Far  "+max_so_far);
  return max_so_far;
}
//kadaneNeg([-8, -3, -6, -2, -5, -4]);
kadaneNeg([1, 101, 2, 3, 100, 4, 5]);

// sort an array with 0,1 and 2 in a single pass 
// Sort the input array, the array is assumed  
// to have values in {0, 1, 2} 
// Linear-time partition routine to sort an array containing 0, 1 and 2
// It similar to three-way Partitioning for Dutch national flag problem
function threeWayPartition(A, end) {
  var start = 0, mid = 0;
  var pivot = 1;
  function swap(A, i, j) {
    var temp = A[i];
    A[i] = A[j];
    A[j] = temp;
  }
  while (mid <= end)
  {
    if (A[mid] < pivot) {   // current element is 0
      swap(A, start, mid);
      ++start, ++mid;
    }
    else if (A[mid] > pivot){  // current element is 2 
      swap(A, mid, end);
      --end;
    }
    else {  // current element is 1
      ++mid;
    }
  }
  console.log(A);
}
threeWayPartition([0, 1, 2, 2, 1, 0, 0, 2, 0, 1, 1, 0], 11);


//Remove duplicates from sorted array in place     
function removeDuplicates(A, end){
  var start = 0, mid = 1;
  while (mid <= end)
  {
    if(A[mid] > A[start]){
      A[start+1] = A[mid];
      start++; mid++;
    }else {
      mid++;
    }

  }
  A.length = start+1;
  console.log(A);
  console.log(start+1);
}
removeDuplicates([0, 0,0,0,1,1,1,1, 2, 2,2], 10);  


//rearrange odd even number in soretd  array
var rearrange =function(arr){
  let temp=[];
  let yy=[];
  for(let i=arr.length-1; i>=0; i--){
    if(arr[i]%2){
      let y =  arr.splice(i,1);
      yy.unshift(...y);
    }
  }
  yy=yy.concat(arr);
  console.log(yy);
} 


/*Write a function 'validate' that takes an array of strings and a string "pattern", and returns a boolean indicating whether the array matches the pattern.
  Examples:
  validate(['one', 'two', 'one', 'three'], 'xyxz') => true
  validate(['red', 'blue', 'green'], 'abb') => false
  validate(['yellow', 'orange', 'orange'], 'abc') => false
*/
const validate = (arr, pattern)=>  {
  let map={};
  
  for(let i=0;i<pattern.length;i++){
    if(!map[pattern[i]]){
      if(Object.values(map).includes(arr[i]))return false;
      map[pattern[i]]= arr[i];
    } else {
      if(arr[i] !== map[pattern[i]])return false;
    }
    
  }
  return true;
}
validate(['yellow', 'orange', 'orange'], 'abc');
//validate(['one', 'two', 'one', 'three'], 'xyxz');
//validate(['red', 'blue', 'green'], 'abb');



var mList=[
  {
    video:[
    {
      id:1,
      box:[{width:150, height:200, url:'abc.com'},{width:152, height:210, url:'abcd.com'}]
    },
    {
      id:2,
      box:[{width:151, height:200, url:'abc.com'},{width:152, height:210, url:'abcd.com'}]
    }]
  },
  {
    video:[
    {
      id:3,
      box:[{width:150, height:200, url:'abc.com'},{width:155, height:210, url:'abcd.com'}]
    },
    {
      id:4,
      box:[{width:152, height:200, url:'abc.com'},{width:152, height:210, url:'abcd.com'}]
    }]
  }
];

Array.flatten = function() {
  return this.reduce(function(a, b) {
    if (Array.isArray(b)) {
      return a.concat(b.flatten())
    }
    return a.concat(b)
  }, [])
}

mList.map(function(m){
  return m.video.map(function(v){
    return v.box.filter(b=>b.width===150).map(bb=> {
      return {id:v.id,url:bb.url}
    }).contact()
  }).concat()
})