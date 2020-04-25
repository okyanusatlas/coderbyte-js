const binaryReversal = str => {
  const binary = (Number(str) >>> 0).toString(2);
  let arr = String(binary).split('').reduce((acc, curr) => [...acc, curr], []);
  while((arr.length % 8) !== 0) {
    arr.unshift(0);
  }
  return parseInt(arr.reverse().join(''),2);
};

console.log(binaryReversal('4567')); // 60296;