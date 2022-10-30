// - 정열된 배열을 파라미트러를 받는 **countUniqueValues이라는 함수를 만드어라**
// - 배열 안에 음수도 있을 수 있다.
// - 배열의 값의 개수를 리턴(중복 값은 카운트하지 않는다) → unique values

// 내 꺼
function countUniqueValues(arr) {
  let left = 0;
  let right = left + 1;

  while (right <= arr.length) {
    if (arr[left] === arr[right]) {
      right++;
    } else {
      left++;
      arr[left] = arr[right];
      right++;
    }
  }
  return left;
}

// 답안
// function countUniqueValues(arr) {
//   if (arr.length === 0) return 0;
//   let i = 0;
//   for (let j = 1; j < arr.length; j++) {
//     if (arr[i] !== arr[j]) {
//       i++;
//       arr[i] = arr[j];
//     }
//   }
//   return i + 1;
// }

console.log(countUniqueValues([1, 1, 1, 1, 1, 2])); // 2
console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])); // 7
console.log(countUniqueValues([])); // 0
console.log(countUniqueValues([-2, -1, -1, 0, 1])); // 4
