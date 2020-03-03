var Stack = function () {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  var helper = 0;

  // Implement the methods below
  someInstance.push = function (value) {
    storage[helper] = value;
    helper++;
  };

  someInstance.pop = function () {
    if (helper) helper--;
    const result = storage[helper];

    return result;
  };

  someInstance.size = function () {
    return helper;
  };

  return someInstance;
};
