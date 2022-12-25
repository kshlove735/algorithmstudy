// O(2^n)
function fib(n) {
  if (n <= 2) return 1;
  return fib(n - 1) + fib(n - 2);
}

// A MEMO-IZED SOLUTION : O(N)
function fibWithMemo1(n, memo = []) {
  if (memo[n] !== undefined) return memo[n];
  if (n <= 2) return 1;
  let res = fib(n - 1, memo) + fib(n - 2, memo);
  memo[n] = res;
  return res;
}

function fibWithMemo2(n, memo = [undefined, 1, 1]) {
  if (memo[n] !== undefined) return memo[n];
  let res = fib(n - 1, memo) + fib(n - 2, memo);
  memo[n] = res;
  return res;
}

console.log(fibWithMemo1(5));
console.log(fibWithMemo2(5));
