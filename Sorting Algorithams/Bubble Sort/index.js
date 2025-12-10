function bubbleSort(nums) {
  const n = nums.length;

  for (let i = n - 1; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      if (nums[j] > nums[j + 1]) {
        let temp = nums[j];
        nums[j] = nums[j + 1];
        nums[j + 1] = temp;
      }
    }
  }

  return nums;
}

const nums = [7, 4, 1, 5, 3];
const result = bubbleSort(nums);
console.log(result);
