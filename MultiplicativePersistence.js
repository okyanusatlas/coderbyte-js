const multiplicativePersistence =  num => {
  let count =0;
  while(num >= 10) {
    count+=1;
    num = getSum(num)
  }
  return count;
};
const getSum = num => {
  return String(num).split('').map(el => Number(el)).reduce((acc, curr) => acc  * curr, 1)
};
console.log(multiplicativePersistence(39))