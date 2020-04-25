function OverlappingRanges(arr) {
  let arr1 = [];
  let arr2 = [];
  let counter = 0;
  for(let i = arr[0] ; i <= arr[1] ; i++){
    arr1.push(i);
  }
  for(let i = arr[2] ; i <= arr[3] ; i++){
    arr2.push(i);
  }
  for(let i = 0 ; i < arr1.length ; i++){
    for(let j = 0 ; j <arr2.length; j++){
      if (arr1[i] === arr2[j]) {
        counter++;
      }
    }
  }
  return (counter >= arr[4]);
}
