var Queue = function () {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(queueMethods);

  someInstance.storage = {};

  someInstance.helper = 0;
  someInstance.helper1 = 0;

  return someInstance;
};

var queueMethods = {};


queueMethods.enqueue = function (value) {
  this.storage[this.helper] = value;
  this.helper++;

};

queueMethods.dequeue = function () {
  const result = this.storage[this.helper1];
  this.helper1++;


  return result;

};

queueMethods.size = function () {


  return this.helper - this.helper1 >= 0 ? this.helper - this.helper1 : 0;
};
