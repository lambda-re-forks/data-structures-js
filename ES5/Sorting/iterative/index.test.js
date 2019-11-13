const {
  selectionSort,
  bubbleSort,
  countSort,
  insertionSort
} = require("./index");

describe("Iterative Sorting", () => {
  it("should implement selection sort", () => {
    const arr1 = [1, 5, 8, 4, 2, 9, 6, 0, 3, 7];
    const arr2 = [];
    const arr3 = [0, 1, 2, 3, 4, 5];
    const arr4 = Array.from({ length: 50 }, () =>
      Math.floor(Math.random() * 200)
    );

    expect(selectionSort(arr1)).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
    expect(selectionSort(arr2)).toEqual([]);
    expect(selectionSort(arr3)).toEqual([0, 1, 2, 3, 4, 5]);
    expect(selectionSort(arr4)).toEqual(arr4.sort((a, b) => a - b));
  });
  it("should implement bubble sort", () => {
    const arr1 = [1, 5, 8, 4, 2, 9, 6, 0, 3, 7];
    const arr2 = [];
    const arr3 = [0, 1, 2, 3, 4, 5];
    const arr4 = Array.from({ length: 50 }, () =>
      Math.floor(Math.random() * 200)
    );

    expect(bubbleSort(arr1)).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
    expect(bubbleSort(arr2)).toEqual([]);
    expect(bubbleSort(arr3)).toEqual([0, 1, 2, 3, 4, 5]);
    expect(bubbleSort(arr4)).toEqual(arr4.sort((a, b) => a - b));
  });
  it("should implement counting sort", () => {
    const arr1 = [1, 5, 8, 4, 2, 9, 6, 0, 3, 7];
    const arr2 = [];
    const arr3 = [1, 5, -2, 4, 3];
    const arr4 = Array.from({ length: 50 }, () =>
      Math.floor(Math.random() * 200)
    );
    expect(countSort(arr1)).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
    expect(countSort(arr2)).toEqual([]);
    expect(countSort(arr3)).toBe(
      "Error, negative numbers not allowed in Count Sort"
    );
    expect(countSort(arr4)).toEqual(arr4.sort((a, b) => a - b));
  });
  it("should implement insertion sort", () => {
    const arr1 = [1, 5, 8, 4, 2, 9, 6, 0, 3, 7];
    const arr2 = [];
    const arr3 = [0, 1, 2, 3, 4, 5];
    const arr4 = Array.from({ length: 50 }, () =>
      Math.floor(Math.random() * 200)
    );

    expect(insertionSort(arr1)).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
    expect(insertionSort(arr2)).toEqual([]);
    expect(insertionSort(arr3)).toEqual([0, 1, 2, 3, 4, 5]);
    expect(insertionSort(arr4)).toEqual(arr4.sort((a, b) => a - b));
  });
});
