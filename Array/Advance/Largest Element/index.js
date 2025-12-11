function largestElement(nums) {
  let largest = nums[0];
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > largest) {
      largest = nums[i];
    }
  }

  return largest;
}

const nums = [2, 3, 4, 5, 3];
const result = largestElement(nums);
console.log(result);
