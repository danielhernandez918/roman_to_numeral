const x = "I";
const y = "LVIII"
const z= "MCMXCIV"


function romanToInt(str) {
    const sym = { 
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    }
    // let {I} = sym
    // console.log(I)
    let total = 0;
    for (let i =0;i < str.length; i++) {
        const cur = sym[str[i]];
        const next = sym[str[i+1]];
        if(cur< next){
            total += next-cur;
            i++
        } 
        else {
            total += cur;
        }
    }
    return total;
}


console.log(romanToInt(x));
console.log(romanToInt(y));
console.log(romanToInt(z));
