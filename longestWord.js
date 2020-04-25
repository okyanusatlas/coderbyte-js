function LongestWord(sen) {
  let longestWord = "";
  sen.match(/[a-z0-9]+/gi).forEach(word => word.length > longestWord.length ? longestWord = word : "");
  return longestWord;
}