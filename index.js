//  배열의 두번째 요소부터 시작→ 첫번째 요소는 정렬하지 않아도 되기 때문
//  두번째 값을 선택해서 앞에 있는 값과 비교하여 필요하다면 swap
//  계속해서 다음 요소를 진행한다.
//  올바른 위치가 아니라면 계속해서 정렬된 부분을 거치며 반복
//  배열을 정렬할 때까지 반복하고 정렬된 배열 return

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > arr[i - 1]) {
      continue;
    }
    console.log(arr[i]);
  }
}
