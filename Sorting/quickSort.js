//Quick Sort
function quick_Sort(origArray) {
  if (origArray.length <= 1) { 
    return origArray;
  } else {

    var left = [];
    var right = [];
    var newArray = [];
    var pivot = origArray.pop();
    var length = origArray.length;
    console.log("pivot "+pivot);
    for (var i = 0; i < length; i++) {
      if (origArray[i] <= pivot) {
        left.push(origArray[i]);
      } else {
        right.push(origArray[i]);
      }
    }
    console.log(left);
    console.log(right);
    
    var yy = newArray.concat(quick_Sort(left), pivot, quick_Sort(right));
    console.log("Result is "+yy);
    return yy;
  }
}

var myArray = [54, 26, 93, 17, 77, 31, 44, 55, 20];

console.log("Original array: " + myArray);
var sortedArray = quick_Sort(myArray);
console.log("Sorted array: " + sortedArray);