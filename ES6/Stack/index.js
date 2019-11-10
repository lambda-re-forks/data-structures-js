class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

export class Stack {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }
  len = () => {
    return this.size;
  };
  push = value => {
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
  pop = () => {
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
