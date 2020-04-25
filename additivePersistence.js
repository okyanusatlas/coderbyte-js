const additivePersistence =  num => {
  let count =0;
  while(num >= 10) {
    count+=1;
    num = getTotal(num)
  }
  return count;
};
const getTotal = num => {
  return String(num).split('').map(el => Number(el)).reduce((acc, curr) => acc +curr, 0)
};

console.log(additivePersistence(4));