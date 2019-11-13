const { mergeSort } = require("./index");

describe("Recursive Sorting", () => {
  it("should implement merge sort", () => {
    const arr1 = [1, 5, 8, 4, 2, 9, 6, 0, 3, 7];
    const arr2 = [];
    const arr3 = [2];
    const arr4 = [0, 1, 2, 3, 4, 5];
    const arr5 = Array.from({ length: 50 }, () =>
      Math.floor(Math.random() * 200)
    );

    expect(mergeSort(arr1)).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
    expect(mergeSort(arr2)).toEqual([]);
    expect(mergeSort(arr3)).toEqual([2]);
    expect(mergeSort(arr4)).toEqual([0, 1, 2, 3, 4, 5]);
    expect(mergeSort(arr5)).toEqual(arr5.sort((a, b) => a - b));
  });
});
