class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(val) {
    let newNode = new Node(val);

    if (this.root === null) {
      this.root = newNode;
      return this;
    }

    let current = this.root;

    while (true) {
      if (val === current.value) return undefined;
      if (val < current.value) {
        if (current.left === null) {
          current.left = newNode;
          return this;
        }
        current = current.left;
      } else {
        if (current.right === null) {
          current.right = newNode;
          return this;
        }
        current = current.right;
      }
    }
  }

  BFS() {
    // 큐와 visited 변수 설정(배열)
    let queue = [];
    let data = [];
    let node = this.root;

    // 큐에 root 저장
    queue.push(node);

    // 큐에 원소가 없을때 까지 loop
    while (queue.length) {
      // 큐에서 dequeue한  node.value를 visited 변수에 push
      node = queue.shift();
      data.push(node.value);

      // dequeue한 node.left 가 있으며 큐에 추가
      if (node.left) queue.push(node.left);

      // dequeue한 node.right 가 있으며 큐에 추가
      if (node.right) queue.push(node.right);
    }
    // return data
    return data;
  }
}

let tree = new BinarySearchTree();
tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(20);
console.dir(tree.breadthFirstSearch(), { depth: null });
