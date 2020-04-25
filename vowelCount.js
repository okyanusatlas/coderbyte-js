/**
 * @return {number}
 */
function VowelCount(str) {
  let vowels = 'aeiou';
  return str.split('').reduce((acc, curr) => {
    return vowels.includes(curr) ? acc+1 : acc;
  }, 0);
}
console.log(VowelCount("coderbyte"))