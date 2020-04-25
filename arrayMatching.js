const arrayMatching = (strArr) => {
  const arr1 = strArr[0].split(',').map(el => el.split('').filter(innerEl => innerEl !== '[' && innerEl !== ']').join('')).map(el => Number(el));
  const arr2 = strArr[1].split(',').map(el => el.split('').filter(innerEl => innerEl !== '[' && innerEl !== ']').join('')).map(el => Number(el));
  while(arr1.length !== arr2.length) {
    arr1.length > arr2.length ? arr2.push(0) : arr1.push(0)
  }
  const resultStr = arr1.reduce((acc, curr, index) => {
    acc+= String(curr+arr2[index]);
    acc += '-';
    return acc;
  }, '');
  return resultStr.substr(0, resultStr.length-1);
};
console.log(arrayMatching(["[1, 2, 5, 6]", "[5, 2, 8, 11,3]"])); //6-4-13-17