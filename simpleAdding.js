function SimpleAdding(num) {
  let res = 0;
  while(num > 0) {
    res += num;
    num--
  }
  return res;
}
console.log(SimpleAdding(12))