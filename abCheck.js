const ABCheck = (str) => {
  const lowerCaseArr = str.toLowerCase().split('');
  const indexesOfAllAs = lowerCaseArr.reduce((acc, curr, index) => {
    if(curr === 'a') acc.push(index);
    return acc;
  }, []);
  console.log(indexesOfAllAs);
  return indexesOfAllAs.some(el => lowerCaseArr[el+4]=== 'b' || lowerCaseArr[el-4]=== 'b');
};
console.log(ABCheck("bzzza"));