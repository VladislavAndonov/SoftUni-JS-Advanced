class Stringer {
  constructor(innerString, innerLength) {
    this.string = innerString;
    this.length = innerLength;
  }

  increase(length) {
    this.length += length;
  }
  decrease(length) {
    this.length -= length;
    if (this.length < 0) {
      this.length = 0;
    }
  }

  toString() {
    if (this.length === 0) {
      return "...";
    }
    if (this.string.length > this.length) {
      return this.string.slice(0, this.length) + "...";
    }
    return this.string;
  }
}

let test = new Stringer("Test", 5);
console.log(test.toString()); // Test
test.decrease(3);
console.log(test.toString()); // Te...
test.decrease(5);
console.log(test.toString()); // ...
test.increase(4);
console.log(test.toString()); // Test

// let str = "Test";
// let length = 2;

// str = str.slice(0, 2);

// console.log(str);
