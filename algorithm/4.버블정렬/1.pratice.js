// 숫자로 이루어진 배열을 받는 bubbleSort라는 함수를 만들어라
// i라는 변수를 가지고 배열의 맨 끝에서 루프를 시작해서 맨 앞으로 끝난다.
// 내부 루프는 j는 변수를 가지고 있고 처음부터 i-1까지 실행된다.
// arr[j] 와 arr[j+1]을 비교하여 arr[j]가 크면 둘을 스왑한다.
// return 정렬된 배열

function bubbleSort(arr) {
  for (let i = arr.length; i > 0; i--) {
    console.log(arr);
    for (let j = 0; j < i - 1; j++) {
      console.log("j : " + j);
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

function bubbleSort(arr) {
  const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  };
  for (let i = arr.length; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
      }
    }
  }
  return arr;
}
console.log(bubbleSort([1, 5, 3, 99, -2, 67, 908, 3, 51]));
