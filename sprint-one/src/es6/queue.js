class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.helper = 0;
    this.helper1 = 0;
    this.storage = {};
  }

  // Implement the methods below

  enqueue(value) {
    this.storage[this.helper] = value;
    this.helper++;

  };

  dequeue() {
    const result = this.storage[this.helper1];
    this.helper1++;


    return result;

  };

  size() {


    return this.helper - this.helper1 >= 0 ? this.helper - this.helper1 : 0;
  };

}
