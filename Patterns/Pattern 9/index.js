function pattern9(n) {
        eractPyramid(n);
        invertPyramid(n);
    }

function eractPyramid(n){
        for (let i = 0; i < n; i++) {
            let line = "";
            for (let j = 0; j < n-i-1; j++) {
                // process.stdout.write(' ');
                line += " ";
            }
            for (let j = 0; j < 2*i+1 ; j++) {
                // process.stdout.write('*');
                line += "*";
            }
            console.log(line);
        }
    }

function invertPyramid(n){
        
        for (let i = 0; i < n; i++) {
            let line = "";
            for (let j = 0; j < i; j++) {
                // process.stdout.write(' ');
                line += " ";
            }
            for (let j = 0; j < 2*n - (2*i+1) ; j++) {
                // process.stdout.write('*');
                line += "*";
            }
            console.log(line);
        }
    }

pattern9(5)   // You can change the number here