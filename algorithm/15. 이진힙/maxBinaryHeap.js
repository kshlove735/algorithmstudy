class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }

  insert(value) {
    // value를 values 배열 가장 뒤에 넣기
    this.values.push(value);
    this.bubbleUP();

    return this;
  }

  bubbleUP() {
    // values 배열의 맨 뒤 idx
    let idx = this.values.length - 1;
    // value 값 변수에 저장
    let element = this.values[idx];

    // idx가 0일때 까지 loop
    while (idx > 0) {
      // 부모 idx 찾기
      let parentIdx = Math.floor((idx - 1) / 2);
      let parent = this.values[parentIdx];
      // 부모의 value가 추가한 value 보다 크거나 같으면 break;
      if (element <= parent) break;
      // 부모의 value가 추가한 value 보다 작으면 swap
      this.values[parentIdx] = element;
      this.values[idx] = parent;
      // idx를 부모 idx로 설정
      idx = parentIdx;
    }
  }

  extractMax() {
    // values 배열의 처음 값 변수 설정
    const max = this.values[0];
    // values 배열의 마지막 값 추출 후 변수 설정
    const end = this.values.pop();
    // 배열에 원소가 한개만 남았을때 그냥 pop 에서 끝냄
    if (this.values.length > 0) {
      // 배열 처음 값을 마지막 값으로 대체
      this.values[0] = end;
      // sink down
      this.sinkDown();
    }

    return max;
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
        // leftChild 값 설정
        leftChild = this.values[leftChildIdx];
        // leftChild의 값이 부모 값보다 크면 swapidx를 leftChild index로 설정
        if (leftChild > parent) swapIdx = leftChildIdx;
      }

      // 배열에 해당하는 index 이면
      if (rightChildIdx < length) {
        // rightChild 값 설정
        rightChild = this.values[rightChildIdx];
        // rightChild의 값 만 부모 값보다 크거나 || leftChild, rightChild 값 모두 부모의 값보다 크지만 rightChild의 값이 leftChild의 값보다 크면 -> swapIdx를 rigthChild index로 설정
        if ((swapIdx === null && rightChild > parent) || (swapIdx !== null && rightChild > leftChild)) swapIdx = rightChildIdx;
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

let heap = new MaxBinaryHeap();

heap.insert(41);
heap.insert(39);
heap.insert(33);
heap.insert(18);
heap.insert(27);
heap.insert(12);
heap.insert(55);

console.dir(heap, { depth: null });
console.dir(heap.extractMax(), { depth: null });
console.dir(heap, { depth: null });
console.dir(heap.extractMax(), { depth: null });
console.dir(heap, { depth: null });
console.dir(heap.extractMax(), { depth: null });
console.dir(heap, { depth: null });
console.dir(heap.extractMax(), { depth: null });
console.dir(heap, { depth: null });
console.dir(heap.extractMax(), { depth: null });
console.dir(heap, { depth: null });
console.dir(heap.extractMax(), { depth: null });
console.dir(heap, { depth: null });
console.dir(heap.extractMax(), { depth: null });
console.dir(heap, { depth: null });
console.dir(heap.extractMax(), { depth: null });
console.dir(heap, { depth: null });
