function pattern22(n) {
        for(let i=0; i<(2*n-1); i++){
            let row = '';
            for(let j=0; j< 2*n-1; j++){
                let top = i;
                let left = j;
                let bottom = (2*n -2) - i;
                let right = (2*n -2) - j;
                row += (n- Math.min(Math.min(top, bottom), Math.min(right, left))) + " ";
            }
            console.log(row.trim());
        }
    }

pattern22(5)   // You can change the number here