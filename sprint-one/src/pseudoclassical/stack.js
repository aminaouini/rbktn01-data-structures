var Stack = function () {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.helper = 0;
  this.storage = {};
};


Stack.prototype.push = function (value) {
  this.storage[this.helper] = value;
  this.helper++;
};

Stack.prototype.pop = function () {
  if (this.helper) this.helper--;
  const result = this.storage[this.helper];

  return result;
};

Stack.prototype.size = function () {
  return this.helper;
};