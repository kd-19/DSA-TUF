function isomorphicString(s, t) {
        if(s.length != t.length){
            return false;
        }

    let m1 = Array(256).fill(0);
    let m2 = Array(256).fill(0);

    for(let i=0; i<s.length; i++){
        if(m1[s.charCodeAt(i)] !== m2[t.charCodeAt(i)]){
            return false;
        }

        m1[s.charCodeAt(i)] = i+1;
        m2[t.charCodeAt(i)] = i+1;
    }

    return true;   
    }

const s1 = 'egg', s2 = 'add';
const result =  isomorphicString(s1, s2);
console.log(result);   