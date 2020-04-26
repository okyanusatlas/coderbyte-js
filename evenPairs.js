function evenPairs(str){
  str = str.split('');
  for(let i = 0 ; i <str.length;i++){
    if(Number(str[i]) % 2 === 0){
      let buildNumber = '';
      for(let j = i+1 ; j <str.length;j++) {
        if(Number(str[j]) % 2 === 0) {
          return true
        };
        if(str[j] % 2 !== 0 && !isNaN(Number(str[j]))){
          buildNumber += str[j]
        }
        if(buildNumber && Number(buildNumber) % 2 === 0) {
          return true
        };
        if(isNaN(Number(str[j]))){ buildNumber = ''; break;};
      }
      if(Number(str[i+1]+str[i+2]) % 2 === 0 ||Number(str[i+1]) % 2 === 0){
        return 'true';
      }
    }
  }
  return 'false';
}

console.log(evenPairs("jfb735f9ph8152")); //true
console.log(evenPairs("7r5gg812")); //true
// console.log(evenPairs("f178svg3k19k36")); //true