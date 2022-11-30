class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  enqueue(val) {
    let newNode = new Node(val);
    // first가 null 이면
    if (!this.first) {
      // first, last는 newNode
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }

    // 5. size++
    return ++this.size;
  }

  dequeue() {
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

let queue = new Queue();
console.dir(queue.enqueue("FIRST"), { depth: null });
console.dir(queue.enqueue("SECOND"), { depth: null });
console.dir(queue.enqueue("THIRD"), { depth: null });
console.log("----------------------------------------------");
console.dir(queue, { depth: null });
console.dir(queue.dequeue(), { depth: null });
console.dir(queue.dequeue(), { depth: null });
console.log("----------------------------------------------");
console.dir(queue, { depth: null });
console.dir(queue.dequeue(), { depth: null });
console.log("----------------------------------------------");
console.dir(queue, { depth: null });
console.dir(queue.dequeue(), { depth: null });
