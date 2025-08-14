function GCD(n1, n2) {
        let gcd = 1;
        for(let i=2; i<=Math.min(n1, n2); i++){  
            /* in this if we run loop in reverse then break the if condition where we get i which divide both n1 && n2. It can be more optimal solution for this.*/
            if(n1%i === 0 && n2%i=== 0){
                gcd = i;
            }
        }
        return gcd;
    }
 
const result = GCD(45,20); // You can change input here
console.log(result);    