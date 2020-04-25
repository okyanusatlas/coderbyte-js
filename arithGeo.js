const ArithGeo = arr => {
  if(isArth(arr)) return "Arithmetic";
  if(isGeo(arr)) return "Geometric";
  return -1;
};

const isArth = arr => {
  if (arr.length < 2) return false;
  const diff = arr[1] - arr[0];
  return arr.every((el, i) => {
    if (i === 0) return true;
    return el - arr[i - 1] === diff
  });
};

const isGeo = arr => {
  if (arr.length < 2) return false;
  const diff = arr[1] / arr[0];
  return arr.every((el, i) => {
    if (i === 0) return true;
    return el / arr[i - 1] === diff
  });
};