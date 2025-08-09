function pattern20(n) {
    upperPattern(n);
    lowerPattern(n);
  }

function upperPattern(n) {
    for (let i = 1; i <= n; i++) {
      let str = '';
      for (let j = 1; j <= i; j++) {
        str += '*';
      }
      for (let j = 1; j <= (2*n - 2*i); j++) {
        str += ' ';
      }
      for (let j = 1; j <= i; j++) {
        str += '*';
      }
      console.log(str);
    }
  }

function lowerPattern(n) {
    for (let i = 1; i < n; i++) {
      let str = '';
      for (let j = 1; j <= n-i; j++) {
        str += '*';
      }
      for (let j = 1; j <= 2*i; j++) {
        str += ' ';
      }
      for (let j = 1; j <= n-i; j++) {
        str += '*';
      }
      console.log(str);
    }
  }

pattern20(5)   // You can change the number here