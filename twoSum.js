const twoSum = arr => {
  const target = arr[0];
  const newArr =  arr.slice(1, arr.length);
  const results = [];
  if(arr.length <= 2) return -1;
  for(let i = 0; i < newArr.length; i++) {
    for(let j = i+1; j < newArr.length; j++) {
      if(newArr[i] + newArr[j] === target) {
        if(!results.includes(`${newArr[i]},${newArr[j]}`)) {
          results.push(`${newArr[i]},${newArr[j]}`)
        }
      }
    }
  }
  return results.length ? results.join(' ') : -1; //x1,y1 space x2,y2
};
console.log(twoSum( [8, 1, 2, 3, 4, 5, 7])); // 5,2 -4,11