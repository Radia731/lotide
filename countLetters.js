// const assertEqual = function(actual, expected) {
const countLetters = function (str) {
  const result = {};
  str = str.replace(" ", "");
  for (const letter of str) {
    if (!result[letter]) result[letter] = 1;
    else result[letter]++;
  }
  return result;
};

console.log(countLetters("school stuff"));
