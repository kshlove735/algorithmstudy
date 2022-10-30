// Write a function called sameFrequency.
// Given two positive integers, find out if the two numbers have the same frequency of digits.

// 방법 1.
function sameFrequency1(num1, num2) {
  let stringNum1 = num1.toString();
  let stringNum2 = num2.toString();

  let num1Obj = {};

  if (stringNum1.length !== stringNum2.length) return false;

  for (let num of stringNum1) {
    num1Obj[num] = num1Obj[num] + 1 || 1;
  }
  for (let num of stringNum2) {
    if (!num1Obj[num] || num1Obj[num] === "0") {
      return false;
    }

    num1Obj[num] = num1Obj[num] - 1;
  }

  return true;
}

//   방법 2.
function sameFrequency2(num1, num2) {
  let strNum1 = num1.toString();
  let strNum2 = num2.toString();
  if (strNum1.length !== strNum2.length) return false;

  let countNum1 = {};
  let countNum2 = {};

  for (let i = 0; i < strNum1.length; i++) {
    countNum1[strNum1[i]] = (countNum1[strNum1[i]] || 0) + 1;
  }

  for (let j = 0; j < strNum1.length; j++) {
    countNum2[strNum2[j]] = (countNum2[strNum2[j]] || 0) + 1;
  }

  for (let key in countNum1) {
    if (countNum1[key] !== countNum2[key]) return false;
  }

  return true;
}

console.log(sameFrequency1(122335, 221515)); // false
console.log(sameFrequency1(182, 281)); // true
console.log(sameFrequency1(34, 14)); // false
console.log(sameFrequency2(3589578, 5879385)); // true
console.log(sameFrequency2(22, 222)); // false
