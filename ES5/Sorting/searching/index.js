function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }
  return -1;
}
function binarySearch(arr, target) {
  let high = arr.length;
  let low = 0;
  if (arr.length === 0) {
    return -1;
  }
  while (low <= high) {
    let mid = Math.floor((high + low) / 2);
    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      low = mid + 1;
    } else if (arr[mid] > target) {
      high = mid - 1;
    }
  }
  return -1;
}
function binarySearchRecursive(arr, target, low, high) {
  let mid = Math.floor((high + low) / 2);
  if (low > high || arr.length === 0) {
    return -1;
  }
  if (arr[mid] === target) {
    return mid;
  } else if (arr[mid] < target) {
    low = mid + 1;
    return binarySearchRecursive(arr, target, low, high);
  } else if (arr[mid] > target) {
    high = mid - 1;
    return binarySearchRecursive(arr, target, low, high);
  }
}

module.exports = { linearSearch, binarySearch, binarySearchRecursive };
