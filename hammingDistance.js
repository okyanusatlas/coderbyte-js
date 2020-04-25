function HammingDistance(strArr) {
  // if same  position are not same items  counter++
  let counter = 0;
  strArr[0] = strArr[0].split('');
  strArr[1] = strArr[1].split('');
  return strArr[0].reduce((acc, curr, index) => {
    return curr === strArr[1][index] ? acc : acc+1;
  }, 0);
}

console.log(HammingDistance(['coder', 'codec']));