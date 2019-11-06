export const hello = () => {
  return "Hello World";
};

export class ListNode {
  constructor(value, prev = null, next = null) {
    this.value = value;
    this.prev = prev;
    this.next = next;
  }
}

export class Dll {
  constructor(node = null) {
    this.head = node;
    this.tail = node;
    this.size = node === null ? 0 : 1;
  }
}
