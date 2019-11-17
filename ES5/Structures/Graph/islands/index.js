// Write a function that takes a 2D binary array and returns the number of 1 islands. An island consists of 1s that are connected to the north, south, east or west. For example:

// [[0, 1, 0, 1, 0],
// [1, 1, 0, 1, 1],
// [0, 0, 1, 0, 0],
// [1, 0, 1, 0, 0],
// [1, 1, 0, 0, 0]]

const { Stack } = require("../../Stack");

function getNeighbors(x, y, matrix) {
  const neighbors = [];
  let n = y - 1;
  let s = y + 1;
  let e = x + 1;
  let w = x - 1;
  if (y > 0 && matrix[n][x] === 1) {
    neighbors.push([x, n]);
  }
  if (y < matrix.length - 1 && matrix[s][x] === 1) {
    neighbors.push([x, s]);
  }
  if (x > 0 && matrix[y][w] === 1) {
    neighbors.push([w, y]);
  }
  if (x < matrix[0].length - 1 && matrix[y][e] === 1) {
    neighbors.push([e, y]);
  }
  return neighbors;
}
function dftIslands(startX, startY, matrix, visited) {
  const s = new Stack();
  s.push([startX, startY]);
  while (s.len() > 0) {
    let v = s.pop();
    let x = v[0];
    let y = v[1];
    if (!visited[y][x]) {
      visited[y][x] = true;
      for (let neighbor of getNeighbors(x, y, matrix)) {
        s.push(neighbor);
      }
    }
  }
  return visited;
}
function islandCounter(matrix) {
  let visited = [];
  let counter = 0;
  for (let i = 0; i < matrix.length; i++) {
    visited.push(new Array(matrix[i].length).fill(false));
  }
  for (let y = 0; y < matrix.length; y++) {
    for (let x = 0; x < matrix[0].length; x++) {
      if (!visited[y][x]) {
        if (matrix[y][x] === 1) {
          visited = dftIslands(x, y, matrix, visited);
          counter++;
        }
      }
    }
  }
  return counter;
}

const islands = [
  [0, 1, 0, 1, 0],
  [1, 1, 0, 1, 1],
  [0, 0, 1, 0, 0],
  [1, 0, 1, 0, 0],
  [1, 1, 0, 0, 0]
];

console.log(islandCounter(islands));

const big_islands = [
  [1, 0, 0, 1, 1, 0, 1, 1, 0, 1],
  [0, 0, 1, 1, 0, 1, 0, 0, 0, 0],
  [0, 1, 1, 1, 0, 0, 0, 1, 0, 1],
  [0, 0, 1, 0, 0, 1, 0, 0, 1, 1],
  [0, 0, 1, 1, 0, 1, 0, 1, 1, 0],
  [0, 1, 0, 1, 1, 1, 0, 1, 0, 0],
  [0, 0, 1, 0, 0, 1, 1, 0, 0, 0],
  [1, 0, 1, 1, 0, 0, 0, 1, 1, 0],
  [0, 1, 1, 0, 0, 0, 1, 1, 0, 0],
  [0, 0, 1, 1, 0, 1, 0, 0, 1, 0]
];

console.log(islandCounter(big_islands));
