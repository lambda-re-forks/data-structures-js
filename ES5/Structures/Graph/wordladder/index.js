const { Queue } = require("../../Queue");
const fs = require("fs");

const file = fs.readFileSync("./short-words.txt", "utf-8");
const data = file.split("\r\n");
const wordSet = new Set();
for (let word of data) {
  wordSet.add(word);
}
let allLetters = new Array(26).fill(null);
let counter = 0;
for (let i = 97; i <= 122; i++) {
  allLetters[counter] = String.fromCharCode(i);
  counter++;
}
function getNeighbors(word, wordSet) {
  let neighbors = [];
  for (let i = 0; i < word.length; i++) {
    for (let j = 0; j < allLetters.length; j++) {
      let testWord = word.replace(word[i], allLetters[j]);
      if (wordSet.has(testWord) && testWord !== word) {
        neighbors.push(testWord);
      }
    }
  }
  return neighbors;
}
function ladder(startWord, endWord) {
  const q = new Queue();
  q.enqueue([startWord]);
  while (q.len() > 0) {
    let currentPath = q.dequeue();
    let current = currentPath[currentPath.length - 1];
    if (current === endWord) {
      return currentPath;
    } else {
      for (let neighbor of getNeighbors(current, wordSet)) {
        let pathCopy = currentPath.slice();
        pathCopy.push(neighbor);
        q.enqueue(pathCopy);
      }
    }
  }
}

console.log(ladder("hit", "cog"));
