function reverse(arr, n) {
        let reverseArray = [];
        for(let i=n-1; i>=0; i--){
            reverseArray.push(arr[i]);
        }

        for(let i=0; i<n; i++){
            arr[i] = reverseArray[i];
        }
        return arr;
    }

const arr = [2,5,3,6,7]
const result = reverse(arr, 5);
console.log(result);    