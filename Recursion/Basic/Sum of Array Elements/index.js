 function arraySum(nums) {
        return sum(nums, 0); 
    }

   function sum(arr, left){
        if(left >= arr.length){
            return 0;
        }

        return arr[left] + sum(arr, left+1);
    }

const arr = [2,6,3,7,5]
const result = arraySum(arr);
console.log(result);