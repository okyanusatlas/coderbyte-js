const VowelSquare = (strArr) => {
    //find a square and return the top left
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    // make array of arrays, find a vowel; a[i][j] --> square is a[i][j+1], a[i+1][j] a[i+1][j+1], return a-j
    const arrOfArrs = strArr.map(str => str.split(''));
    for(let i = 0; i < arrOfArrs.length; i++) {
        for(let j = 0; j < arrOfArrs[i].length-1; j++) {
            if(arrOfArrs[i][j] && vowels.includes(arrOfArrs[i][j]) && arrOfArrs[i+1][j] && vowels.includes(arrOfArrs[i+1][j]) && arrOfArrs[i][j+1] && vowels.includes(arrOfArrs[i][j+1]) && arrOfArrs[i+1][j+1] && vowels.includes(arrOfArrs[i+1][j+1])) return `${i}-${j}`
        }
    }
    return 'not found'
}

console.log(VowelSquare(["aqrst", "ukaei", "ffooo"])) // 1-2
console.log(VowelSquare(["gg", "ff"])) // not found