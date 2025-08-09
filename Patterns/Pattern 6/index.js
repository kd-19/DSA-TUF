function pattern6(n) {
        for(let i=0; i<n; i++){
            for(let j=0; j<n-i; j++){
                process.stdout.write((j+1).toString());
            }
            console.log();
        }
    }

pattern6(5)    // You can change the number here