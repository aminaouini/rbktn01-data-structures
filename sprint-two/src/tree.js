var Tree = function (value) {
  var newTree = Object.create(treeMethods);
  newTree.value = value;

  // your code here
  newTree.children = [];  // fix me
  newTree.result = false;

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function (value) {
  this.children.push(Tree(value))
};

treeMethods.contains = function (target) {
  this.result = false;
  for (let i = 0; i < this.children.length; i++) {
    const child = this.children[i];

    console.log(target, child)

    if (child.value === target) {
      this.result = true;

    }
    // console.log(this.result)

    else {
      treeMethods.contains(target)
    }
  }
  console.log(this.result)
  return this.result;
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
