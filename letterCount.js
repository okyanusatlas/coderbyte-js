function LetterCountI(str) {
  //find all the words
  // map over the word and  find out amount of repeated Letter
  // return the word with most repeated letters
  const words = str.split(" ");
  let result = words[0] || "";
  words.forEach(word => {
    result = mapOverWord(word) > mapOverWord(result) ? word : result;
  });
  // code goes here
  return mapOverWord(result) <= 1 ? -1 : result;
}

const mapOverWord = word => {
  let res = {};
  word.split("").forEach(letter => {
    res[letter] ? res[letter] += 1 : res[letter] = 1;
  });
  //return the biggest value
  return Math.max(...Object.values(res));

};