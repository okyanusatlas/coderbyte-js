/**
 * @return {number}
 */
function OtherProducts(strArr) {
  const product = strArr.reduce((acc, curr) => acc * curr, 1);
  const resultsArr = strArr.map(el => product/el);
  const result =resultsArr
    .reduce((acc, curr) => acc.concat(String(curr)).concat('-'), '');
  return result.substr(0, result.length-1);
}
console.log(OtherProducts([1, 2, 3, 4, 5]));