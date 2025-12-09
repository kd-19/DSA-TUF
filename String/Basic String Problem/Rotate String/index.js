function rotateString(s, goal) {
        if(s.length !== goal.length){
            return false;
        }

        for(let i=0; i<s.length; i++){
            const rotated = s.substring(i) + s.substring(0,i);

            if(rotated === goal){
                return true;
            }
        }

        return false;
    }

const s = "abcde" , goal = "cdeab";
const result =  rotateString(s, goal);
console.log(result);   