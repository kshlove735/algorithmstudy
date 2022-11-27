let stack = [];

// 방법 1 : push(), pop() 이용 -> 방법 2보다 더 효과적(index를 옮길 필요 없기 때문)
stack.push("google");
stack.push("instagram");
stack.push("youtube");

console.dir(stack, { depth: null }); // [ 'google', 'instagram', 'youtube' ]
console.log(stack.pop()); // youtube
console.log(stack.pop()); // instagram
console.log(stack.pop()); // google

// 방법 2 : unshift(), shift() 이용
stack.unshift("google");
stack.unshift("instagram");
stack.unshift("youtube");

console.dir(stack, { depth: null }); // [ 'youtube', 'instagram', 'google' ]
console.log(stack.shift()); // youtube
console.log(stack.shift()); // instagram
console.log(stack.shift()); // google
