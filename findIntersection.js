// Input: ["1, 3, 4, 7, 13", "1, 2, 4, 13, 15"]
// Output: 1,4,13

const FindIntersection = arrOfStrs => {
  const [str1, str2] = arrOfStrs;
  let arr1 = str1.split(',').map(str => Number(str));
  let arr2 = str2.split(',').map(str => Number(str));
  let res = arr1.reduce((acc, curr) => {
    if(arr2.indexOf(curr) !== -1) acc.push(curr);
    return acc;
  } , []);
  if (res.length === 0) return false;
  return res.join(',').replace(/ /g,"");
};

// console.log(FindIntersection(["1, 3, 4, 7, 13", "1, 2, 4, 13, 15"]));
// console.log(FindIntersection(["2, 3, 4", "3"]));
console.log(FindIntersection(["1, 5, 6, 7, 10, 11, 12", "5, 6, 8, 11, 17"]));