 function NnumbersSum(N) {
        if(N===0){
            return 0;
        }

        return N + NnumbersSum(N-1);
    }

const result = NnumbersSum(5);
console.log(result);