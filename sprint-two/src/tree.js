var Tree = function (value) {
  var newTree = Object.create(treeMethods);
  newTree.value = value;

  // your code here
  newTree.children = [];  // fix me

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function (value) {
  this.children.push(Tree(value))
};

treeMethods.contains = function (target) {
  let result = false;
  for (let i = 0; i < this.children.length; i++) {
    const child = this.children[i];

    console.log(target, child)
    if (child.value === target) {
      return true;
      break
    } else if (child.children[0]) {
      result = child.children.map(chi => chi.contains(target))
      console.log(result)
    }
  }



  // console.log(result)
  return result;
};




/*
 * Complexity: What is the time complexity of the above functions?
 */
