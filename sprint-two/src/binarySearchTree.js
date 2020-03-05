var BinarySearchTree = function (value) {
    let obj = Object.create(funcs);

    obj.value = value;
    obj.left = null;
    obj.right = null;



    return obj;

};

var funcs = {};

funcs.insert = function (value) {
    console.log(this)
    if (value < this.value) {
        if (!this.left) {
            this.left = BinarySearchTree(value);

        } else {
            this.left.insert(value)

        }
    }

    if (this.value < value) {
        if (!this.right) {
            this.right = BinarySearchTree(value);

        } else {
            this.right.insert(value)

        }

    }

}

funcs.contains = function (target) {
    if (this.value === target) return true;

    else if (target < this.value && !!this.left) {

        if (this.left.contains(target)) return true;

    }

    else if (this.value < target && !!this.right) {

        if (this.right.contains(target)) return true;

    }

    return false;

}

funcs.depthFirstLog = function (cb) {



}


/*
 * Complexity: What is the time complexity of the above functions?
 */
