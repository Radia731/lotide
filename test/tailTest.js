
const assert = require("chai").assert;
const tail = require("../tail");

describe("# tail", () => {
  // 1
  it("returns [Labs, Week2] for [Lighthouse, Labs, Week2]", () => {
    assert.deepEqual(tail(["Lighthouse", "Labs", "Week2"]), ["Labs", "Week2"]);
  });
  // 2
  it("returns empty from empty", () => {
    assert.deepEqual(tail([]), []);
  });
  // 3
  it("returns empty from [1]", () => {
    assert.deepEqual(tail([1]), []);
  });
});
