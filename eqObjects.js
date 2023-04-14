const assertEqual = require('./assertEqual');
const eqArrays = require('./eqArrays');

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  // input : two objects
  // output : a boolean, true if the two input objects are identical, false if they are not

  let key1 = Object.keys(object1);
  let key2 = Object.keys(object2);

  let equalKeys = compareKeys(key1, key2);
  let equalObjects = true;

  if (equalKeys === true) {
    for (let key of key1) {
      if (Array.isArray(object1[key])) {
        let equal = eqArrays(object1[key], object2[key]);
        if (equal !== true) {
          equalObjects = false;
          break;
        }
      } else if (object1[key] instanceof Object) {
        equalObjects = eqObjects(object1[key], object2[key]);
      } else {
        let equal = compareValues(object1[key], object2[key]);
        if (equal !== true) {
          equalObjects = false;
          break;
        }
      }
    }
  } else {
    equalObjects = false;
  }

  return equalObjects;
};

const compareKeys = function(arr1, arr2) {
  // input : two arrays
  // output : boolean, true if arr1 is equal to arr 2

  //sort the two input arrays
  arr1 = arr1.sort();
  arr2 = arr2.sort();

  let equal = true;
  //Test to see if arr1 has the same length as arr2
  if (arr1.length === arr2.length) {
    // if the length of arr1 and arr2 are the same, test to see if arr1[index] == arr2[index]
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] === arr2[i]) {
        equal = true;
      } else {
        equal = false;
        return equal;
      }
    }
  } else {
    equal = false;
    return equal;
  }

  return equal;
};

const compareValues = function(val1, val2) {
  //input: two values, can be string or number
  //output: boolean, true if val1 is equal to val2, false if val1 is not equal to val2
  if (val1 === val2) {
    return true;
  } else {
    return false;
  }
};

module.exports = eqObjects, compareKeys, compareValues;