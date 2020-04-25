function ThirdGreatest(strArr) {
  let arr = strArr.sort((a,b ) => b.length - a.length);
  return arr[2];
}
console.log(ThirdGreatest(["hello", "world", "before", "all"]));