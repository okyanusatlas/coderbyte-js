const arrayAddition = arr => {
  const greatestNum = Math.max(...arr);
  let newArr = arr.filter(el => el !== greatestNum).sort((a,b) => b-a);
  for(let i = 0; i < newArr.length; i++) {
    let sum = newArr[i];
    for(let j = 1; j < newArr.length; j++) {
      sum += newArr[j];
      if(sum === greatestNum) {return true;}
    }
  }
  return false;
};

console.log(arrayAddition([3,5,-1,8,12]));
console.log(arrayAddition([31,2,90,50,7]));
