class Bst {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
  insert(data) {
    const dir = data < this.data ? "left" : "right";
    if (this[dir]) {
      this[dir].insert(data);
    } else {
      this[dir] = new Bst(data);
    }
    return this;
  }

  // Uses a queue.
  traverseBreadthFirst(call) {
    const queue = [this];

    while (queue.length) {
      const node = queue.shift();

      if (node.left) {
        queue.push(node.left);
      }

      if (node.right) {
        queue.push(node.right);
      }

      call(node);
    }

    return this;
  }

  // Can use a stack or recursion.
  traverseDepthFirstRecursive(call, type = "in-order") {
    if (type === "pre-order") {
      call(this);
    }

    if (this.left) {
      this.left.traverseDepthFirstRecursive(call, type);
    }

    if (type === "in-order") {
      call(this);
    }

    if (this.right) {
      this.right.traverseDepthFirstRecursive(call, type);
    }

    if (type === "post-order") {
      call(this);
    }

    return this;
  }
}

const bst = new Bst(20);
const arr = [20, 16, 25, 6, 17, 21, 29, 0, 7, 28, 51, 46];

arr.forEach(num => bst.insert(num));

const bf = [];
bst.traverseBreadthFirst(node => bf.push(node.data));
console.log(bf);

const dfInOrder = [];
bst.traverseDepthFirstRecursive(node => dfInOrder.push(node.data));
console.log(dfInOrder);

const dfPreOrder = [];
bst.traverseDepthFirstRecursive(
  node => dfPreOrder.push(node.data),
  "pre-order"
);
console.log(dfPreOrder);

const dfPostOrder = [];
bst.traverseDepthFirstRecursive(
  node => dfPostOrder.push(node.data),
  "post-order"
);
console.log(dfPostOrder);
