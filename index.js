function naiveSearch(str, pattern) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < pattern.length; j++) {
      console.log(`${i + j}, ${j} : ${str[i + j]}, ${pattern[j]}`);
      if (pattern[j] !== str[i + j]) {
        console.log("BREAK!");
        break;
      }
      if (j === pattern.length - 1) {
        console.log("FOUND ONE!");
        count++;
      }
    }
  }
  return count;
}

console.log(naiveSearch("abpopopse", "pop"));
