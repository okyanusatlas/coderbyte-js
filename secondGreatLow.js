function secondGreatLow(arr) {
  if (arr.length === 2) return Math.max(...arr) + " " + Math.min(...arr);
  const max = Math.max(...arr);
  const min = Math.min(...arr);
  const newArr = arr.filter(num => num !== max && num !== min);
  return Math.min(...newArr) + " " + Math.max(...newArr);
}