function sum(arr,n) {
     let sum = 0;
     for(let i=0; i<n; i++){
        sum += arr[i];
     }
     return sum;
    }

const arr = [2,5,3,6,7]
const result = sum(arr, 5);
console.log(result);    