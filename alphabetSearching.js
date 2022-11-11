function AlphabetSearching(str) {
    const lowerCaseStr = str.toLowerCase();
    const letters = alphabet.split('').map(letter => letter.toLowerCase());
    return letters.every(letter => {
        return lowerCaseStr.split('').includes(letter)
    })

}
const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

console.log(AlphabetSearching("abcdefghijklmnopqrstuvwxyyyy"));
console.log(AlphabetSearching("ABCDEFGHIJKLMNOPQRSTUVWXYZ"));