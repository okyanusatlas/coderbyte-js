const StringPeriods = (str) => {
    const allSubStrings = getAllSubstrings(str).sort();
    // filter those that appear at least twice
    const duplicates = allSubStrings.filter((el, index, arr) => {
        if(arr[index+1] && el === arr[index+1]) return el;
    })
    const res = duplicates.reduce((acc, curr) => {
        if(str.length % curr.length  === 0 ) {
            //check 2 curr
            let newStr = ''
            for(let i = 0; i < str.length / curr.length; i++) newStr+=curr;
            if(newStr === str) {
                return acc.length >= curr.length ? acc : curr;
            }
        }
        return acc;

    }, '')
    return res === '' ? '-1' : res;
}

function getAllSubstrings(str) {
    const result = [];

    for (let i = 0; i < str.length; i++) {
        for (let j = i + 1; j < str.length + 1; j++) {
            result.push(str.slice(i, j));
        }
    }
    return result;
}
console.log(StringPeriods("gg"));

console.log('abc' * 3);