 function addDigits(num) {
        if(num < 10){
            return num;
        }

        let s =  sum(num);
        return addDigits(s);
    }

   function sum(num){
        if(num === 0){
            return 0;
        }

      return sum(Math.floor(num/10)) + (num%10);
    }

const result = addDigits(111);
console.log(result);