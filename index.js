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
    const max = this.values[0];
    const end = this.values.pop();
    if (this.values.length > 0) {
      this.values[0] = end;
      this.sinkDown();
    }

    return max;
  }

  sinkDown() {
    let parentIdx = 0;
    const length = this.values.length;
    const parent = this.values[0];

    while (true) {
      let leftChildIdx = 2 * parentIdx + 1;
      let rightChildIdx = 2 * parentIdx + 2;
      let leftChild, rightChild;
      let swap = null;

      if (leftChildIdx < length) {
        leftChild = this.values[leftChildIdx];
        if (leftChild > parent) {
          swap = leftChildIdx;
        }
      }

      if (rightChildIdx < length) {
        rightChild = this.values[rightChildIdx];
        if ((swap === null && rightChild > parent) || (swap !== null && rightChild > leftChild)) {
          swap = rightChildIdx;
        }
      }

      if (swap === null) break;
      this.values[parentIdx] = this.values[swap];
      this.values[swap] = parent;
      parentIdx = swap;
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
heap.insert(55);
heap.insert(52);
heap.insert(60);
console.dir(heap, { depth: null });
