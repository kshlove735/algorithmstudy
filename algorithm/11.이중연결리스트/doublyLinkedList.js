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

  shift() {
    // length 가 0 이면 return undifined
    if (this.length === 0) return undefined;
    // 현재 head를 변수에 저정
    let oldHead = this.head;
    // length 가 1 이면 head와 tail은 null
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      // head를 oldHead의 next로 설정
      this.head = oldHead.next;
      // head의 prev 연결 끊기
      this.head.prev = null;
      // oldHead의 next 연결 끊기
      oldHead.next = null;
    }
    // length - 1
    this.length--;
    // 제거된 node return
    return oldHead;
  }

  unshift(val) {
    // 추가할 node 생성
    let newNode = new Node(val);
    // length 가 0 이면 head와 tail은 newNode
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      // head의 prev를 newNode로 연결
      this.head.prev = newNode;
      // newNode의 next를 현재 head와 연결
      newNode.next = this.head;
      // head를 newNode로 설정
      this.head = newNode;
    }
    // length + 1
    this.length++;
    return this;
  }

  get(index) {
    // index가 음수 이거나 length보다 크거나 같으면 return null
    if (index < 0 || index >= this.length) return null;
    let count, current;
    // index가 length의 절반 보다 작거나 같으면
    if (index <= this.length / 2) {
      // console.log("head 부터 탐색");
      count = 0;
      current = this.head;
      // count와 index가 같지 않을 때 까지 loop
      while (count != index) {
        count++;
        current = current.next;
      }
    } else {
      // console.log("tail 부터 탐색");
      // 그렇지 않으면
      count = this.length - 1;
      current = this.tail;
      // count와 index가 같지 않을 때 까지 loop
      while (count != index) {
        count--;
        current = current.prev;
      }
    }
    // 찾은 node return
    return current;
  }

  // 원하는 node의 value  변경
  set(index, val) {
    // get()로 node 찾아오기
    let foundNode = this.get(index);

    // node가 유효하면
    if (foundNode) {
      // value 수정
      foundNode.val = val;
      return true;
    }
    return false;
  }

  insert(index, val) {
    // index가 음수 이거나 length보다 크거나 같으면 return false
    if (index < 0 || index > this.length) return false;
    // index가 0이면, unshift();
    if (index === 0) return !!this.unshift(val);
    // index가 length와 같으면 , push();
    if (index === this.length) return !!this.push(val);

    // 그렇지 않으면 get()로 삽입하려는 위치 바로 전(indxe - 1) node 찾아오기
    let beforeNode = this.get(index - 1);
    // node 연결
    let newNode = new Node(val);
    let afterNode = beforeNode.next;
    beforeNode.next = newNode;
    newNode.prev = beforeNode;
    newNode.next = afterNode;
    afterNode.prev = newNode;
    // length + 1
    this.length++;
    // return true
    return true;
  }
}

let list = new DoublyLinkedList();
list.push(20);
list.push(30);
list.push(40);
// list.push(50);
// list.push(60);
// console.dir(list.pop(), { depth: null });
// console.dir(list.shift(), { depth: null });
// console.dir(list.unshift(10), { depth: null });
// console.dir(list.get(5), { depth: null });
// console.dir(list.set(1, 99), { depth: null });
console.dir(list.insert(2, 99), { depth: null });
console.dir(list, { depth: null });
