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
      let parentidx = Math.floor((idx - 1) / 2);
      let parent = this.values[parentidx];
      // 부모의 value가 추가한 value 보다 크거나 같으면 break;
      if (element <= parent) break;
      // 부모의 value가 추가한 value 보다 작으면 swap
      this.values[parentidx] = element;
      this.values[idx] = parent;
      // idx를 부모 idx로 설정
      idx = parentidx;
    }
  }
}

let heap = new MaxBinaryHeap();
console.dir(heap, { depth: null });
heap.insert(41);
heap.insert(39);
heap.insert(33);
heap.insert(18);
heap.insert(27);
heap.insert(12);
heap.insert(55);
heap.insert(1);

console.dir(heap, { depth: null });
