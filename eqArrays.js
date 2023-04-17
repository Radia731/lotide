const eqArrays = function (array1, array2) {
  if (array1.length !== array2.length) {
    // Return immediately false of array length not matched.
    return false;
  }

  for (let i in array1) {
    // Condidion if the element is an Array itself
    if (Array.isArray(array1[i])) {
      if (!eqArrays(array1[i], array2[i])) {
        // Recursive the element to check within again
        return false;
      }
    } else if (array1[i] !== array2[i]) {
      // Condition return false if the element doesn't match
      return false;
    }
  }

  // If loop did not find any false then return true!
  return true;
};

module.exports = eqArrays;
