function merge(arrA, arrB) {
  const result = [];
  while (arrA.length > 0 || arrB.length > 0) {
    if (!arrA.length) {
      result.push(arrB.shift());
    } else if (!arrB.length) {
      result.push(arrA.shift());
    } else {
      if (arrA[0] < arrB[0]) {
        result.push(arrA.shift());
      } else {
        result.push(arrB.shift());
      }
    }
  }
  return result;
}

function mergeSort(arr) {
  if (arr.length > 1) {
    let middle = Math.floor(arr.length / 2);
    let left = arr.slice(0, middle);
    let right = arr.slice(middle, arr.length + 1);
    left = mergeSort(left);
    right = mergeSort(right);
    return merge(left, right);
  } else {
    return arr;
  }
}

module.exports = { mergeSort };
