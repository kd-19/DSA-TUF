function  pattern16(n) {
        for(let i=0; i<n; i++){

            let row = '';
            let ch = String.fromCharCode('A'.charCodeAt(0) + i)
            for(let j=0; j<=i; j++){
                row += ch;
            }
            console.log(row);
        }
    }

pattern16(5)   // You can change the number here