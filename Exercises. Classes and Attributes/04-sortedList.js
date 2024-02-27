class List {
  constructor() {
    this.numList = [];
    this.size = 0;
  }

  add(el) {
    this.numList.push(el);
    this.size++;
    this.sort();
    return this;
  }

  remove(idx) {
    if (idx >= 0 && idx < this.size) {
      this.numList.splice(idx, 1);
      this.size--;
      return this;
    } else {
      throw new Error("Index out of range");
    }
  }

  get(idx) {
    if (idx >= 0 && idx < this.size) {
      return this.numList[idx];
    } else {
      throw new Error("Index out of range");
    }
  }

  sort() {
    this.numList.sort((a, b) => a - b);
  }
}

let list = new List();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1));
list.remove(1);
console.log(list.get(1));
