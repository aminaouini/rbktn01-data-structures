var Stack = function () {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var obj = {};

  _(obj).extend(stackMethods);

  obj.storage = {};

  obj.helper = 0;

  return obj;
};

var stackMethods = {};


// Implement the methods below
stackMethods.push = function (value) {
  this.storage[this.helper] = value;
  this.helper++;
};

stackMethods.pop = function () {
  if (this.helper) this.helper--;
  const result = this.storage[this.helper];

  return result;
};

stackMethods.size = function () {
  return this.helper;
};

