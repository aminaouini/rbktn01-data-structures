var Queue = function () {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.helper1 = 0;
  this.helper = 0;
  this.storage = {};
};


Queue.prototype.enqueue = function (value) {
  this.storage[this.helper] = value;
  this.helper++;

};

Queue.prototype.dequeue = function () {
  const result = this.storage[this.helper1];
  this.helper1++;


  return result;

};

Queue.prototype.size = function () {


  return this.helper - this.helper1 >= 0 ? this.helper - this.helper1 : 0;
};