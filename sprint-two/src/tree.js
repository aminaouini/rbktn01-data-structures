var Tree = function (value) {

  var newTree = Object.create(treeMethods);
  // your code here
  newTree.value = value;
  newTree.children = [];  // fix me
  newTree.result = false;

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function (value) {
  this.children.push(Tree(value))
};

treeMethods.contains = function (target) {

  if (this.value === target) {

    return true;

  }

  for (let i = 0; i < this.children.length; i++) {
    let child = this.children[i]
    // console.log(target, child)
    // console.log(this.result)

    if (child.contains(target)) {

      return true;
    }
  }


  // console.log(this.result)
  return this.result;
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
