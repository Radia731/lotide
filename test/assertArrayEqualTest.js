const assert = require('chai').assert;
const assertArraysEqual = require('../assertArraysEqual');

describe("#assertArraysEqual", () => {
  it("Compare [1, 2, 3] & [1, 2, 3], returns true", () => {
    assert.isTrue(assertArraysEqual([1, 2, 3], [1, 2, 3]));
  });
  it("Compare [1, 2, 3] & [3, 2, 1], returns false", () => {
    assert.isFalse(assertArraysEqual([1, 2, 3], [3, 2, 1]));
  });
  it('Compare ["1", "2", "3"] & ["1", "2", 3], returns false', () => {
    assert.isFalse(assertArraysEqual(["1", "2", "3"], ["1", "2", 3]));
  });
});