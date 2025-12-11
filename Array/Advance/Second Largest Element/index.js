function secondLargestElement(nums) {
  const n = nums.length;
  if (n < 2) {
    return -1;
  }

  nums.sort((a, b) => a - b);

  let largest = nums[n - 1];

  for (let i = n - 2; i >= 0; i--) {
    if (nums[i] < largest) {
      return nums[i];
    }
  }

  return -1;
}

const nums = [2, 3, 4, 5, 3];
const result = secondLargestElement(nums);
console.log(result);
