 function reverseArray(nums) {
        let arr = [];
        reverse(nums, nums.length-1, arr);
        return arr;
    }

   function reverse(nums, n, arr){
        if(n < 0){
            return arr;
        }
        arr.push(nums[n]);
        reverse(nums, n-1, arr);
    }

const arr = [1, 3, 3, 3, 5]    
const result = reverseArray(arr);
console.log(result);