function selectionSort(nums) {
  const n = nums.length;
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      if (nums[i] > nums[j]) {
        let temp = nums[i];
        nums[i] = nums[j];
        nums[j] = temp;
      }
    }
  }

  return nums;
}

const nums = [7, 4, 1, 5, 3];
const result = selectionSort(nums);
console.log(result);
