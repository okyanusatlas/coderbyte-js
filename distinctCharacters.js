function DistinctCharacters(str) {
    //make array unique
    const uniqueArr = [...new Set(str.split(''))];
    return uniqueArr.length >= 10;
}