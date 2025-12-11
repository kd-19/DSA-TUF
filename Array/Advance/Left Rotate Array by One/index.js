function rotateArrayByOne(nums) {
  const n = nums.length;
  const temp = nums[0];

  for (let i = 1; i < n; i++) {
    nums[i - 1] = nums[i];
  }

  nums[n - 1] = temp;

  return nums
}

const nums = [2, 3, 4, 5, 3];
const result = rotateArrayByOne(nums);
console.log(result);
