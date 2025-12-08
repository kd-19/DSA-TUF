function largeOddNum(s) {
        let n;

        for(let i = s.length -1; i >= 0; i--){
            if(s[i] % "2" != 0){
                n = i;
                break;
            }
        }

        let i=0
        while(i<n && s[i] == "0") i++;

        return s.slice(i, n+1);
    }

const str1 = "00504";
const str2 = "270320572";
const result1 =  largeOddNum(str1);
const result2 =  largeOddNum(str2);

console.log(result1);   
console.log(result2);   