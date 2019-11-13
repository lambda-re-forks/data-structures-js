const {
  linearSearch,
  binarySearch,
  binarySearchRecursive
} = require("./index");

describe("Searching", () => {
  it("should implement linear search", () => {
    const arr1 = [-2, 7, 3, -9, 5, 1, 0, 4, -6];
    const arr2 = [];

    expect(linearSearch(arr1, 6)).toBe(-1);
    expect(linearSearch(arr1, -6)).toBe(8);
    expect(linearSearch(arr1, 0)).toBe(6);
    expect(linearSearch(arr2, 3)).toBe(-1);
  });
  it("should implement binary search", () => {
    const arr1 = [-9, -8, -6, -4, -3, -2, 0, 1, 2, 3, 5, 7, 8, 9];
    const arr2 = [];

    expect(binarySearch(arr2, 6)).toBe(-1);
    expect(binarySearch(arr2, 0)).toBe(-1);
    expect(binarySearch(arr1, -9)).toBe(0);
    expect(binarySearch(arr1, -8)).toBe(1);
    expect(binarySearch(arr1, -6)).toBe(2);
    expect(binarySearch(arr1, -4)).toBe(3);
    expect(binarySearch(arr1, -3)).toBe(4);
    expect(binarySearch(arr1, -2)).toBe(5);
    expect(binarySearch(arr1, 0)).toBe(6);
    expect(binarySearch(arr1, 1)).toBe(7);
    expect(binarySearch(arr1, 2)).toBe(8);
    expect(binarySearch(arr1, 3)).toBe(9);
    expect(binarySearch(arr1, 5)).toBe(10);
    expect(binarySearch(arr1, 7)).toBe(11);
    expect(binarySearch(arr1, 8)).toBe(12);
    expect(binarySearch(arr1, 9)).toBe(13);
  });
  it("should implement recursive binary search", () => {
    const arr1 = [-9, -8, -6, -4, -3, -2, 0, 1, 2, 3, 5, 7, 8, 9];
    const arr2 = [];
    expect(binarySearchRecursive(arr2, 6)).toBe(-1);
    expect(binarySearchRecursive(arr2, 0)).toBe(-1);
    expect(binarySearchRecursive(arr1, -8, 0, arr1.length - 1)).toBe(1);
    expect(binarySearchRecursive(arr1, -5, 0, arr1.length - 1)).toBe(-1);
    expect(binarySearchRecursive(arr1, 0, 0, arr1.length - 1)).toBe(6);
    expect(binarySearchRecursive(arr2, 6, 0, arr1.length - 1)).toBe(-1);
    expect(binarySearchRecursive(arr2, 0, 0, arr1.length - 1)).toBe(-1);
    expect(binarySearchRecursive(arr1, 6, 0, arr1.length - 1)).toBe(-1);
    expect(binarySearchRecursive(arr1, -9, 0, arr1.length - 1)).toBe(0);
    expect(binarySearchRecursive(arr1, -8, 0, arr1.length - 1)).toBe(1);
    expect(binarySearchRecursive(arr1, -6, 0, arr1.length - 1)).toBe(2);
    expect(binarySearchRecursive(arr1, -4, 0, arr1.length - 1)).toBe(3);
    expect(binarySearchRecursive(arr1, -3, 0, arr1.length - 1)).toBe(4);
    expect(binarySearchRecursive(arr1, -2, 0, arr1.length - 1)).toBe(5);
    expect(binarySearchRecursive(arr1, 0, 0, arr1.length - 1)).toBe(6);
    expect(binarySearchRecursive(arr1, 1, 0, arr1.length - 1)).toBe(7);
    expect(binarySearchRecursive(arr1, 2, 0, arr1.length - 1)).toBe(8);
    expect(binarySearchRecursive(arr1, 3, 0, arr1.length - 1)).toBe(9);
    expect(binarySearchRecursive(arr1, 5, 0, arr1.length - 1)).toBe(10);
    expect(binarySearchRecursive(arr1, 7, 0, arr1.length - 1)).toBe(11);
    expect(binarySearchRecursive(arr1, 8, 0, arr1.length - 1)).toBe(12);
    expect(binarySearchRecursive(arr1, 9, 0, arr1.length - 1)).toBe(13);
  });
});
