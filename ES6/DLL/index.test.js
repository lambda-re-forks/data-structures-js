import { hello, ListNode, Dll } from "./index";

describe("Hello", () => {
  it("should return hello", () => {
    const hi = hello();
    expect(hi).toBe("Hello World");
  });
});

describe("ListNode", () => {
  let node;
  let dll;
  beforeAll(() => {
    node = new ListNode(1);
    dll = new Dll(node);
  });

  it("should delete itself", () => {
    node_1 = ListNode(3);
    node_2 = ListNode(4);
    node_3 = ListNode(5);

    node_1.next = node_2;
    node_2.next = node_3;
    node_2.prev = node_1;
    node_3.prev = node_2;

    node_2.delete();

    expect(node_1.next).toBe(node_3);
    expect(node_3.prev).toBe(node_1);
  });
  it("should insert a node before itself", () => {
    node.insert_before(0);
    expect(self.node.prev.value).toBe(0);
  });
  it("should insert a node after itself", () => {
    node.insert_after(2);
    expect(node.next.value).toBe(2);
  });
});

describe("Dll", () => {
  let node;
  let dll;

  beforeAll(() => {
    node = new ListNode(1);
    dll = new Dll(node);
  });

  it("should add to head", () => {
    expect(dll.head.value).toBe(1);

    dll.add_to_head(10);
    expect(dll.head.value).toBe(10);
    expect(dll.head.next.value).toBe(1);
    expect(len(dll)).toBe(2);
  });

  it("should remove an item from the tail", () => {
    dll.remove_from_tail();
    expect(dll.head).toBeNull();
    expect(dll.tail).toBeNull();
    expect(len(dll)).toBe(0);

    dll.add_to_tail(33);
    expect(dll.head.value).toBe(33);
    expect(dll.tail.value).toBe(33);
    expect(len(dll)).toBe(1);
    expect(dll.remove_from_tail()).toBe(33);
    expect(len(dll)).toBe(0);

    dll.add_to_tail(68);
    expect(len(dll)).toBe(1);
    expect(dll.remove_from_tail()).toBe(68);
    expect(len(dll)).toBe(0);
  });

  it("should remove an item from the head", () => {
    dll.remove_from_head();
    expect(dll.head).toBeNull();
    expect(dll.tail).toBeNull();
    expect(len(dll)).toBe(0);

    dll.add_to_head(2);
    expect(dll.head.value).toBe(2);
    expect(dll.tail.value).toBe(2);
    expect(len(dll)).toBe(1);
    expect(dll.remove_from_head()).toBe(2);
    expect(len(dll)).toBe(0);

    dll.add_to_head(55);
    expect(len(dll)).toBe(1);
    expect(dll.remove_from_head()).toBe(55);
    expect(len(dll)).toBe(0);
  });

  it("should remove add to tail", () => {
    expect(dll.tail.value).toBe(1);
    expect(len(dll)).toBe(1);

    dll.add_to_tail(30);
    expect(dll.tail.prev.value).toBe(1);
    expect(dll.tail.value).toBe(30);
    expect(len(dll)).toBe(2);

    dll.add_to_tail(20);
    expect(dll.tail.prev.value).toBe(30);
    expect(dll.tail.value).toBe(20);
    expect(len(dll)).toBe(3);
  });

  it("should move a node to the end", () => {
    dll.add_to_head(40);
    expect(dll.tail.value).toBe(1);
    expect(dll.head.value).toBe(40);

    dll.move_to_end(dll.head);
    expect(dll.tail.value).toBe(40);
    expect(dll.tail.prev.value).toBe(1);
    expect(len(dll)).toBe(2);

    dll.add_to_tail(4);
    dll.move_to_end(dll.head.next);
    expect(dll.tail.value).toBe(40);
    expect(dll.tail.prev.value).toBe(4);
    expect(len(dll)).toBe(3);
  });

  it("should move a node to the front", () => {
    dll.add_to_tail(3);
    expect(dll.head.value).toBe(1);
    expect(dll.tail.value).toBe(3);

    dll.move_to_front(dll.tail);
    expect(dll.head.value).toBe(3);
    expect(dll.head.next.value).toBe(1);
    expect(len(dll)).toBe(2);

    dll.add_to_head(29);
    dll.move_to_front(dll.head.next);
    expect(dll.head.value).toBe(3);
    expect(dll.head.next.value).toBe(29);
    expect(len(dll)).toBe(3);
  });

  it("should delete a node", () => {
    dll.delete(node);
    expect(dll.head).toBeNull();
    expect(dll.tail).toBeNull();
    expect(len(dll)).toBe(0);

    dll.add_to_tail(1);
    dll.add_to_head(9);
    dll.add_to_tail(6);

    dll.delete(dll.head);
    expect(dll.head.value).toBe(1);
    expect(dll.tail.value).toBe(6);
    expect(len(dll)).toBe(2);

    dll.delete(dll.head);
    expect(dll.head.value).toBe(6);
    expect(dll.tail.value).toBe(6);
    expect(len(dll)).toBe(1);
  });

  it("should return its maximum value", () => {
    expect(dll.get_max()).toBe(1);
    dll.add_to_tail(100);
    expect(dll.get_max()).toBe(100);
    dll.add_to_tail(55);
    expect(dll.get_max()).toBe(100);
    dll.add_to_tail(101);
    expect(dll.get_max()).toBe(101);
  });
});
