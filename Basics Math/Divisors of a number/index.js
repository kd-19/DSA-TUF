function divisors(n) {
        let arr = [];
        for(let i=1; i<=n;i++){
            if(n%i === 0){
                arr.push(i);
            }
        }
        return arr;
    }
 
const result = divisors(6); // You can change input here
console.log(result);    