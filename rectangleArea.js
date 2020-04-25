const rectangleArea = strArr => {
  let newArr = strArr.map(el => {
    let toReturn = [];
    el.split('').filter(el => el !== ' ').forEach((innerEl) => {
      if(!isNaN(innerEl)) toReturn.push(Number(innerEl));
    });
    return toReturn;
  });
  const xAxis = [...new Set(newArr.map(el => el[0]))].reduce((acc, curr) => Math.abs(acc -curr));
  const yAxis = [...new Set(newArr.map(el => el[1]))].reduce((acc, curr) => Math.abs(acc -curr));
  return xAxis * yAxis;
};
console.log(rectangleArea(["(0 0)", "(3 0)", "(0 2)", "(3 2)"])); // 6