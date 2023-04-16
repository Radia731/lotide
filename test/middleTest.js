const assert = require('chai').assert;
const middle = require('../middle');

describe("#middle", () => {
  it("Find the middle element of '[1]', returns []", () => {
    assert.deepEqual(middle([1]), []);
  });
  it("Find the middle element of '[1, 2]', returns []", () => {
    assert.deepEqual(middle([1, 2]), []);
  });
  it("Find the middle element of '[1, 2, 3]', eturns [2]", () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });
  it("Find the middle element of '[1, 2, 3, 4]', returns [2, 3]", () => {
    assert.deepEqual(middle([1, 2, 3, 4]), [2, 3]);
  });
});