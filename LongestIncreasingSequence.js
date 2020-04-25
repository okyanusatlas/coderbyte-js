function LongestIncreasingSequence(arr) {
  const T =arr.map(e=>1);
  for(let i=1,len=arr.length;i<len;i++){
    for(let j=0;j<i;j++){
      if(arr[j]<arr[i]){
        T[i]=Math.max(T[i],T[j]+1)
      }
    }
  }
  return Math.max(...T);
}