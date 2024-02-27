(function () {
  Array.prototype.last = function () {
    return this[this.length - 1];
  };
  Array.prototype.skip = function (n) {
    return this.slice(n);
  };
  Array.prototype.take = function (n) {
    return this.slice(0, n);
  };
  Array.prototype.sum = function () {
    return this.reduce((acc, curValue) => acc + curValue);
  };
  Array.prototype.average = function () {
    return this.sum() / this.length;
  };
})();

let myArr = [1, 2, 3, 4];

myArr.last();

// myArr.skip(2);

// console.log(myArr.take(4));

console.log(myArr.sum());

console.log(myArr.average());
