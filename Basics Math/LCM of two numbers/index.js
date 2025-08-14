function LCM(n1, n2) {
        const gcd = GCD(n1, n2);

        const lcm = (n1*n2)/gcd;  // Formuls for LCM

        return lcm;
    }

   function GCD(n1, n2){
        while(n1 > 0 && n2> 0){
            if(n1 > n2){
                n1 = n1%n2;
            }
            else{
                n2 = n2%n1;
            }
        }
        if(n1 === 0){
            return n2;
        }else{
            return n1;
        }
    }
 
const result = LCM(4, 12); // You can change input here
console.log(result);    