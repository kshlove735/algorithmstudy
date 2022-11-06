// 배열 합병
// 정렬된 2개의 배열 받아 정렬
// 정렬된 2개의 배열을 받으면 헬퍼 함수는 정렬된 새 배열을 만든다.
// O(n+m) time, O(n+m) space
// n,m : 첫 번째, 두 번째 배열의 크기

// 의사 코드
// 가작 작은 값을 넣을 빈 배열 생성
// 2개의 배열 루프를 돌면서 비교
// 첫번째 배열의 값이 더 작으면 결과 배열에 값 넣고 첫번째 배열의 다음 원소로 넘어 간다
// 두번째 비열의 값이 더 작으면 결과 배열에 값 넣고 두번째 배열의 다음 원소로 넘어 간다.
// 배열 하나를 완료한 다음에는 다른 배열의 남은 값을 모두 넣는다.

function merge(arr1, arr2) {
  let i = 0;
  let j = 0;
  let resultArr = [];
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      resultArr.push(arr1[i]);
      i++;
    } else {
      resultArr.push(arr2[j]);
      j++;
    }
  }
  while (i < arr1.length) {
    resultArr.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    resultArr.push(arr2[j]);
    j++;
  }

  return resultArr;
}

console.log(merge([1, 10, 50], [2, 14, 99, 100]));
