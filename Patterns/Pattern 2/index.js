function pattern2(n){
        for(let i=1; i<=n; i++){
            for(let j=0; j<i; j++){
                process.stdout.write('*');
            }
            console.log();
        }
    }

pattern2(5)    // You can change the number here