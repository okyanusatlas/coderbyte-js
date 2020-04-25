function MeanMode(arr) {
  let sum = 0;
  let numInMax = 0;
  for(let i = 0 ; i <arr.length; i++){
    sum += arr[i];
    if(howManyTimes(arr,arr[i]) > numInMax) numInMax = arr[i];
  }
  sum = Math.round(sum / arr.length);

  return (Number(sum === numInMax));

}
function howManyTimes(arr,element){
  let count = 0;
  for(let i = 0; i < arr.length ; i++){
    if(element === arr[i]){
      count++
    }
  }
  return count;
}