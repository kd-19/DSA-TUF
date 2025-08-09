function pattern11(n) {
    let start = 1;
    for (let i = 0; i < n; i++) {
      if (i % 2 == 0) start = 1;
      else start = 0;

      for (let j = 0; j <= i; j++) {
        process.stdout.write(start+' ');
        start = 1 -start;
      }

      console.log();
    }
  }

pattern11(5)   // You can change the number here