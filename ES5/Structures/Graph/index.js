const { Queue } = require("../Queue");
const { Stack } = require("../Stack");

function Graph() {
  this.vertices = {};
}

Graph.prototype.addVertex = function(vertex) {
  this.vertices[vertex] = new Set();
};

Graph.prototype.addEdge = function(v1, v2) {
  if (this.vertices[v1] && this.vertices[v2]) {
    this.vertices[v1].add(v2);
  } else {
    throw new IndexError("That vertex does not exist");
  }
};

Graph.prototype.addUndirectedEdge = function(v1, v2) {
  if (this.vertices[v1] && this.vertices[v2]) {
    this.vertices[v1].add(v2);
    this.vertices[v2].add(v1);
  } else {
    throw new IndexError("That vertex does not exist");
  }
};

Graph.prototype.getNeighbors = function(vertexId) {
  return this.vertices[vertexId];
};

Graph.prototype.bft = function(startingVertex) {
  // Print each vertex in breadth-first order
  // beginning from starting_vertex.
  const q = new Queue();
  const visited = new Set();
  q.enqueue(startingVertex);
  while (q.len() > 0) {
    let current = q.dequeue();
    if (!visited.has(current)) {
      visited.add(current);
      console.log(current);
      for (let neighbor of this.getNeighbors(current)) {
        q.enqueue(neighbor);
      }
    }
  }
};

Graph.prototype.dft = function(startingVertex) {
  // Print each vertex in depth-first order
  // beginning from starting_vertex.
  const s = new Stack();
  const visited = new Set();
  s.push(startingVertex);
  while (s.len() > 0) {
    let current = s.pop();
    if (!visited.has(current)) {
      visited.add(current);
      console.log(current);
      for (let neighbor of this.getNeighbors(current)) {
        s.push(neighbor);
      }
    }
  }
};

Graph.prototype.dftRecursive = function(startingVertex, visited = null) {
  // Print each vertex in depth-first order
  // beginning from starting_vertex.
  // This should be done using recursion.
  if (visited === null) {
    visited = new Set();
  }
  if (!visited.has(startingVertex)) {
    console.log(startingVertex);
    visited.add(startingVertex);
    for (let neighbor of this.getNeighbors(startingVertex)) {
      this.dftRecursive(neighbor, visited);
    }
  }
};
Graph.prototype.bfs = function(startingVertex, destinationVertex) {
  // Return a list containing the shortest path from
  // starting_vertex to destination_vertex in
  // breath-first order.
  const q = new Queue();
  const visited = new Set();
  q.enqueue([startingVertex]);
  while (q.len() > 0) {
    let currentPath = q.dequeue();
    let current = currentPath[currentPath.length - 1];
    if (!visited.has(current)) {
      if (current === destinationVertex) {
        return currentPath;
      }
      visited.add(current);
      for (let neighbor of this.getNeighbors(current)) {
        let pathCopy = currentPath.slice();
        pathCopy.push(neighbor);
        q.enqueue(pathCopy);
      }
    }
  }
};

Graph.prototype.bfsDistances = function(startingVertex, destinationVertex) {
  // Return a list containing the shortest path from
  // starting_vertex to destination_vertex in
  // breath-first order.
  const q = new Queue();
  q.enqueue(startingVertex);
  //  We'll make a dictionary that stores the vertexes as keys, and each value is a dictionary containing the vertex's distance from source and it's previous vertex
  const dist = {};
  dist[startingVertex] = { distance: 0, previous_vertex: null };
  while (q.len() > 0) {
    let current = q.dequeue();
    for (let neighbor of this.getNeighbors(current)) {
      if (!dist[neighbor]) {
        dist[neighbor] = {
          distance: dist[current]["distance"] + 1,
          previous_vertex: current
        };
        q.enqueue(neighbor);
      }
    }
  }
  //   if our destination_vertex never got added to our distance dictionary, it doesn't exist, there is no path
  if (!dist[destinationVertex]) {
    return `Could not find a path from ${startingVertex} to ${destinationVertex}`;
  } else {
    // Now we have our shortest paths, we can go to destination vertex in our distance dictionary, and follow it's path backwards.
    let index = dist[destinationVertex].distance;
    console.log(index);
    let path = new Array(index + 1).fill(null);
    let current = dist[destinationVertex];
    path[index] = destinationVertex;
    while (current.previous_vertex !== null) {
      index -= 1;
      path[index] = current.previous_vertex;
      current = dist[current.previous_vertex];
    }
    return path;
  }
};

Graph.prototype.dfs = function(startingVertex, destinationVertex) {
  // Return a list containing a path from
  // starting_vertex to destination_vertex in
  // depth-first order.
  const s = new Stack();
  s.push(startingVertex);
  let path = [];
  let visited = new Set();
  while (s.len() > 0) {
    let current = s.pop();
    if (current === destinationVertex) {
      path.push(current);
      return path;
    }
    if (!visited.has(current)) {
      path.push(current);
      visited.add(current);
      for (let neighbor of this.vertices[current]) {
        s.push(neighbor);
      }
    }
  }
  return `Could not find a path from ${startingVertex} to ${destinationVertex}`;
};

let graph = new Graph();

graph.addVertex(1);
graph.addVertex(2);
graph.addVertex(3);
graph.addVertex(4);
graph.addVertex(5);
graph.addVertex(6);
graph.addVertex(7);
graph.addEdge(5, 3);
graph.addEdge(6, 3);
graph.addEdge(7, 1);
graph.addEdge(4, 7);
graph.addEdge(1, 2);
graph.addEdge(7, 6);
graph.addEdge(2, 4);
graph.addEdge(3, 5);
graph.addEdge(2, 3);
graph.addEdge(4, 6);

// Should print:
// {1: {2}, 2: {3, 4}, 3: {5}, 4: {6, 7}, 5: {3}, 6: {3}, 7: {1, 6}}
console.log(graph.vertices);

// Valid DFT paths:
//     1, 2, 3, 5, 4, 6, 7
//     1, 2, 3, 5, 4, 7, 6
//     1, 2, 4, 7, 6, 3, 5
//     1, 2, 4, 6, 3, 5, 7

// graph.dft(1);

// Valid BFT paths:
//     1, 2, 3, 4, 5, 6, 7
//     1, 2, 3, 4, 5, 7, 6
//     1, 2, 3, 4, 6, 7, 5
//     1, 2, 3, 4, 6, 5, 7
//     1, 2, 3, 4, 7, 6, 5
//     1, 2, 3, 4, 7, 5, 6
//     1, 2, 4, 3, 5, 6, 7
//     1, 2, 4, 3, 5, 7, 6
//     1, 2, 4, 3, 6, 7, 5
//     1, 2, 4, 3, 6, 5, 7
//     1, 2, 4, 3, 7, 6, 5
//     1, 2, 4, 3, 7, 5, 6

// graph.bft(1);

// Valid DFT recursive paths:
//     1, 2, 3, 5, 4, 6, 7
//     1, 2, 3, 5, 4, 7, 6
//     1, 2, 4, 7, 6, 3, 5
//     1, 2, 4, 6, 3, 5, 7

// graph.dftRecursive(1);

// Valid BFS path:
//     [1, 2, 4, 6]

// console.log(graph.bfs(1, 6));
// console.log(graph.bfsDistances(1, 6));

// Valid DFS paths:
//     [1, 2, 4, 6]
//     [1, 2, 4, 7, 6]

console.log(graph.dfs(1, 6));
