function  anagramStrings(s, t) {
        if(s.length !== t.length){
            return false;
        }

        return s.split('').sort().join('') === t.split('').sort().join('');


    }

const s = "anagram" , t = "nagaram"
const result =  anagramStrings(s, t);
console.log(result);   