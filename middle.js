
// Implement middle which will take in an array and return the middle-most element(s) of the given array.
const middle = function(array) {
  // Create the new array that the middle value(s) will be returned to
  let newArray = [];
  //
  if (array.length === 1 || array.length === 2) {
    return newArray;
  } else if (array.length % 2 === 0) {
    var evenArr = (array.length - 1) / 2;
    // evenArr = 2.5: need to round up and down to return elemnts in the middle
    var intDown = Math.floor(evenArr);
    var intUp = Math.ceil(evenArr);
    // console.log(intDown);
    // console.log(intUp);
    // console.log(`The indexes are ${intDown} and ${intUp}`);
    // console.log(`The elements are ${array[intDown]} and ${array[intUp]}`);
    newArray.push(array[intDown]);
    newArray.push(array[intUp]);
    return newArray;
  } else {
    var oddArr = (array.length - 1) / 2;
    // console.log("Index is ", oddArr);
    // console.log("Element is :", array[oddArr]);
    newArray.push(array[oddArr]);
    return newArray;
  }
};

module.exports = middle;