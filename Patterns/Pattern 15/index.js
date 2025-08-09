function  pattern15(n) {
        for(let i=0; i<n; i++){

            let row = '';
            for(let j=0, ch = 'A'; j<=(n - i -1); j++, ch = String.fromCharCode(ch.charCodeAt(0) + 1)){
                row += ch;
            }
            console.log(row);
        }
    }

pattern15(5)   // You can change the number here