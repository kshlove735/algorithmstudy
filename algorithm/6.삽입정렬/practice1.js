//  배열의 두번째 요소부터 시작→ 첫번째 요소는 정렬하지 않아도 되기 때문
//  두번째 값을 선택해서 앞에 있는 값과 비교하여 필요하다면 swap
//  계속해서 다음 요소를 진행한다.
//  올바른 위치가 아니라면 계속해서 정렬된 부분을 거치며 반복
//  배열을 정렬할 때까지 반복하고 정렬된 배열 return

// Big O
// - worst case : O(n²)

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let currentVal = arr[i];
    for (let j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
      arr[j + 1] = arr[j];
      if (j === 0 || currentVal >= arr[j - 1]) {
        arr[j] = currentVal;
      }
    }
  }
  return arr;
}

console.log(insertionSort([5, 3, 77, 1, 2, 2, 0]));
