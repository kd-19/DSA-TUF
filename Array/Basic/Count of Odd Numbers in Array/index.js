function countOdd(arr, n) {
        let count = 0;
        for(let i=0; i<n; i++){
            if(arr[i]%2 !== 0){
                count += 1;
            }
        }
        return count;
    }

const arr = [2,5,3,6,7]
const result = countOdd(arr, 5);
console.log(result);    