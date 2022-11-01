// try to create palindrome with removing one or two
const palindromeCreator = (str) => {
    if(isPalindrome(str)) return 'palindrome';
    const arr = str.split('');
    //check for one char removal
    for(let i = 0; i < arr.length; i++) {
        let newArr = arr.filter((el, ind) => ind === i ? '': el);
        if(isPalindrome(newArr.join(''))) return arr[i];
    }
    //check for two char removal
    if(arr.length> 4) {
        for(let i = 0; i < arr.length; i++) {
            let newArr = arr.filter((el, ind) => ind === i ? '': el);
            for(let j = i; j < newArr.length; j++) {
                let innerNewArr = newArr.filter((el, ind) => ind === j ? '': el);
                if(isPalindrome(innerNewArr.join(''))) return arr[i]+newArr[j];
            }
        }
    }

    return 'not possible';
}
const isPalindrome = str => str === str.split('').reverse().join('');
console.log(palindromeCreator("abjchba")); //jc
console.log(palindromeCreator("vhhgghhgghhk"));//vk
console.log(palindromeCreator("mmop")); //not possible