function  pattern14(n) {
        for(let i=1; i<=n; i++){
            let char = 'A';
            for(let j=1; j<=i; j++){
                process.stdout.write(char);
                char = String.fromCharCode(char.charCodeAt(0) + 1);
            }
            console.log();
        }
    }

pattern14(5)   // You can change the number here