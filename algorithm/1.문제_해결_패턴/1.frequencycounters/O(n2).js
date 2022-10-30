function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  let frequencyCounter1 = {};
  let frequencyCounter2 = {};
  // arr1, arr2 배열 -> object로 변환 key = 배열의 value / vaule = 빈도(갯수)
  for (let val of arr1) {
    frequencyCounter1[val] = ++frequencyCounter1[val] || 1;
  }
  for (let val of arr2) {
    frequencyCounter2[val] = ++frequencyCounter2[val] || 1;
  }

  for (let key in frequencyCounter1) {
    // 동일 key 확인
    if (!(key ** 2 in frequencyCounter2)) {
      return false;
    }
    // 동일 빈도 확인
    if (frequencyCounter1[key] !== frequencyCounter2[key ** 2]) {
      return false;
    }
    return true;
  }
}

same([1, 2, 3, 5, 1], [1, 9, 4, 4, 25]);
