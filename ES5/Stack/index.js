function Node(value) {
  this.value = value;
  this.next = null;
}

function Stack() {
  this.head = null;
  this.tail = null;
  this.size = 0;
}

Stack.prototype.len = function() {
  return this.size;
};
Stack.prototype.push = function(value) {
  let newNode = new Node(value);
  if (!this.head) {
    this.head = newNode;
    this.tail = newNode;
  } else {
    newNode.next = this.head;
    this.head = newNode;
  }
  this.size++;
};
Stack.prototype.pop = function() {
  if (!this.head) {
    return null;
  } else {
    let val = this.head.value;
    this.head = this.head.next;
    this.size--;
    return val;
  }
};

module.exports = { Stack };
