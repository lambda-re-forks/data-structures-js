const { countTh } = require("./index");

describe("Count TH", () => {
  it("should work when empty", () => {
    const word = "";
    const count = countTh(word);
    expect(count).toBe(0);
  });
  it("should work when there is only one TH", () => {
    const word = "abcthxyz";
    const count = countTh(word);
    expect(count).toBe(1);
  });
  it("should work for multiple THs", () => {
    const word = "abcthefthghith";
    const count = countTh(word);
    expect(count).toBe(3);
  });
  it("should work backwards??", () => {
    const word = "thhtthht";
    const count = countTh(word);
    expect(count).toBe(2);
  });
  it("should work for mixed cases", () => {
    const word = "THtHThth";
    const count = countTh(word);
    expect(count).toBe(1);
  });
});
