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

  DFSPreOrder() {
    // data 변수 생성 : 방문한 node의 value를 저장하기 위해
    let data = [];
    // currnt 변수 생성 및 this.root 저장
    let current = this.root;
    // 헬퍼 함수(traverse) 작성 : 파라미터 node
    function traverse(node) {
      // data 변수에 파라미터 node.value의 값 push
      data.push(node.value);
      // node.left가 있으면, 헬퍼 함수 호출 with node
      if (node.left) traverse(node.left);
      // node.right가 있으면, 헬퍼 함수 호출 with node
      if (node.right) traverse(node.right);
    }
    // current  변수로 헬퍼 함수 호출
    traverse(current);
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
console.dir(tree.DFSPreOrder(), { depth: null }); // [ 10, 6, 3, 8, 15, 20 ]
// console.dir(tree.DFSPostOrder(), { depth: null }); // [ 3, 8, 6, 20, 15, 10 ]
