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

  // 맨 처음 node 제거
  shift() {
    if (!this.head) return undefined;

    let currentHead = this.head;
    this.head = currentHead.next;
    this.length--;
    if (this.length === 0) this.tail = null;
    return currentHead;
  }

  // list 맨 앞에 node 추가
  unshift(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  // 원하는 위치에 있는 node 찾기
  get(index) {
    if (index < 0 || index >= this.length) return null;
    let count = 0;
    let current = this.head;
    while (count !== index) {
      current = current.next;
      count++;
    }
    return current;
  }

  // 원하는 위치에 값 변경
  set(index, val) {
    // 해당 위치에 있는 node 찾기
    let foundNode = this.get(index);

    // node를 찾으면 해당 node에 val 변경하고 return true
    if (foundNode) {
      foundNode.val = val;
      return true;
    }
    // node를 찾을 수 없으면 return false
    return false;
  }

  // 원하는 위치에 node 추가
  insert(index, val) {
    // index가 0보다 작거나 length보다 크면 return false
    if (index < 0 || index > this.length) return false;
    // length 보다 크거나 "같은" 이 아닌 이유는 length와 "같으면" 마지막 node에 push() 그리고 무조건 true 리턴
    if (index === this.length) return !!this.push(val);
    // index가 0 이면, unshift() 매소드 이용 그리고 무조건 true 리턴
    if (index === 0) return !!this.unshift(val);

    // 그렇지 않으면 get() 메소드를 할용하여 index-1 위치의 node 찾아온다.
    let prevNode = this.get(index - 1);
    let temp = prevNode.next;

    // 새로운 node를 생성하여
    let newNode = new Node(val);

    // 이전 node.next에 추가할 node 연결
    prevNode.next = newNode;
    // 추가한 node.next에 원래 해당 위치에 있었던 node 연결
    newNode.next = temp;
    // length 1 증가
    this.length++;
    return true;
  }

  // 원하는 위치에 node 제거
  remove(index) {
    // index가 0보다 작거나 length보다 크거나 같을 경우 return undeifined
    if (index < 0 || index >= this.length) return undefined;
    // index가 0 과 같다면 shift()
    if (index === 0) return this.shift();
    // index가 length-1 과 같다면 pop()
    if (index === this.length - 1) return this.pop();

    // 그렇지 않으면 get() 메소드 활용하여 index-1 위치의 node 찾아 온다
    let prevNode = this.get(index - 1);
    let removedNode = prevNode.next;
    // index-1 node -> index node -> index next node
    // index-1 node 의 next 에 index next node 연결
    prevNode.next = removedNode.next;
    // length 1 감소
    this.length--;
    // return 제거된 node
    return removedNode;
  }

  // node 순서 역으로 연결
  reverse() {
    // swap head and tail
    let node = this.head;
    this.head = this.tail;
    this.tail = node;
    let next = null;
    let prev = null;
    for (let i = 0; i < this.length; i++) {
      // 현재 node의 next를 next 변수에 저장
      next = node.next;
      // 현재 node의 next를 이전 node와 연결
      node.next = prev;
      // 현재 node를 prev 변수에 저장
      prev = node;
      // 현재 node를 현재 node의 next로 저장
      node = next;
    }
    return this;
  }

  print() {
    let arr = [];
    let current = this.head;
    while (current) {
      arr.push(current.val);
      current = current.next;
    }
    console.log(arr);
  }
}
// let first = new Node("Hi");
// first.next = new Node("there");
// first.next.next = new Node("how");
// first.next.next.next = new Node("are");
// first.next.next.next.next = new Node("you");

// console.dir(first, { depth: null });

let list = new SinglyLinkedList();
list.push(100);
list.push(200);
list.push(300);
list.push(400);
list.push(500);
// console.dir(list.pop(), { depth: null });
// console.dir(list.pop(), { depth: null });
// console.dir(list.pop(), { depth: null });
// console.dir(list, { depth: null });
// console.dir(list.shift(), { depth: null });
// console.dir(list.shift(), { depth: null });
// console.dir(list.shift(), { depth: null });
// console.dir(list.shift(), { depth: null });
// console.dir(list.push(100), { depth: null });
// console.dir(list.push(1000), { depth: null });
// console.dir(list.pop(), { depth: null });
// console.dir(list.shift(), { depth: null });

// console.dir(list.unshift(99), { depth: null });
// console.dir(list.get(2), { depth: null });
// console.dir(list.set(5, "YES"), { depth: null });
// console.dir(list.insert(5, 100), { depth: null });
// console.dir(list.remove(2), { depth: null });
console.dir(list.print(), { depth: null });
console.dir(list.reverse(), { depth: null });
console.dir(list.print(), { depth: null });
console.dir(list, { depth: null });
