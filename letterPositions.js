const letterPositions = function (sentence) {
  // Declare object
  const results = {};

  for (let i = 0; i < sentence.length; i++) {
    // Traditional loop to determine the index of each letter for of will
    // not work on duplicated value
    const letter = sentence[i];
    // Each letter into string
    if (letter !== " ") {
      // If it is not a empty space
      if (results[letter] === undefined) {
        // If the letter doesn't exist in the object key
        // Add key as array
        results[letter] = [i];
      } else {
        // If not push a value into the array
        results[letter].push(i);
      }
    }
  }

  return results;
};

module.exports = letterPositions;
