function NextPalindrome(num){
  if(checkPalindrom(String(num))) num++;
  while(!checkPalindrom(String(num))) ++num;
  return num;
}
function checkPalindrom(str) {
  return str === str.split('').reverse().join('');
}