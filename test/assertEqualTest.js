const assert = require('chai').assert;
const assertEqual = require('../assertEqual');
describe("#assertEqual", () => {
  it(`Compare "Lighthouse Labs", "Bootcamp", return false`, () => {
    assert.isFalse(assertEqual("Lighthouse Labs", "Bootcamp"));
  });
  it(`Compare 1, 1, return true`, () => {
    assert.isTrue(assertEqual(1, 1));
  });
  it(`Compare "Kevin", "Kevin", return false`, () => {
    assert.isTrue(assertEqual("Kevin", "Kevin"));
  });
  it(`Compare 1, 2, return false`, () => {
    assert.isFalse(assertEqual(1, 2));
  });
})