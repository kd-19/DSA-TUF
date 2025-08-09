function  pattern13(n) {
    let m = 1;
    for (let i = 1; i <= n; i++) {
      for (let j = 1; j <= i; j++) {
        process.stdout.write(m.toString()+" ");
        m += 1;
      }
      console.log();
    }
  }

pattern13(5)   // You can change the number here