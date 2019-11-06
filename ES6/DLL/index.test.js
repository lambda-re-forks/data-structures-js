import { hello } from "./index";

describe("Hello", () => {
  it("should return hello", () => {
    const hi = hello();
    expect(hi).toBe("Hello World");
  });
});
