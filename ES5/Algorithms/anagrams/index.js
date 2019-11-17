// Given a word, return all the anagrams of that word in the English Language

function merge(a, b) {
  let sorted = "";
  while (a.length > 0 || b.length > 0) {
    if (b.length === 0) {
      sorted += a[0];
      a = a.substring(1);
    } else if (a.length === 0) {
      sorted += b[0];
      b = b.substring(1);
    } else {
      if (a[0] < b[0]) {
        sorted += a[0];
        a = a.substring(1);
      } else {
        sorted += b[0];
        b = b.substring(1);
      }
    }
  }
  return sorted;
}

function stringSort(str) {
  if (str.length <= 1) {
    return str;
  } else {
    let mid = Math.floor(str.length / 2);
    let left = str.slice(0, mid);
    let right = str.slice(mid, str.length + 1);
    left = stringSort(left);
    right = stringSort(right);
    return merge(left, right);
  }
}

function anagrams(word) {
  const fs = require("fs");
  let data = fs.readFileSync("words.txt", "utf8");
  let dict = {};
  data.split("\r\n").forEach(element => {
    let sorted = stringSort(element);
    if (!dict[sorted]) {
      dict[sorted] = [element];
    } else {
      dict[sorted].push(element);
    }
  });
  return dict[stringSort(word)];
}

// console.log(anagrams("aeprs"));
