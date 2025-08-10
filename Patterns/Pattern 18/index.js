function  pattern18(n) {
        for(let i=1; i<=n; i++){

            let row = '';
            let ch = String.fromCharCode('A'.charCodeAt(0) + n-i)
            for(let j=0; j<i; j++, ch = String.fromCharCode(ch.charCodeAt(0) + 1)){
                row += ch + " ";
            }
            console.log(row);
        }
    }

pattern18(5)   // You can change the number here