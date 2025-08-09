function pattern5(n) {
        for(let i=0; i<n; i++){
            for(let j=n; j>i; j--){
                process.stdout.write('*');
            }
            console.log();
        }
    }

pattern5(5)    // You can change the number here