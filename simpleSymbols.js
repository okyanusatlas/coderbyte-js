const SimpleSymbols = (str) => {
  if (/^[a-zA-Z]/.test(str) || /[a-zA-Z]$/.test(str) || /[^+][a-zA-Z]/.test(str) || /[a-zA-Z][^+]/.test(str)) {
    return false;
  } else {
    return true;
  }
};
console.log('+'.toUpperCase());
console.log(SimpleSymbols("+d+=3=+s+"));
console.log(SimpleSymbols("f++d+"));