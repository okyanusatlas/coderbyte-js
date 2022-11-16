function SimpleEvens(num) {
    const nums = String(num).split('').map(num => Number(num));
    return nums.every(num => num%2 === 0)

}
console.log(SimpleEvens(2222220222));
console.log(SimpleEvens(2222220223));