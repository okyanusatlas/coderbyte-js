const productDigits = num => {
  let exactDividers= [];
  for(let i = 1; i <= num ; i++) {
    if(Math.floor(num/i) === num/i) {
      exactDividers.push(i);
    }
  }
  return exactDividers.reduce((acc, curr) => {
    let pair = String(curr) + String(num/curr);
    console.log('pair', pair);
    const currentLength = [...new Set(pair.split(''))].length;
    return acc > currentLength ? currentLength : acc;
  }, Infinity);
};
// console.log(productDigits(23))//3 23 * 1
// console.log(productDigits(1))//2 1 * 1
// console.log(productDigits(5000))//
// console.log(productDigits(90))//