function SwapCase(str) {
  str = str.split('');
  for(let i = 0 ; i <str.length; i++){
    str[i] == str[i].toUpperCase() ?  str[i] = str[i].toLowerCase() :  str[i] = str[i].toUpperCase();
  }
  return (str.join(''));

}