 function reverseString(s) {
        let arr = [];
        reverse(s, s.length-1, arr);
        return arr;
    }

   function reverse(s, n, arr){
        if(n<0){
            return arr;
        }

        arr.push(s[n]);
        reverse(s, n-1, arr);
    }

const s = ["h", "e", "l", "l", "o"]    
const result = reverseString(s);
console.log(result);