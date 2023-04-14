const assertEqual = function(actual, expected) {
  const inputOne = actual;
  const inputTwo = expected;
  let result = "";
  if (inputOne === inputTwo) {
    result += `✅Assertion Passed: ${inputOne} === ${inputTwo}`;
  } else {
    result += `🔴Assertion Failed: ${inputOne} !== ${inputTwo}`;
  }
  return result;
};

const eqArrays = function(arr1, arr2) {

  let equal = true;
  if (arr1.length === arr2.length) {
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


const eqObjects = function(object1, object2) {

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
  if (arr1.length === arr2.length) {
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
  if (val1 === val2) {
    return true;
  } else {
    return false;
  }
};

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  let objectsEqual = eqObjects(actual, expected);

  let result = "";
  if (objectsEqual) {
    result += `✅Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`;
  } else {
    result += `🔴Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`;
  }
  return result;
};
