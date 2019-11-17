const { getIndicesOfItemWeights } = require("./index");

describe("EX1", () => {
  it("test 1", () => {
    let weights_1 = [9];
    let answer_1 = getIndicesOfItemWeights(weights_1, 1, 9);
    expect(answer_1).toBeNull();
  });
  it("test 2", () => {
    let weights_2 = [4, 4];
    let answer_2 = getIndicesOfItemWeights(weights_2, 2, 8);
    expect(answer_2[0]).toBe(1);
    expect(answer_2[1]).toBe(0);
  });
  it("test 3", () => {
    let weights_3 = [4, 6, 10, 15, 16];
    let answer_3 = getIndicesOfItemWeights(weights_3, 5, 21);
    expect(answer_3[0]).toBe(3);
    expect(answer_3[1]).toBe(1);
  });
  it("test 4", () => {
    let weights_4 = [12, 6, 7, 14, 19, 3, 0, 25, 40];
    let answer_4 = getIndicesOfItemWeights(weights_4, 9, 7);
    expect(answer_4[0]).toBe(6);
    expect(answer_4[1]).toBe(2);
  });
});
