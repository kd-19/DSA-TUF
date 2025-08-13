function GCD(n1, n2) {
        let gcd = 1;
        for(let i=2; i<=Math.min(n1, n2); i++){
            if(n1%i === 0 && n2%i=== 0){
                gcd = i;
            }
        }
        return gcd;
    }
 
const result = GCD(45,20); // You can change input here
console.log(result);    