const eqObjects = require("./eqObjects");

const assertObjectsEqual = function (actual, expected) {
  const inspect = require("util").inspect;
  if (!eqObjects(actual, expected)) {
    return false;
  } else {
    return true;
  }
};

module.exports = assertObjectsEqual;
