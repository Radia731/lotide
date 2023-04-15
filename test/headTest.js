
const assert = require("chai").assert;
const index = require('../index');
const head   = index.head;


describe("#head", () => {

  it("returns 1 for [1, 2, 3]", () => {
    assert.strictEqual(head([1, 2, 3]), 1);
  });

  it("returns '5' for ['5']", () => {
    assert.strictEqual(head(["5"]), "5");
  });

  it("returns '5' for ['5, 6, 7']", () => {
    assert.strictEqual(head([5, 6, 7]), 5);
  });
  
  it("returns '1' for ['1, 6, 12']", () => {
    assert.strictEqual(head([1, 6, 12]), 1);
  });
});