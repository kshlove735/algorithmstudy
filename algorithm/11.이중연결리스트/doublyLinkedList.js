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
    // 추가할 새 node 생성
    let newNode = new Node(val);
    // head 가 null 이거나 length가 0 이면 head와 tail이 새 node
    if (this.head === null || this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      // 그렇지 않으면 현재 tail의 next에 새 node 연결
      this.tail.next = newNode;
      // 새 node의 prev에 이전 tail을 연결
      newNode.prev = this.tail;
      // tail 프로퍼티를 새 node로 변경
      this.tail = newNode;
    }

    // 길이 + 1
    this.length++;

    return this;
  }

  pop() {
    // head 가 null 이면 return undefined
    if (!this.head) return undefined;
    // 현재 tail을 나중에 return하기 위해 변수에 저장
    let removedNode = this.tail;
    // length 가 1 이면 head와 tail을 null로 설정
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      // tail 전의 node를 tail로 설정
      this.tail = removedNode.prev;
      // 새로운 tail의 next를 null로 설정
      this.tail.next = null;
      // 제거된 node의 prev 연결 끊기(null)
      removedNode.prev = null;
    }

    // 길이 - 1
    this.length--;

    // return 제거된 node
    return removedNode;
  }
}

let list = new DoublyLinkedList();
list.push(20);
// list.push(30);
// console.dir(list.push(40), { depth: null });
console.dir(list.pop(), { depth: null });
console.dir(list, { depth: null });
