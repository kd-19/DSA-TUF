function pattern10(n) {
        for(let i=0; i<2*n-1; i++){
            let m = i<n ? i+1 : 2*n -i-1 ;
            for(let j=0; j<m ;j++){
                process.stdout.write('*');
            }
            console.log();
        }
    }

pattern10(5)   // You can change the number here