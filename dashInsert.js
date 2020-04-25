const dashInsert = (str) => {
  const splitted = str.split('');
  return splitted.reduce((acc, curr, index, arr) => {
    let toAdd = (Number(curr) % 2) === 1 && (Number(arr[index+1]) %2) === 1 ? curr + '-' : curr;
    return acc+toAdd;
  }, '');
};
console.log(dashInsert('56730'));