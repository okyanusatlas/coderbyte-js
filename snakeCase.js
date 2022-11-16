const SnakeCase = (str) => {
    const newStr = str.split('').map(char => isLetter(char)? char : '-');
    const words = newStr.join('').split('-');
    const res =words.reduce((acc, curr) => {
        const lowerCase = curr.toLowerCase();
        return acc+'_'+lowerCase;
    }, '');
    return res.substring(1, res.length)
}
const  isLetter =(str) => {
    return str.length === 1 && Boolean(str.match(/[a-z]/i));
}
console.log(SnakeCase("BOB loves-coding")) //cats_and_dogs_are_awesome
console.log(SnakeCase("javaSCRIPT is The-BEST"))