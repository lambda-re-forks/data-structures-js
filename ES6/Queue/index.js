class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

export class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }
  len = () => {
    return this.size;
  };
  enqueue = value => {
    let newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.size++;
  };
  dequeue = () => {
    if (!this.head) {
      return null;
    } else {
      let val = this.head.value;
      this.head = this.head.next;
      this.size--;
      return val;
    }
  };
}
