function primeUptoN(n) {
        let count = 0;
        for(let i=2; i<=n; i++){
            if(isPrime(i)){
                count++;
            }
        }
        return count;
    }

function isPrime(n){
        for(let i=2; i<n; i++){
            if(n%i === 0){
                return false;
            }
        }
        return true;
    }
 
const result = primeUptoN(7); // You can change input here
console.log(result);    