// 합병 정렬
// 정렬된 배열 두 개를 파라미터로 받는다.
// 배열의 길이가 1 또는 0이 될때 까지 배열을 쪼갠다. Base Case : length < 1
// 다 쪼개면 합병 함수를 이용해서 전체 배열 길이로 돌아갈 때까지 다시 합친다.
// 다 합쳐지면 return
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

function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));
  return merge(left, right);
}

console.log(mergeSort([10, 24, 76, 73]));
