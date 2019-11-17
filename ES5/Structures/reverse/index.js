function Node(value = null, nextNode = null) {
  this.value = value;
  this.nextNode = nextNode;
}

Node.prototype.getValue = function() {
  return this.value;
};

Node.prototype.getNext = function() {
  return this.nextNode;
};

Node.prototype.setNext = function(node) {
  this.nextNode = node;
};

function LinkedList() {
  this.head = null;
}

LinkedList.prototype.addToHead = function(value) {
  let node = new Node(value);
  if (this.head !== null) {
    node.setNext(this.head);
  }
  this.head = node;
};

LinkedList.prototype.contains = function(value) {
  if (this.head === null) {
    return false;
  }
  let current = this.head;
  while (current) {
    if (current.getValue() === value) {
      return true;
    }
    current = current.getNext();
  }
  return false;
};

LinkedList.prototype.reverseList = function() {
  let current = this.head;
  let prev = null;
  while (current) {
    let next = current.getNext();
    if (next === null) {
      this.head = current;
    }
    current.setNext(prev);
    prev = current;
    current = next;
  }
  return;
};

LinkedList.prototype.print = function() {
  let list = [];
  let current = this.head;
  while (current) {
    list.push(current.value);
    current = current.getNext();
  }
  return list;
};

module.exports = { LinkedList };

// let list = new LinkedList();
// list.addToHead(1);
// list.addToHead(2);
// list.addToHead(3);
// list.addToHead(4);
// list.addToHead(5);
// console.log(list.head.value);
// console.log(list.print());
// list.reverseList();
// console.log(list.print());
// console.log(list.head.value);
// console.log(list.head.getNext().value);
// console.log(list.head.getNext().getNext().value);
