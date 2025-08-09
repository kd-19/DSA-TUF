function factorial(n) {
        if(n===0 || n===1){
            // console.log(1);
            return 1;
        }

        let factorial = n;
        for(let i=1; i<n; i++){
            factorial *= i;
        }
        return factorial;
    }
 
const result = factorial(5); // You can change input here
console.log(result);    