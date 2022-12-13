class HashTable {
  constructor(size = 53) {
    this.keyMap = new Array(size);
  }

  _hash(key) {
    let total = 0;
    let WEIRD_PRIME = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let value = char.charCodeAt(0) - 96;
      total = (total * WEIRD_PRIME + value) % this.keyMap.length;
    }
    return total;
  }

  set(key, value) {
    let index = this._hash(key);
    // 개별 체이닝(Seperate Chaining) -> 같은 index에 여러 데이터 저장
    // 해당 index가 비어있으면 빈배열 설정
    if (!this.keyMap[index]) {
      this.keyMap[index] = [];
    }
    // index 가 비어 있으면 빈배열 추가 / 아니라면 기존 배열에 추가
    this.keyMap[index].push([key, value]);
  }

  get(key) {
    let index = this._hash(key);
    if (this.keyMap[index]) {
      for (let i = 0; i < this.keyMap[index].length; i++) {
        if (this.keyMap[index][i][0] === key) return this.keyMap[index][i][1];
      }
    }
    return undefined;
  }

  values() {
    let valuesArr = [];
    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          if (!valuesArr.includes(this.keyMap[i][j][1])) valuesArr.push(this.keyMap[i][j][1]);
        }
      }
    }
    return valuesArr;
  }

  keys() {
    let keysArr = [];
    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          if (!keysArr.includes(this.keyMap[i][j][0])) keysArr.push(this.keyMap[i][j][0]);
        }
      }
    }
    return keysArr;
  }
}

let ht = new HashTable();
ht.set("hello world", "goodbye");
ht.set("dog", "coool");
ht.set("cat", "hott");
ht.set("no", "hey~!");
ht.set("noe", "yes~!");
ht.set("no", "yes~!");
console.dir(ht, { depth: null });
console.dir(ht.keys(), { depth: null });
