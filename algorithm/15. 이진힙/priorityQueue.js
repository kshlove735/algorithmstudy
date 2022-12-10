class Node {
  constructor(val, priority) {
    this.val = val;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor() {
    this.values = [];
  }

  enqueue(val, priority) {
    let newNode = new Node(val, priority);
    // value를 values 배열 가장 뒤에 넣기
    this.values.push(newNode);
    this.bubbleUP();

    return this;
  }

  bubbleUP() {
    // values 배열의 맨 뒤 idx
    let idx = this.values.length - 1;
    // 맨뒤 node(추가된 node) 변수에 저장
    let element = this.values[idx];

    // idx가 0일때 까지 loop
    while (idx > 0) {
      // 부모 idx 찾기
      let parentIdx = Math.floor((idx - 1) / 2);
      let parent = this.values[parentIdx];
      // 부모의 node의 priority가 추가한 node의 priority 보다 작거나 같으면 break;
      if (element.priority >= parent.priority) break;
      // 부모의 우선순위가 추가한 node의 우선순위 보다 크면 swap
      this.values[parentIdx] = element;
      this.values[idx] = parent;
      // idx를 부모 idx로 설정
      idx = parentIdx;
    }
  }

  dequeue() {
    // values 배열의 처음 node 변수 설정
    const min = this.values[0];
    // values 배열의 마지막 node 추출 후 변수 설정
    const end = this.values.pop();
    // 배열에 원소가 한개만 남았을때 그냥 pop 에서 끝냄
    if (this.values.length > 0) {
      // 배열 처음 node을 마지막 node으로 대체
      this.values[0] = end;
      // sink down
      this.sinkDown();
    }

    return min;
  }

  sinkDown() {
    // 부모 index는 0부터 시작, 길이와 부모 값 설정
    let parentIdx = 0;
    const length = this.values.length;
    const parent = this.values[0];

    while (true) {
      // leftChild , rightChild index 설정
      let leftChildIdx = 2 * parentIdx + 1;
      let rightChildIdx = 2 * parentIdx + 2;
      // leftChild , rightChild 변수만 설정 -> 배열
      let leftChild, rightChild;
      // swapIdx 초기 null 설정 -> 반복문 탈출의 기준 : 변경이 필요하면 변경 할 index 설정 / 그렇지 않으면 null
      let swapIdx = null;

      // 배열에 해당하는 index 이면
      if (leftChildIdx < length) {
        // leftChild node 설정
        leftChild = this.values[leftChildIdx];
        // leftChild의 node의 priority가 부모 node의 priority보다 작으면 swapidx를 leftChild index로 설정
        if (leftChild.priority < parent.priority) swapIdx = leftChildIdx;
      }

      // 배열에 해당하는 index 이면
      if (rightChildIdx < length) {
        // rightChild의 node 설정
        rightChild = this.values[rightChildIdx];
        // rightChild node의 priority 만 부모 node의 priority보다 작거나 || leftChild, rightChild node의 priority 모두 부모의 node의 priority보다 작지만 rightChild node의 priority이 leftChild node의 priority보다 작으면 -> swapIdx를 rigthChild index로 설정
        if ((swapIdx === null && rightChild.priority < parent.priority) || (swapIdx !== null && rightChild.priority < leftChild.priority)) swapIdx = rightChildIdx;
      }

      // 변경 사항 없으면 break;
      if (swapIdx === null) break;

      // 변경 해야 되면 부모 값과 해당 자식 값 swap
      this.values[parentIdx] = this.values[swapIdx];
      this.values[swapIdx] = parent;
      // 부모 index swap으로 인해 변경된 index로 설정
      parentIdx = swapIdx;
    }
  }
}

let ER = new PriorityQueue();
ER.enqueue("common cold", 5);
ER.enqueue("gunshot wound", 1);
ER.enqueue("high fever", 2);
ER.enqueue("broken arm", 2);
ER.enqueue("glass in foot", 3);
console.dir(ER, { depth: null });
console.dir(ER.dequeue(), { depth: null });
console.dir(ER.dequeue(), { depth: null });
console.dir(ER.dequeue(), { depth: null });
console.dir(ER.dequeue(), { depth: null });
console.dir(ER.dequeue(), { depth: null });
console.dir(ER, { depth: null });
