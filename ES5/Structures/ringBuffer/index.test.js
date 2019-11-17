const { RingBuffer } = require("./index");

describe("RingBuffer", () => {
  let buffer;
  beforeEach(() => {
    buffer = new RingBuffer(5);
  });
  it("should work", () => {
    expect(buffer.storage.length).toBe(5);

    buffer.append("a");
    buffer.append("b");
    buffer.append("c");
    buffer.append("d");
    expect(buffer.storage.length).toBe(5);
    expect(buffer.get()).toEqual(["a", "b", "c", "d"]);

    buffer.append("e");
    expect(buffer.storage.length).toBe(5);
    expect(buffer.get()).toEqual(["a", "b", "c", "d", "e"]);

    buffer.append("f");
    expect(buffer.storage.length).toBe(5);
    expect(buffer.get()).toEqual(["f", "b", "c", "d", "e"]);

    buffer.append("g");
    buffer.append("h");
    buffer.append("i");
    expect(buffer.storage.length).toBe(5);
    expect(buffer.get()).toEqual(["f", "g", "h", "i", "e"]);
  });
});
