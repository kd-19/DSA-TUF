function pattern4(n) {
        for(let i=1; i<=n; i++){
            for(let j=0; j<i; j++){
                process.stdout.write(i.toString());
            }
            console.log();
        }
    }

pattern4(5)    // You can change the number here