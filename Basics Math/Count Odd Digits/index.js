function countOddDigit(n) {
        if(n===0){
            return 0;
        }

        let count = 0;
        while(n>0){
            let lastDigit = n%10;
            if(lastDigit % 2 === 1){
                count += 1;
            }
            n = Math.floor(n/10);
        }
        return count;
    }
 
const result = countOddDigit(46317056); // You can change input here
console.log(result);    