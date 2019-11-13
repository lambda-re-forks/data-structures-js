function ListNode(value, prev = null, next = null) {
  this.value = value;
  this.prev = prev;
  this.next = next;
}
ListNode.prototype.insertAfter = function(value) {
  const newNode = new ListNode(value);
  if (this.next) {
    this.next.prev = newNode;
    this.next = newNode;
  } else {
    this.next = newNode;
  }
};

ListNode.prototype.insertBefore = function(value) {
  const newNode = new ListNode(value);
  if (this.prev) {
    this.prev.next = newNode;
    this.prev = newNode;
  } else {
    this.prev = newNode;
  }
};

ListNode.prototype.delete = function() {
  if (this.next) {
    this.next.prev = this.prev;
  }
  if (this.prev) {
    this.prev.next = this.next;
  }
};

function Dll(node = null) {
  this.head = node;
  this.tail = node;
  this.size = node === null ? 0 : 1;
}
Dll.prototype.len = function() {
  return this.size;
};
Dll.prototype.removeFromHead = function() {
  let oldValue;
  if (!this.head) {
    oldValue = null;
  } else if (!this.head.next) {
    oldValue = this.head.value;
    this.head = null;
    this.tail = null;
  } else {
    oldValue = this.head.value;
    const newHead = this.head.next;
    newHead.prev = null;
    this.head = newHead;
  }
  this.size -= 1;
  return oldValue;
};
Dll.prototype.addToTail = function(value) {
  const newNode = new ListNode(value);
  if (!this.head) {
    this.head = newNode;
    this.tail = newNode;
  } else {
    newNode.prev = this.tail;
    this.tail.next = newNode;
    this.tail = newNode;
  }
  this.size += 1;
};
Dll.prototype.addToHead = function(value) {
  const newNode = new ListNode(value);
  if (!this.head) {
    this.head = newNode;
    this.tail = newNode;
  } else {
    newNode.next = this.head;
    this.head.prev = newNode;
    this.head = newNode;
  }
  this.size += 1;
};
Dll.prototype.removeFromTail = function() {
  let oldValue;
  if (!this.tail) {
    oldValue = null;
  } else if (!this.tail.prev) {
    oldValue = this.tail.value;
    this.head = null;
    this.tail = null;
  } else {
    oldValue = this.tail.value;
    const newTail = this.tail.prev;
    newTail.next = null;
    this.tail = newTail;
  }
  this.size -= 1;
  return oldValue;
};
Dll.prototype.moveToFront = function(node) {
  if (this.head.value !== node.value) {
    if (this.tail.value === node.value) {
      const newValue = this.removeFromTail();
      this.addToHead(newValue);
    } else {
      node.prev.next = node.next;
      node.next.prev = node.prev;
      node.next = this.head;
      this.head.prev = node;
      this.head = node;
    }
  }
};
Dll.prototype.moveToEnd = function(node) {
  if (this.tail.value !== node.value) {
    if (this.head.value === node.value) {
      const newValue = this.removeFromHead();
      this.addToTail(newValue);
    } else {
      node.prev.next = node.next;
      node.next.prev = node.prev;
      node.prev = this.tail;
      this.tail.next = node;
      this.tail = node;
    }
  }
};
Dll.prototype.delete = function(node) {
  if (node.value === this.head.value && node.value === this.tail.value) {
    this.head = null;
    this.tail = null;
  } else if (node.value === this.tail.value) {
    this.tail.prev.next = null;
    this.tail = this.tail.prev;
  } else if (node.value === this.head.value) {
    this.head.next.prev = null;
    this.head = this.head.next;
  } else {
    node.prev.next = node.next;
    node.next.prev = node.prev;
  }
  this.size -= 1;
  return node.value;
};
Dll.prototype.getMax = function() {
  let current = this.head;
  let max = null;
  while (current) {
    if (current.value > max || max === null) {
      max = current.value;
    }
    current = current.next;
  }
  return max;
};

module.exports = {
  ListNode,
  Dll
};
