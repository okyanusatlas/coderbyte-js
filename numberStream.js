function NumberStream(str) {
    return str.split('').some((el, index, arr) => {
        let num = Number(el); // need num amount of consecutive num; 5
        let toReturn = true;
        for(let i =0; i<num; i++) {
            if(!(arr[index+i] && (Number(arr[index+i]) === num))) return false
        }
        return toReturn;
    })
}

console.log(NumberStream("5556293383563665")) //false
console.log(NumberStream("5788888888882339999")) //true
