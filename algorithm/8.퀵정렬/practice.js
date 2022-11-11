// 피벗 helper 함수
function pivot(arr, start = 0, end = arr.length + 1) {
  const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  };

  // 첫번째 index를 피벗 포인트 설정
  let pivot = arr[start];
  let swapIdx = start;

  for (let i = start + 1; i < arr.length; i++) {
    if (arr[i] < pivot) {
      swapIdx++;
      swap(arr, i, swapIdx);
    }
  }

  swap(arr, swapIdx, start);

  console.log(arr);
  return swapIdx;
}

function quickSort(arr, left = 0, right = arr.length - 1) {
  let pivotIndex = pivot(arr, left, right);
  // left side
  quickSort(arr, left, pivotIndex - 1);
  // rigth side
  quickSort(arr, pivotIndex + 1, right);
}

console.log(pivot([4, 8, 2, 1, 5, 7, 6, 3]));
