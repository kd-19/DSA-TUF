function palindromeCheck(s) {
        let left = 0;
        let right = s.length - 1;

        while(left < right){
            if(s[left] !== s[right]){
                return false;
            }
            left++;
            right--;
        }
        return true;
    }
const s = 'hannah';
const result =  palindromeCheck(s);
console.log(result);   