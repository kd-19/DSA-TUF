function largestDigit(n) {
        let largest = n%10;
        while(n>0){
            n = Math.floor(n/10);
            if(n%10 > largest){
                largest = n%10;
            }
        }
        return largest;
    }
 
const result = largestDigit(463); // You can change input here
console.log(result);    