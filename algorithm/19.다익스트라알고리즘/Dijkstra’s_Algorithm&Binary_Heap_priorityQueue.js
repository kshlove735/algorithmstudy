// Undirected Graph
class WeightedGraph {
  constructor() {
    this.adjacencyList = {};
  }
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }

  addEdge(vertex1, vertex2, weight) {
    if (this.adjacencyList[vertex1]) this.adjacencyList[vertex1].push({ node: vertex2, weight });
    if (this.adjacencyList[vertex2]) this.adjacencyList[vertex2].push({ node: vertex1, weight });
  }
  dijkstra(start, finish) {
    const nodes = new PriorityQueue();
    const distances = {};
    const previous = {};
    let path = []; // to return at end
    let smallest;

    // build up initial state
    for (let vertex in this.adjacencyList) {
      if (vertex === start) {
        distances[vertex] = 0;
        nodes.enqueue(vertex, 0);
      } else {
        distances[vertex] = Infinity;
        nodes.enqueue(vertex, Infinity);
      }
      previous[vertex] = null;
    }
    // console.log(nodes);
    // as long as there is something to visit
    while (nodes.values.length) {
      smallest = nodes.dequeue().val;
      if (smallest === finish) {
        // WE ARE DONE
        // BUILD UP PATH TO RETURN AT END
        while (previous[smallest]) {
          path.push(smallest);
          smallest = previous[smallest];
        }
        break;
      }
      if (smallest || distances[smallest] !== Infinity) {
        for (let neighbor in this.adjacencyList[smallest]) {
          // find neighboring node
          let nextNode = this.adjacencyList[smallest][neighbor];
          // console.log(nextNode);
          // calculate new distance to neighboring node
          let candidate = distances[smallest] + nextNode.weight;
          let nextNeighboor = nextNode.node;
          if (candidate < distances[nextNeighboor]) {
            // updating new smallest distance to neighbor
            distances[nextNeighboor] = candidate;
            // updating previous - How we got to neighbor
            previous[nextNeighboor] = smallest;
            // enqueue in priority queue with new priority
            nodes.enqueue(nextNeighboor, candidate);
          }
        }
      }
    }
    return path.concat(smallest).reverse();
  }
}

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

let graph = new WeightedGraph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");
graph.addEdge("A", "B", 4);
graph.addEdge("A", "C", 2);
graph.addEdge("B", "E", 3);
graph.addEdge("C", "D", 2);
graph.addEdge("C", "F", 4);
graph.addEdge("D", "E", 3);
graph.addEdge("D", "F", 1);
graph.addEdge("E", "F", 1);
console.dir(graph, { depth: null });

console.log(graph.dijkstra("A", "E"));
