function PalindromeSwapper(str) {
    const arr = str.split('');
    const words = arr.reduce((acc, curr, ind, arr) => {
        if(arr[ind+1]) {
            const newArr = [...arr];
            let temp = newArr[ind];
            newArr[ind] = newArr[ind+1];
            newArr[ind+1] = temp;
            acc.push(newArr.join(''));
        }
        if(arr[ind-1]) {
            const newArr = [...arr];
            let temp = newArr[ind];
            newArr[ind] = newArr[ind-1];
            newArr[ind-1] = temp;
            acc.push(newArr.join(''));
        }
        return acc;
    }, []);
    let result = '-1';
    words.forEach(word => {
        if(isPalindrome(word)) result = word;
    })
    return result;

}
const isPalindrome = str => str === str.split('').reverse().join('');
console.log(PalindromeSwapper("kyaak"))
console.log(PalindromeSwapper("anna"))
console.log(PalindromeSwapper("ortator"))
console.log(PalindromeSwapper("rcaecar"))