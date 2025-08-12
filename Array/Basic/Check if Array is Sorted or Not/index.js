function arraySortedOrNot(arr, n) {
        for(let i=1; i<n; i++){
            if(arr[i-1] > arr[i]){
                return false;
            }
        }
        return true;
    }

const arr = [2,5,5,6,7]
const result = arraySortedOrNot(arr, 5);
console.log(result);    