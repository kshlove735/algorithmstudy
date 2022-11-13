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

  push(val) {
    // 새로운 Node 생성
    let newNode = new Node(val);

    // head가 없으면 : 최초 등록 시
    if (!this.head) {
      // head, tail 은 최초 node
      this.head = newNode;
      this.tail = this.head;
    } else {
      // 그다음 부터는 tail.next 추가된 node 가르키고, tail로 설정
      console.log("this : ", this);
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
}

// let first = new Node("Hi");
// first.next = new Node("there");
// first.next.next = new Node("how");
// first.next.next.next = new Node("are");
// first.next.next.next.next = new Node("you");

// console.dir(first, { depth: null });

let list = new SinglyLinkedList();
// console.log(list);
console.dir(list.push("HELLO"), { depth: null });
console.dir(list.push("GOODBYE"), { depth: null });
console.dir(list.push("99"), { depth: null });
// console.dir(list, { depth: null });
