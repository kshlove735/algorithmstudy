// - unction called **isSubsequence** which takes in two strings and checks whether the characters in the first string form a subsequence of the characters in the second string.
// - In other words, the function should check whether the characters in the first string appear somewhere in the second string, **without their order changing.**

// 방법 1.
function isSubsequence1(str1, str2) {
  if (str2.includes(str1)) {
    return true;
  }

  let arr1 = [...str1];
  let arr2 = [...str2];

  let j = 0;
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] === arr2[j]) {
      j++;
      continue;
    }

    if (arr1[i] !== arr2[j]) j++;
    if (j === arr2.length) {
      return false;
    }
  }
  return true;
}

//   방법 2. - 반복
function isSubsequence2(str1, str2) {
  var i = 0;
  var j = 0;
  if (!str1) return true;
  while (j < str2.length) {
    if (str2[j] === str1[i]) i++;
    if (i === str1.length) return true;
    j++;
  }
  return false;
}

// 방법 3. - O(1) 공간이 아닌 재귀
function isSubsequence3(str1, str2) {
  if (str1.length === 0) return true;
  if (str2.length === 0) return false;
  if (str2[0] === str1[0]) return isSubsequence(str1.slice(1), str2.slice(1));
  return isSubsequence3(str1, str2.slice(1));
}

console.log(isSubsequence1("hello", "hello world")); // true
console.log(isSubsequence1("sing", "sting")); // true
console.log(isSubsequence2("abc", "abracadabra")); // true
console.log(isSubsequence3("abc", "acb")); // false (order matters)
