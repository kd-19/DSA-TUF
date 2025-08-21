 function alindromeCheck(s) {
        const reversed = palindrome(s, s.length -1, '')
        return reversed === s;
    }

   function palindrome(s, n, revStr){
        if(n < 0){
            return revStr;
        }

        revStr += s[n];
        return palindrome(s, n-1, revStr);
    }

const s = "hannah"    
const result = alindromeCheck(s);
console.log(result);