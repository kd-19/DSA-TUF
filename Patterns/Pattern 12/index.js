function  pattern12(n) {
        let spaces = 2 * (n - 1);
        for (let i = 1; i <= n; i++) {
            for (let j = 1; j <= i; j++) {
                process.stdout.write(j.toString());
            }
            for (let j = 1; j <= spaces; j++) {
                process.stdout.write(" ");
            }
            for (let j = i; j >= 1; j--) {
                process.stdout.write(j.toString());
            }

            console.log();

            spaces -= 2;
        }
    }

pattern12(5)   // You can change the number here