//Buble
function bubble_Sort(arr){

    var len = arr.length,
        i, j, stop;

    for (i=0; i < len; i++){
        for (j=0, j < len; j++){
            if (arr[j] > arr[j+1]){
              swap=true;
              var k = arr[j];
              arr[j]= arr[j+1];
              arr[j+1] = k;
            }

        }
        if(!swap) break;
    }

    return arr;
}
console.log(bubble_Sort([3, 0, 2, 5, -1, 4, 1]));
//Insertion sort
function insertionSort (items) {
  for (var i = 0; i < items.length; i++) {
    let value = items[i]
    // store the current item value so it can be placed right
    for (var j = i - 1; j > -1 && items[j] > value; j--) {
      // loop through the items in the sorted array (the items from the current to the beginning)
      // copy each item to the next one
      items[j + 1] = items[j]
      console.log("J is "+j+" "+items);
    }
    // the last item we've reached should now hold the value of the currently sorted item
    items[j + 1] = value
    console.log("i is "+i+" "+items);
  }

  return list
}
const list = [54, 26, 93, 17, 77, 31, 44, 55, 20]
console.log(insertionSort(list)) // [ 17, 20, 26, 31, 44, 54, 55, 77, 93 ]

//Selection Sort
function selectionSort(array) {
  for(var i = 0; i < array.length; i++) {
    var min = i;
    for(var j = i + 1; j < array.length; j++) {
      if(array[j] < array[min]) {
        min = j;
      }
    }
    if(i !== min) {
      swap(array, i, min);
    }
  }
  return array;
}
// swap function helper
function swap(array, i, j) {
  var temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}
console.log(selectionSort([54, 26, 93, 17, 77, 31, 44, 55, 20])); // => [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]


