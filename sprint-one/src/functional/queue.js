var Queue = function () {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  var helper = 0;
  var helper1 = 0;
  // Implement the methods below

  someInstance.enqueue = function (value) {
    storage[helper] = value;
    helper++;

  };

  someInstance.dequeue = function () {
    const result = storage[helper1];
    helper1++;


    return result;

  };

  someInstance.size = function () {


    return helper - helper1 >= 0 ? helper - helper1 : 0;
  };

  return someInstance;
};
