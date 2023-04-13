const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  for (let i = 0; i < array1.length; i++) {
    // test 1: console.log("start of loop", array1[i]);
    if (array1[i] !== array2[i]) {
      //test 2: console.log("non match found", array1[i], array2[i]);
      return false;
    }
  }
  return true;
};
module.exports = eqArrays;









;
