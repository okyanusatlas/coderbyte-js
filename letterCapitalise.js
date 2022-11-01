function LetterCapitalize(str) {
    return str.split('').map((el, i, arr) =>{
        return i=== 0 || arr[i-1] === " " ? el.toUpperCase() : el
    }).join('')
}
