let queue = [];

// 방법 1 : push(), shift() 이용
queue.push("FIRST");
queue.push("SECOND");
queue.push("THIRD");

console.dir(queue, { depth: null }); // [ 'FIRST', 'SECOND', 'THIRD' ]
console.log(queue.shift()); // FIRST
console.log(queue.shift()); // SECOND
console.log(queue.shift()); // THIRD

// 방법 2 : unshift(), pop() 이용
queue.unshift("FIRST");
queue.unshift("SECOND");
queue.unshift("THIRD");

console.dir(queue, { depth: null }); // [ 'THIRD', 'SECOND', 'FIRST' ]
console.log(queue.pop()); // FIRST
console.log(queue.pop()); // SECOND
console.log(queue.pop()); // THIRD
