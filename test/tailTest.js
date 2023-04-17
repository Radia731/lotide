const assert = require("chai").assert;
const tail = require("../tail");

const result = tail(["Hello", "Lighthouse", "Labs"]);

describe("#tail", () => {
  it("returns 2", () => {
    assert.strictEqual(result.length, 2);
  });
  it("returns 'Lighthouse'", () => {
    assert.strictEqual(result[0], "Lighthouse");
  });
  it("returns 'Labs'", () => {
    assert.strictEqual(result[1], "Labs");
  });
});

const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words);

describe("#words", () => {
  it("returns 3", () => {
    assert.strictEqual(words.length, 3);
  });
});
