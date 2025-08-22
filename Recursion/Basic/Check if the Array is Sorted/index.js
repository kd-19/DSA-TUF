 function isSorted(nums) {
        if(nums.length <= 1){
            return true;
        }
        return sorted(nums, 0);
    }

   function sorted(nums, n){
        if(n >= nums.length-1){
            return true;
        }
        if(nums[n] > nums[n+1]){
            return false
        }

        return sorted(nums, n+1);
   
    }

const arr = [1, 2, 3, 4, 5]    
const result = isSorted(arr);
console.log(result);