//find smalles in rotated array
function smallest(arr) {
  console.log(arr);
  if(arr.length > 2) {
    if(arr[0]<arr[arr.length-1]) {
       return arr[0];
    } else {
      //find the mid point
      var mid = Math.floor(arr.length/2);
      if(mid===1) {
        return arr[1]<arr[2]? arr[1]:arr[2];
      }
      if(arr[mid-1] > arr[0]) return smallest(arr.splice(mid, arr.length-mid))
      else  return smallest(arr.splice(0,mid)) 
    } 
  }else{
    if(arr.length===1)return arr[0];
    return arr[0]<arr[1]? arr[0]:arr[1];
  }
}
console.log(smallest([8,1,2,3,4,5,6,7]));
