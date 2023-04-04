const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`✅ Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`🛑 Assertion Failed: ${arr1} !== ${arr2}`);
  }
};

const middle = function(array) {
   const middleArray = [];
        if (array.length <= 2) {
          return middleArray;
  } else if (array.length % 2 !== 0) {
  middleArray.push(array[Math.floor(array.length / 2)]);
  } else {
  middleArray.push(array[array.length / 2 - 1], array[array.length / 2]);
  }
  return middleArray;
  };

  module.exports = middle;