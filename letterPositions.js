const letterPositions = function(sentence) {
  const results = {};
    for (let i = 0; i < sentence.length; i++) {
      const letter = sentence[i];

      if (letter !== " ") {

        // If the letter is not already in the results object, add it
        if (!results[letter]) {
          results[letter] = [];
        }
      }
  return results;
};
};