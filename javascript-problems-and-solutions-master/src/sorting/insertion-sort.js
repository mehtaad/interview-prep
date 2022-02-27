/**
 * Insertion Sort
 */

/**
 * @param {number[]} nums
 */
const insertionSort = nums => {
  for (let i = 0; i < nums.length; i++) {
    const value = nums[i];

    let j;
    for (j = i - 1; j >= 0 && nums[j] > value; j--) {
      nums[j + 1] = nums[j];
    }

    nums[j + 1] = value;
  }
};

export default insertionSort;


const insertSort = (arr)=>{
	for(let i in arr) {
		let val = arr[i];
		let j;
		for(j=i-1; j>=0&&arr[j]>val;j--){
			arr[j+1] =arr[j];
		}
		arr[j+1]=val;
	}
	return arr;
}

insertSort([54, 26, 93, 17, 77, 31, 44, 55, 20]);