const SerialNumber =(str) => {
    /*
    * 1. It needs to contain three sets each with three digits (1 through 9) separated by a period.
    2. The first set of digits must add up to an even number.
    3. The second set of digits must add up to an odd number.
    4. The last digit in each set must be larger than the two previous digits in the same set.
    * */
    const sets = str.split('.');
    const hasThreeSets = sets.length === 3;
    const eachSetHasThreeDigits = sets.every(set => set.length===3);
    const additionOfFirstSet= sets[0].split('').reduce((acc, curr) => Number(curr)+acc, 0);
    const additionOfSecondSet= sets[1].split('').reduce((acc, curr) => Number(curr)+acc, 0);

    const lastDigitAlwaysLargerInAllSets = sets.every(set => {
        const [finalDigit, ...rest] = set.split('').reverse().map(num => Number(num));
        return rest.every(num => num < finalDigit);
    })
    return (eachSetHasThreeDigits && hasThreeSets && (additionOfFirstSet % 2 === 0 )&& (additionOfSecondSet % 2 === 1) && lastDigitAlwaysLargerInAllSets)
}

console.log(SerialNumber("11.124.667"))
console.log(SerialNumber("114.568.112"))