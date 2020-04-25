const offlineMinimum = strArr => {
  let result = '';
  let arrayToSelectFrom = [];
  strArr.forEach(el => {
    if(el === "E") {
      let min = Math.min(...arrayToSelectFrom);
      arrayToSelectFrom.splice(arrayToSelectFrom.indexOf(min), 1);
      result += min;
      result += ','
    }
    else {
      arrayToSelectFrom.push(Number(el));
    }
  });
  return result.substring(0,result.length-1);
};

console.log(offlineMinimum(["1","2","3","E","E"])); // 1,2
console.log(offlineMinimum(["5","4","6","E","1","7","E","E","3","2"])); // 4,1,5