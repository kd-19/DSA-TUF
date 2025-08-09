function reverseNumber(n) {
        let reverse = 0;
        while(n>0){
            let lastDigit = n%10;
            reverse = (reverse*10) + lastDigit;
            n = Math.floor(n/10);
        }

        return reverse;
    }
 
const result = reverseNumber(463); // You can change input here
console.log(result);    