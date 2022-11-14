function ASCIIConversion(str) {
    return str.split('').reduce((acc, curr,index, arr) => {
        return curr.charCodeAt(0) === 32 ? acc+' ' : acc+String(curr.charCodeAt(0));
    },'');
}
console.log(ASCIIConversion('abc **')) // 979899 4242