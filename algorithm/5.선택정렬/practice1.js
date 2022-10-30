// 가장 작은 값을 저장할 수 있는 변수 설정 -> 첫번째는 첫번째 index로
// 가장 작은 수를 찾을 때 까지 비교
// 최소 값을 찾으면 해당 index를 변수에 저장
// 최소 값 시작 값이 아니라면 둘을 swap
// 정렬이 다 될때 까지 반복

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let minIndex = i;

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) minIndex = j;
    }
    // swap
    if (i !== minIndex) {
      let temp = arr[minIndex];
      arr[minIndex] = arr[i];
      arr[i] = temp;
    }
  }
  return arr;
}

console.log(selectionSort([0, 2, 34, 22, 10, 19, 17]));
// console.log(selectionSort([5, 3, 4, 1, 2]));
// console.log(selectionSort([2, 3, 4, 5, 1]));
