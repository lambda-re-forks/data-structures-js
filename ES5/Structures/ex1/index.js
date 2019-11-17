const { HashTable } = require("../HashTable");

// we need to override the hash method in order to hash an int
HashTable.prototype.hash = function(key) {
  let x = ((key >> 16) ^ key) * 0x45d9f3b;
  x = ((x >> 16) ^ x) * 0x45d9f3b;
  x = (x >> 16) ^ x;
  return x;
};

function getIndicesOfItemWeights(weights, length, limit) {
  let ht = new HashTable(length);
  for (let i = 0; i < length; i++) {
    ht.insert(weights[i], i);
  }
  for (let i = 0; i < length; i++) {
    let difference = limit - weights[i];
    if (ht.retrieve(difference)) {
      return [i, ht.retrieve(difference)].sort((a, b) => b - a);
    }
  }
  return null;
}

module.exports = { getIndicesOfItemWeights };

// let weights_1 = [9];
// let answer_1 = getIndicesOfItemWeights(weights_1, 1, 9);
// console.log(answer_1);

// let weights_3 = [4, 6, 10, 15, 16];
// let answer_3 = getIndicesOfItemWeights(weights_3, 5, 21);
// console.log(answer_3);
