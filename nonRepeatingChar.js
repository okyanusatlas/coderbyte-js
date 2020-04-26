function nonRepeatingCharacter(str) {
  const obj = str.split('').reduce((acc, curr) => {
    acc[curr] = acc[curr] ? acc[curr]+1 : 1;
    return acc;
  }, {});
  return Object.keys(obj).find(key =>  obj[key] === 1);
}
console.log(nonRepeatingCharacter("agettkgaeee"));