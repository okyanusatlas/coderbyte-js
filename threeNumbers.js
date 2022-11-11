function ThreeNumbers(str) {
    const words = [...new Set(str.split(' '))];
    return words.every(word => {
        const letters = word.split('');
        console.log('letters',letters);
        const indexes = letters.map((letter, index) => {
            if(!Number.isNaN(Number(letter))) return index
            return null;
        }).filter(el => Boolean(el) || el === 0);
        if(indexes.length ===3 && !(indexes[0]+1 === indexes[1] && indexes[1]+1 === indexes[2])) return true
    })
}
console.log(ThreeNumbers("21aa3a ggg4g4g6ggg"))
// 3 numbers should appear in every word in the given sentence str, shouldn't be adjecent