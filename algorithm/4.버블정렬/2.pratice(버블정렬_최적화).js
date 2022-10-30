// 버블 정렬 최적화 - 거의 정렬이 되어 있는 경우 효과가 좋다
// 이미 정렬이 되어 있는 경우 loop 를 계속 수행 할 필요 없기 때문
// 이전에 swap이 없었다면 다음에서 swap이 없다 -> 이미 정렬이 다 되있기 때문

function bubbleSort(arr) {
  for (let i = arr.length; i > 0; i--) {
    let noSwaps = true;
    console.log(arr);
    for (let j = 0; j < i - 1; j++) {
      console.log("j : " + j);
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        noSwaps = false;
      }
    }
    if (noSwaps) break;
  }
  return arr;
}

console.log(bubbleSort([8, 1, 2, 3, 4, 5, 6, 7]));
