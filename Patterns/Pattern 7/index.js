function pattern7(n) {
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n-i-1; j++) {
        process.stdout.write(' ');
      }
      for (let k = 0; k < 2*i+1; k++) {
        process.stdout.write('*');
      }

      console.log();
    }
  }

pattern7(5)   // You can change the number here