const divisionStringified = (num1, num2) => {
  let res =String(Math.round(num1/num2));
  if(res.length > 3) {
    let toReturn = res.split('').reverse().reduce((acc, curr, index, arr) => {
      let toAdd = (index) % 3 === 0 && index !== res.length? ',' + curr : curr;
      return acc+toAdd;
    }, '').split('').reverse().join('');

    return toReturn[toReturn.length-1] === ',' ? toReturn.substr(0, toReturn.length-1) : toReturn;
  }
  return res;
};
console.log(divisionStringified(503394930 ,43));
console.log(divisionStringified(1 ,10));
console.log(divisionStringified(63 ,14));
console.log(divisionStringified(45 ,50));