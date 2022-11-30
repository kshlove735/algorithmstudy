class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  push(val) {
    let newNode = new Node(val);
    // first가 null 이면
    if (!this.first) {
      // first, last는 newNode
      this.first = newNode;
      this.last = newNode;
    } else {
      let temp = this.first;
      this.first = newNode;
      this.first.next = temp;
    }

    // 5. size++
    return ++this.size;
  }

  pop() {
    // size 0 이면 return undefined
    if (this.size === 0) return null;

    let removedNode = this.first;

    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.size--;
    return removedNode.value;
  }
}

let stack = new Stack();
console.dir(stack.push(10), { depth: null });
console.dir(stack.push(20), { depth: null });
console.dir(stack.push(30), { depth: null });
console.dir(stack.pop(), { depth: null });
console.dir(stack.pop(), { depth: null });
console.dir(stack.pop(), { depth: null });
console.dir(stack.pop(), { depth: null });
