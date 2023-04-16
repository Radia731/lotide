const eqArrays = require('./eqArrays');

const assertArraysEqual = function(arrayData1, arrayData2) {
  if (!eqArrays(arrayData1, arrayData2)) {
    return false;
  } else {
    return true;
  }
};

module.exports = assertArraysEqual;