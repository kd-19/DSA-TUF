function countDigit(n) {
        if(n===0){
            return 1;
        }

        let count = 0;
        while(n>0){
            count += 1;
            n = Math.floor(n/10);
        }
        return count;
    }
 
const result = countDigit(46056);  // You can change input here
console.log(result);    