class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    let newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  unshift(val) {
    let newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  shift() {
    if (!this.head) return undefined;
    let removedNode = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = removedNode.next;
      this.head.prev = null;
      removedNode.next = null;
      removedNode.prev = null;
    }
    this.length--;
    return removedNode;
  }

  set(index, val) {
    if (index < 0 || index >= this.length) return false;
    if (index <= this.length / 2) {
      let current = this.head;
      let count = 0;

      while (index > count) {
        count++;
        current = current.next;
      }
      current.val = val;
    } else {
      let current = this.tail;
      let count = this.length - 1;
      while (index < count) {
        count--;
        current = current.prev;
      }
      current.val = val;
    }

    return true;
  }

  remove(index) {
    if (index < 0 || index >= this.length) return undefined;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();
    if (index <= this.length / 2) {
      let current = this.head;
      let prev = null;
      let next = current.next;
      let count = 0;

      while (index > count) {
        count++;
        current = current.next;
        prev = current.prev;
        next = current.next;
      }
      prev.next = next;
      next.prev = prev;
      current.prev = null;
      current.next = null;
      this.length--;
      return current;
    } else {
      let current = this.tail;
      let prev = this.tail.prev;
      let next = null;
      let count = this.length - 1;
      while (index < count) {
        count--;
        current = current.prev;
        prev = current.prev;
        next = current.next;
      }
      prev.next = next;
      next.prev = prev;
      current.prev = null;
      current.next = null;
      this.length--;
      return current;
    }
  }

  pop() {
    if (!this.head) return undefined;
    let removedNode = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = removedNode.prev;
      this.tail.next = null;
    }

    this.length--;
    removedNode.prev = null;
    return removedNode;
  }

  get(index) {
    if (index < 0 || index >= this.length) return null;

    if (index <= this.length / 2) {
      let current = this.head;
      let count = 0;

      while (index > count) {
        count++;
        current = current.next;
      }
      return current;
    } else {
      let current = this.tail;
      let count = this.length - 1;
      while (index < count) {
        count--;
        current = current.prev;
      }
      return current;
    }
  }
}

var doublyLinkedList = new DoublyLinkedList();
// doublyLinkedList.push(5);
// doublyLinkedList.push(10);
// doublyLinkedList.push(15);
// doublyLinkedList.push(25);

doublyLinkedList.push(5).push(10).push(15).push(20);

console.dir(doublyLinkedList.get(3), { depth: null });
// console.dir(doublyLinkedList.pop(), { depth: null });
// console.dir(doublyLinkedList.pop(), { depth: null });
// console.dir(doublyLinkedList.pop(), { depth: null });
// console.dir(doublyLinkedList.pop(), { depth: null });
console.log("--------------------");
// console.dir(doublyLinkedList, { depth: null });
