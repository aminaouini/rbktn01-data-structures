class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};

    this.helper = 0;
  }


  // Implement the methods below
  push(value) {
    this.storage[this.helper] = value;
    this.helper++;
  };

  pop() {
    if (this.helper) this.helper--;
    const result = this.storage[this.helper];

    return result;
  };

  size() {
    return this.helper;
  };

}