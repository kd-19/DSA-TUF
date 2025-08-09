function  pattern19(n) {
        upperPattern(n);
        lowerPattern(n);
    }

   function upperPattern(n){
         for(let i=1; i<=n; i++){
            let str = '';
            for(let j=0; j<=n-i; j++){
                str += '*';
            }
            for(let j=1; j<=(2*i- 2); j++){
                str += ' ';
            }
            for(let j=0; j<=n-i; j++){
                str += '*';
            }
            console.log(str);
        }
    }
    
   function lowerPattern(n){
         for(let i=1; i<=n; i++){
            let str = '';
            for(let j=1; j<=i; j++){
                str += '*';
            }
            for(let j=1; j<=(2*n - 2*i); j++){
                str += ' ';
            }
            for(let j=1; j<=i; j++){
                str += '*';
            }
            console.log(str);
        }
    }

pattern19(5)   // You can change the number here