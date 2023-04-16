const without = function(inputArray, removeElement) {
  // To make sure it is non-destructive of the original array.
  const newArray = [];

  for (let i = 0; i < inputArray.length; i++) {
    // A flag to prevent trigger removal function
    let doRemove = false;
    for (let x = 0; x < removeElement.length; x++) {
      // Since the 2nd element is an array itself, needs to for loop.
      if (inputArray[i] === removeElement[x]) {
        // If matched, perform doRemove [i] element.
        doRemove = true;
      }
    }
    if (!doRemove) {
      newArray.push(inputArray[i]);
    }
  }
  return newArray;
};

module.exports = without;