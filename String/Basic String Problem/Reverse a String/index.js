function reverseString(s) {
        let reverse = [];
        const n = s.length;
        for(let i=n-1; i>=0; i--){
            reverse.push(s[i]);
        }

        for(let i=0; i<n; i++){
            s[i] = reverse[i];
        }

        return s;
    }
const s = ['h', 'e', 'l', 'l', 'o'];
const result =  reverseString(s);
console.log(result);   