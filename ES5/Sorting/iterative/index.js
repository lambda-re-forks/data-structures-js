function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let counter = i;
    let minimumElement = arr[i];
    let minimumIndex = i;
    while (counter < arr.length) {
      if (arr[counter] < minimumElement) {
        minimumElement = arr[counter];
        minimumIndex = counter;
      }
      counter++;
    }
    let temp = arr[i];
    arr[i] = minimumElement;
    arr[minimumIndex] = temp;
  }
  return arr;
}

function bubbleSort(arr) {
  let swapped = true;
  while (swapped) {
    swapped = false;
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swapped = true;
      }
    }
  }
  return arr;
}

function countSort(arr, maximum = -1) {
  const sorted = new Array(arr.length);
  for (let element of arr) {
    if (element > maximum) {
      maximum = element;
    }
  }
  const countArray = new Array(maximum + 1).fill(0);
  for (let element of arr) {
    if (element < 0) {
      return "Error, negative numbers not allowed in Count Sort";
    } else {
      countArray[element]++;
    }
  }
  for (let i = 1; i < countArray.length; i++) {
    countArray[i] += countArray[i - 1];
  }
  for (let element of arr) {
    sorted[countArray[element] - 1] = element;
    countArray[element]--;
  }
  return sorted;
}

function insertionSort(arr) {
  let i = 1;
  while (i < arr.length) {
    if (arr[i] < arr[i - 1]) {
      let j = i;
      while (j >= 0) {
        if (arr[j] < arr[j - 1]) {
          let temp = arr[j - 1];
          arr[j - 1] = arr[j];
          arr[j] = temp;
        }
        j--;
      }
    }
    i++;
  }
  return arr;
}

module.exports = {
  selectionSort,
  bubbleSort,
  countSort,
  insertionSort
};
