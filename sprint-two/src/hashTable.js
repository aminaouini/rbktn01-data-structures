

var HashTable = function () {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.getIndex = getIndexBelowMaxForKey;

HashTable.prototype.insert = function (k, v) {
  var index = this.getIndex(k, this._limit);
  // var oldIndex = oldHashFunction(k, this._limit)
  // if (!!oldHashFunction) { this._storage.set(oldIndex, v) }
  // else if (!oldHashFunction) { this._storage.set(index, v) }

  this._storage.set(index, v)
};

HashTable.prototype.retrieve = function (k) {
  var index = this.getIndex(k, this._limit);
  // var oldIndex = oldHashFunction(k, this._limit)
  // if (!!oldHashFunction) { return this._storage.get(oldIndex) }
  // else if (!oldHashFunction) { }
  return this._storage.get(index)
};

HashTable.prototype.remove = function (k) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  this._storage.set(index, undefined);

};



/*
 * Complexity: What is the time complexity of the above functions?
 */


