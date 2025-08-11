function isArmstrong(n) {
        let digitCount = Math.floor(Math.log10(n)) + 1 
        
        let sum = 0;
        let copy = n;
        while(n>0){
            let lastDigit = n%10;
            sum += Math.pow(lastDigit, digitCount);
            n = Math.floor(n/10);
        }

        return copy === sum;
    }
 
const result = isArmstrong(153); // You can change input here
console.log(result);    