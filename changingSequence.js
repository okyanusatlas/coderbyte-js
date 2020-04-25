function ChangingSequence(arr) {
  for(let i = 0 ; i < arr.length; i++){
    if(arr.length <= 2) return -1;
    if(arr[0] > arr[1]){ // decreasing part
      if(arr[i] < arr[i+1]){
        //get index of here
        return i;
      }
    }
    else if (arr[0] < arr[1]){
      if(arr[i] > arr[i+1]){
        //get index of here
        return i;
      }
    }
  }
  return -1;
}