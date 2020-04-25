const numberAddition = str => {
  const arr = str.split('').map(el => el === " " ? "-" : el).map(el => Number(el));
  let nums = [];
  for(let i = 0; i < arr.length; i++) {
    let createStrNum = '';
    if(!isNaN(arr[i])) {
      createStrNum+=arr[i];
      for(let j = i+1; j <= arr.length; j++) {
        if(!isNaN(arr[j])) createStrNum += arr[j];
        else {
          i++;
          nums.push(Number(createStrNum));
          break;
        }
      }
    }
  }
  return nums.reduce((acc, curr) => acc+curr, 0);
};
// console.log(numberAddition("88Hello 3World!" )) // 91
// console.log(numberAddition("T1wo Ho33uses" )) // 34
console.log(numberAddition("1 2 3 4 k10" )) // 20
console.log(numberAddition( "no numbers sorry**")) // 20
