function countTh(word) {
  let count = 0;
  if (word.length <= 1) {
    return count;
  }
  if (word.substring(0, 2) == "th") {
    count++;
  }
  count += countTh(word.substring(1));
  return count;
}

module.exports = { countTh };

// const word = "";
// const count = countTh(word);
// console.log(count);

// const word1 = "abcthxyz";
// const count1 = countTh(word1);
// console.log(count1);
