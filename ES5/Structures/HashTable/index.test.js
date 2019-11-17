const { HashTable } = require("./index");

describe("HashTable", () => {
  it("should insert and retrieve", () => {
    let ht = new HashTable(8);

    ht.insert("key-0", "val-0");
    ht.insert("key-1", "val-1");
    ht.insert("key-2", "val-2");
    ht.insert("key-3", "val-3");
    ht.insert("key-4", "val-4");
    ht.insert("key-5", "val-5");
    ht.insert("key-6", "val-6");
    ht.insert("key-7", "val-7");
    ht.insert("key-8", "val-8");
    ht.insert("key-9", "val-9");

    expect(ht.retrieve("key-0")).toBe("val-0");
    expect(ht.retrieve("key-1")).toBe("val-1");
    expect(ht.retrieve("key-2")).toBe("val-2");
    expect(ht.retrieve("key-3")).toBe("val-3");
    expect(ht.retrieve("key-4")).toBe("val-4");
    expect(ht.retrieve("key-5")).toBe("val-5");
    expect(ht.retrieve("key-6")).toBe("val-6");
    expect(ht.retrieve("key-7")).toBe("val-7");
    expect(ht.retrieve("key-8")).toBe("val-8");
    expect(ht.retrieve("key-9")).toBe("val-9");
  });
  it("should overwrite correctly", () => {
    let ht = new HashTable(8);

    ht.insert("key-0", "val-0");
    ht.insert("key-1", "val-1");
    ht.insert("key-2", "val-2");
    ht.insert("key-3", "val-3");
    ht.insert("key-4", "val-4");
    ht.insert("key-5", "val-5");
    ht.insert("key-6", "val-6");
    ht.insert("key-7", "val-7");
    ht.insert("key-8", "val-8");
    ht.insert("key-9", "val-9");

    ht.insert("key-0", "new-val-0");
    ht.insert("key-1", "new-val-1");
    ht.insert("key-2", "new-val-2");
    ht.insert("key-3", "new-val-3");
    ht.insert("key-4", "new-val-4");
    ht.insert("key-5", "new-val-5");
    ht.insert("key-6", "new-val-6");
    ht.insert("key-7", "new-val-7");
    ht.insert("key-8", "new-val-8");
    ht.insert("key-9", "new-val-9");

    expect(ht.retrieve("key-0")).toBe("new-val-0");

    expect(ht.retrieve("key-1")).toBe("new-val-1");

    expect(ht.retrieve("key-2")).toBe("new-val-2");

    expect(ht.retrieve("key-3")).toBe("new-val-3");

    expect(ht.retrieve("key-4")).toBe("new-val-4");

    expect(ht.retrieve("key-5")).toBe("new-val-5");

    expect(ht.retrieve("key-6")).toBe("new-val-6");

    expect(ht.retrieve("key-7")).toBe("new-val-7");

    expect(ht.retrieve("key-8")).toBe("new-val-8");

    expect(ht.retrieve("key-9")).toBe("new-val-9");
  });
  it("should remove correctly", () => {
    let ht = new HashTable(8);

    ht.insert("key-0", "val-0");
    ht.insert("key-1", "val-1");
    ht.insert("key-2", "val-2");
    ht.insert("key-3", "val-3");
    ht.insert("key-4", "val-4");
    ht.insert("key-5", "val-5");
    ht.insert("key-6", "val-6");
    ht.insert("key-7", "val-7");
    ht.insert("key-8", "val-8");
    ht.insert("key-9", "val-9");

    expect(ht.retrieve("key-0")).toBe("val-0");

    expect(ht.retrieve("key-1")).toBe("val-1");

    expect(ht.retrieve("key-2")).toBe("val-2");

    expect(ht.retrieve("key-3")).toBe("val-3");

    expect(ht.retrieve("key-4")).toBe("val-4");

    expect(ht.retrieve("key-5")).toBe("val-5");

    expect(ht.retrieve("key-6")).toBe("val-6");

    expect(ht.retrieve("key-7")).toBe("val-7");

    expect(ht.retrieve("key-8")).toBe("val-8");

    expect(ht.retrieve("key-9")).toBe("val-9");

    ht.remove("key-9");
    ht.remove("key-8");
    ht.remove("key-7");
    ht.remove("key-6");
    ht.remove("key-5");
    ht.remove("key-4");
    ht.remove("key-3");
    ht.remove("key-2");
    ht.remove("key-1");
    ht.remove("key-0");

    expect(ht.retrieve("key-0")).toBeNull();

    expect(ht.retrieve("key-1")).toBeNull();

    expect(ht.retrieve("key-2")).toBeNull();

    expect(ht.retrieve("key-3")).toBeNull();

    expect(ht.retrieve("key-4")).toBeNull();

    expect(ht.retrieve("key-5")).toBeNull();

    expect(ht.retrieve("key-6")).toBeNull();

    expect(ht.retrieve("key-7")).toBeNull();

    expect(ht.retrieve("key-8")).toBeNull();

    expect(ht.retrieve("key-9")).toBeNull();
  });
  it("should resize correctly", () => {
    let ht = new HashTable(8);

    // ht.insert("key-0", "val-0");
    // ht.insert("key-1", "val-1");
    // ht.insert("key-2", "val-2");
    // ht.insert("key-3", "val-3");
    // ht.insert("key-4", "val-4");
    // ht.insert("key-5", "val-5");
    // ht.insert("key-6", "val-6");
    // ht.insert("key-7", "val-7");
    // ht.insert("key-8", "val-8");
    // ht.insert("key-9", "val-9");

    ht.resize();

    expect(ht.storage.length).toBe(16);

    // expect(ht.retrieve("key-0")).toBe("val-0");

    // expect(ht.retrieve("key-1")).toBe("val-1");

    // expect(ht.retrieve("key-2")).toBe("val-2");

    // expect(ht.retrieve("key-3")).toBe("val-3");

    // expect(ht.retrieve("key-4")).toBe("val-4");

    // expect(ht.retrieve("key-5")).toBe("val-5");

    // expect(ht.retrieve("key-6")).toBe("val-6");

    // expect(ht.retrieve("key-7")).toBe("val-7");

    // expect(ht.retrieve("key-8")).toBe("val-8");

    // expect(ht.retrieve("key-9")).toBe("val-9");
  });
});
