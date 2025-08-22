 function checkPrime(num) {
        if(num <= 1){
            return false;
        }

       return isPrime(num, 2)
    }

   function isPrime(num, x){
        if(x > Math.sqrt(num)){
            return true;
        }

        if(num % x === 0){
            return false;
        }

        return isPrime(num, x+1)
    }

const result = checkPrime(7);
console.log(result);