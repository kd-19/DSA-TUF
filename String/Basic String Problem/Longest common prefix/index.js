function longestCommonPrefix(str) {
         if (str.length === 0) return "";
        let prefix = '';

        const sorted = str.sort();

        const first = str[0];
        const last = str[str.length - 1];

        for(let i=0; i<Math.min(first.length, last.length); i++){
            if(first[i] !== last[i]){
                return prefix;
            }

            prefix += first[i];
        }

        return prefix;
    }

const str = ["flowers" , "flow" , "fly", "flight" ];
const result =  longestCommonPrefix(str);
console.log(result);   