function isPerfect(n) {
        let sum = 0;
        for(let i=1; i<n; i++){
            if(n%i === 0){
                sum += i;
            }
        }

        return sum === n;
    }
 
const result = isPerfect(6); // You can change input here
console.log(result);    