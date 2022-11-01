const CodelandUsernameValidation = str => {
    const arr = str.split('');
    const asciiCodes = arr.map(char => char.charCodeAt(0))
    const isLetterOrNumberOrUnderscore = asciiCodes.every(el => el === 95 || (el >=48 && el<=57) || (el >=65 && el<=122))
    return !(arr[0].toUpperCase() === arr[0] ||
        arr.length < 4 ||
        arr.length > 25 ||
        arr[arr.length - 1] === '_' ||
        !isLetterOrNumberOrUnderscore);

}