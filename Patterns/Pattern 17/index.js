function pattern17(n) {
        for(let i=0; i<n; i++){
            let mid = Math.floor((2*i+1)/2);
            let ch = 'A'
            for(let j=0; j<n-i-1; j++){
                process.stdout.write(" ");
            }
            for(let j=1; j<=2*i+1; j++){
                process.stdout.write(ch);
                if(j<= mid){
                    ch = String.fromCharCode(ch.charCodeAt(0)+1);
                }else{
                    ch = String.fromCharCode(ch.charCodeAt(0)-1);
                }
            }

            console.log();
        }
    }

pattern17(5)   // You can change the number here