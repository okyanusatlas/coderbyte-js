const EquivalentKeypresses = (strArr) => {
  const [arr1, arr2] = strArr;
  const realArr1 = arr1.split(',');
  const realArr2 = arr2.split(',');
  const reducer = (acc, curr) =>  curr === '-B' ? removeLastChar(acc) : addCharToStr(acc, curr)
  let str1 = realArr1.reduce(reducer, '');
  let str2 = realArr2.reduce(reducer, '');
  return str1 === str2;
};
const removeLastChar = (str) => str.length === 0 ? '' : str.substr(0, str.length-1);
const addCharToStr = (str, char) => str.concat(char);

console.log(EquivalentKeypresses(["a,b,c,d", "a,b,c,d,-B,d"]));