const middle = function(inputArray) {
  if (inputArray.length < 3) {
    // If the array.length is less than two elements, return empty
    return [];
  }

  if (inputArray.length % 2 === 0) {
    // If the array.length has an even number, output the two elements
    const middleArr = Math.floor(inputArray.length / 2);
    return inputArray.slice(middleArr - 1, middleArr + 1);
  } else {
    // Else would be consider an odd number, output the one element
    const middleArr = Math.floor(inputArray.length / 2);
    return inputArray.slice(middleArr, middleArr + 1);
  }
};

module.exports = middle;