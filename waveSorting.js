function WaveSorting(arr){
  let length = arr.length ;
  let countObj = {};
  arr.forEach(x => !countObj[x] ? countObj[x] = 1 : countObj[x]++);
  let countArr = [];
  for(let key in countObj){
    countArr.push(countObj[key]);
  }
  let maxCount = Math.max(...countArr);
  return maxCount > length/2 ? false : true;

}