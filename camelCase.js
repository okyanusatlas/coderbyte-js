const CamelCase = (str) => {
    const newStr = str.split('').map(char => isLetter(char)? char : '-');
    const words = newStr.join('').split('-');
    const res = words.reduce((acc, curr) => {
        const capital = curr.substring(0,1).toUpperCase();
        const rest = curr.substring(1,curr.length).toLowerCase();
        return acc+capital+rest;
    },'');
    return res[0].toLowerCase()+res.substring(1,res.length);
}
const  isLetter =(str) => {
    return str.length === 1 && Boolean(str.match(/[a-z]/i));
}
console.log(CamelCase("a b c d-e-f%g"));