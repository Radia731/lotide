const countLetters = function(letters) {
  // Create a new object to store the count for each letter
  const count = {};
  for (const letter of letters) {
    if (letter !== " ") {
      // Only process this condition if the characeter is not a space
      // Below checks if the key existed in `count`, if it is not then initial
      // with first count with value 1 and if existed then add +1 to the key
      count[letter] = letter in count ? count[letter] + 1 : 1;
    }
  }
  return count;
};

module.exports = countLetters;