function findMaxConsecutiveOnes(nums) {
    let n = nums.length;
    let result = 0;
    let currentCount = 0;

    for (let i = 0; i < n; i++) {
      if (nums[i] === 1) {
        currentCount++;

        result = Math.max(currentCount, result);
      } else {
        currentCount = 0;
      }
    }

    return result;
  }

const nums = [1, 1, 0, 0, 1, 1, 1, 0];
const result = findMaxConsecutiveOnes(nums);
console.log(result);
