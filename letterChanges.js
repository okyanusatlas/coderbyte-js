function LetterChanges(str) {

  return (str.split("").map(item => item.charCodeAt(0)).map(item => {
    if(item >= 97 && item <= 122){
      item += 1 ;
      if(item === 123) item = 65;
      if(item === 97 || item === 101 || item === 105 || item === 111 || item === 117){
        item-= 32;
      }
    }
    return item;
  }).map(item => String.fromCharCode(item)).join(""));
}