class Stack {
  constructor() {
    this.top = -1;
    this.items = {};
  }

  peek() {
    return this.items[this.top];
  }

  push(value) {
    this.top += 1;
    this.items[this.top] = value;
  }

  pop() {
    this.top = this.top - 1;
    this.items[this.top];
  }
}

describe("My Stack", () => {
  let stack;
  beforeEach(() => {
    stack = new Stack();
  });
  it("is created empty", () => {
    expect(stack.top).toBe(-1);
    expect(stack.items).toEqual({});
  });
  it("can push to the top", () => {
    stack.push(1);
    expect(stack.top).toBe(0);
  });
  it("can pop off", () => {
    stack.push(1);
    stack.pop();
    expect(stack.top).toBe(-1);
  });
});
