// Implement a function called, areThereDuplicates which accepts a variable number of arguments, and checks whether there are any duplicates among the arguments passed in.
// You can solve this using the frequency counter pattern OR the multiple pointers pattern.

// 1. FREQUENCY COUNTERS 솔루션
function areThereDuplicates1(...args) {
  let refObj = {};
  for (let arg of args) {
    refObj[arg] = refObj[arg] + 1 || 1;
  }

  for (let ref in refObj) {
    if (refObj[ref] > 1) return true;
  }
  return false;
}

//   2. Multiple Pointers 솔루션
function areThereDuplicates2(...args) {
  // Two pointers
  args.sort((a, b) => a > b);
  let start = 0;
  let next = 1;
  while (next < args.length) {
    if (args[start] === args[next]) {
      return true;
    }
    start++;
    next++;
  }
  return false;
}

//   3. One Liner 솔루션
function areThereDuplicates3() {
  return new Set(arguments).size !== arguments.length;
}

console.log(areThereDuplicates1(1, 2, 3)); // false
console.log(areThereDuplicates2(1, 2, 2)); // true
console.log(areThereDuplicates3("a", "b", "c", "a")); // true
