class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // 마지막 node에 새로운 node 추가
  push(val) {
    // 새로운 node 생성
    let newNode = new Node(val);

    // head가 없으면 : 최초 등록 시
    if (!this.head) {
      // head, tail 은 최초 node
      this.head = newNode;
      this.tail = this.head;
    } else {
      // 그다음 부터는 tail.next 추가된 node 가르키고, tail로 설정
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  // traverse() {
  //   let current = this.head;
  //   while (current) {
  //     console.log(current.val);
  //     current = current.next;
  //   }
  // }

  // 마지막 node(tail) 반환
  pop() {
    // node 가 없을 경우
    if (!this.head) return undefined;

    let current = this.head;
    let newTail = current;

    // tail전 node 까지 loop
    while (current.next) {
      // 현재 node newTail 설정
      newTail = current;
      // 다음 node 를 current로 설정하여 loop 돌게 한다
      current = current.next;
    }
    // loop가 끝난 시점: newTail = 마자믹 node 전 node, current = tail

    // 새로운 tail 설정
    this.tail = newTail;
    newTail.next = null;
    this.length--;

    // pop을 계속하다 length가 null 경우
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }
}

// let first = new Node("Hi");
// first.next = new Node("there");
// first.next.next = new Node("how");
// first.next.next.next = new Node("are");
// first.next.next.next.next = new Node("you");

// console.dir(first, { depth: null });

let list = new SinglyLinkedList();
list.push("HELLO");
list.push("GOODBYE");
list.push("!");
console.dir(list.pop(), { depth: null });
console.dir(list.pop(), { depth: null });
console.dir(list.pop(), { depth: null });
console.dir(list, { depth: null });
