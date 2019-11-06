export const hello = () => {
  return "Hello World";
};

export class ListNode {
  constructor(value, prev = null, next = null) {
    this.value = value;
    this.prev = prev;
    this.next = next;
  }
  insertAfter = value => {
    const newNode = new ListNode(value);
    if (this.next) {
      this.next.prev = newNode;
      this.next = newNode;
    } else {
      this.next = newNode;
    }
  };
  insertBefore = value => {
    const newNode = new ListNode(value);
    if (this.prev) {
      this.prev.next = newNode;
      this.prev = newNode;
    } else {
      this.prev = newNode;
    }
  };
  delete = () => {
    if (this.next) {
      this.next.prev = this.prev;
    }
    if (this.prev) {
      this.prev.next = this.next;
    }
  };
}

export class Dll {
  constructor(node = null) {
    this.head = node;
    this.tail = node;
    this.size = node === null ? 0 : 1;
  }
  len = () => {
    return this.size;
  };
  removeFromHead = () => {};
  addToTail = value => {
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
  addToHead = () => {};
  removeFromTail = () => {};
  moveToFront = () => {};
  moveToEnd = () => {};
  delete = () => {};
  getMax = () => {};
}
