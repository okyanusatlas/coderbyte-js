function Superincreasing(arr) {
  let sum = arr[0];
  for(let i = 1 ; i <arr.length; i++){
    if(arr[i] > sum ) sum += arr[i]
    else return false;
  }
  return true;

}