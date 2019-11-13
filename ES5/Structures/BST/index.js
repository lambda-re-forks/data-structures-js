const { Queue } = require("../Queue");
const { Stack } = require("../Stack");

function BinarySearchTree(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

BinarySearchTree.prototype.insert = function(value) {
  if (!this.value) {
    this.value = value;
  } else if (value < this.value) {
    if (!this.left) {
      this.left = new BinarySearchTree(value);
    } else {
      this.left.insert(value);
    }
  } else if (value > this.value) {
    if (!this.right) {
      this.right = new BinarySearchTree(value);
    } else {
      this.right.insert(value);
    }
  }
};
BinarySearchTree.prototype.contains = function(value) {
  if (value === this.value) {
    return true;
  } else if (value < this.value) {
    if (this.left) {
      return this.left.contains(value);
    } else {
      return false;
    }
  } else if (value > this.value) {
    if (this.right) {
      return this.right.contains(value);
    } else {
      return false;
    }
  }
};
BinarySearchTree.prototype.getMax = function() {
  let max = this.value;
  if (!this.right) {
    return max;
  } else {
    return this.right.getMax();
  }
};
BinarySearchTree.prototype.forEach = function(cb) {
  if (!this.value) {
    return;
  } else {
    cb(this.value);
    if (this.left) {
      this.left.forEach(cb);
    }
    if (this.right) {
      this.right.forEach(cb);
    }
  }
};
BinarySearchTree.prototype.inOrderPrint = function(node) {
  if (!node) {
    return;
  } else {
    if (node.left) {
      node.left.inOrderPrint(node.left);
    }
    console.log(node.value);
    if (node.right) {
      node.right.inOrderPrint(node.right);
    }
  }
};
BinarySearchTree.prototype.bftPrint = function(node) {
  let q = new Queue();
  q.enqueue(node);
  while (q.len() > 0) {
    let current = q.dequeue();
    console.log(current.value);
    if (current.left) {
      q.enqueue(current.left);
    }
    if (current.right) {
      q.enqueue(current.right);
    }
  }
};
BinarySearchTree.prototype.dftPrint = function(node) {
  let s = new Stack();
  s.push(node);
  while (s.len() > 0) {
    let current = s.pop();
    console.log(current.value);
    if (current.left) {
      s.push(current.left);
    }
    if (current.right) {
      s.push(current.right);
    }
  }
};

module.exports = { BinarySearchTree };
