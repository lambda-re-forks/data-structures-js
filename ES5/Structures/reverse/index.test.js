const { LinkedList } = require("./index");

describe("Reverse Problem", () => {
  let list;
  beforeEach(() => {
    list = new LinkedList();
  });

  it("should add to the head", () => {
    list.addToHead(1);
    expect(list.head.value).toBe(1);
    list.addToHead(2);
    expect(list.head.value).toBe(2);
  });
  it("should return true if the list contains an item", () => {
    list.addToHead(1);
    list.addToHead(2);
    list.addToHead(10);
    expect(list.contains(2)).toBe(true);
    expect(list.contains(10)).toBe(true);
    expect(list.contains(1000)).toBe(false);
  });
  it("should return null if we try to reverse and empty list", () => {
    list.reverseList();
    expect(list.head).toBe(null);
  });
  it("should handle a single element", () => {
    list.addToHead(1);
    list.reverseList();
    expect(list.head.value).toBe(1);
  });
  it("should handle a long reverse", () => {
    list.addToHead(1);
    list.addToHead(2);
    list.addToHead(3);
    list.addToHead(4);
    list.addToHead(5);
    expect(list.head.value).toBe(5);
    list.reverseList();
    expect(list.head.value).toBe(1);
    expect(list.head.getNext().value).toBe(2);
    expect(list.head.getNext().getNext().value).toBe(3);
  });
});
