const { recipeBatches, recipeBatchesRecursive } = require("./index");

describe("Recipe Batches", () => {
  it("should return number of batches iteratively", () => {
    expect(
      recipeBatches(
        { milk: 100, flour: 4, sugar: 10, butter: 5 },
        { milk: 1288, flour: 9, sugar: 95 }
      )
    ).toBe(0);
    expect(
      recipeBatches(
        { milk: 100, butter: 50, cheese: 10 },
        { milk: 198, butter: 52, cheese: 10 }
      )
    ).toBe(1);
    expect(
      recipeBatches(
        { milk: 2, sugar: 40, butter: 20 },
        { milk: 5, sugar: 120, butter: 500 }
      )
    ).toBe(2);
    expect(recipeBatches({ milk: 2 }, { milk: 200 })).toBe(100);
  });
  it("should return number of batches recursively", () => {
    expect(
      recipeBatchesRecursive(
        { milk: 100, flour: 4, sugar: 10, butter: 5 },
        { milk: 1288, flour: 9, sugar: 95 }
      )
    ).toBe(0);
    expect(
      recipeBatchesRecursive(
        { milk: 100, butter: 50, cheese: 10 },
        { milk: 198, butter: 52, cheese: 10 }
      )
    ).toBe(1);
    expect(
      recipeBatchesRecursive(
        { milk: 2, sugar: 40, butter: 20 },
        { milk: 5, sugar: 120, butter: 500 }
      )
    ).toBe(2);
    expect(recipeBatchesRecursive({ milk: 2 }, { milk: 200 })).toBe(100);
  });
});
