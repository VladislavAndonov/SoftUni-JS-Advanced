(function () {
  String.prototype.ensureStart = function (str) {
    if (this.startsWith(str)) {
      return this.toString();
    } else {
      return str + this;
    }
  };
  String.prototype.ensureEnd = function (str) {
    if (this.endsWith(str)) {
      return this.toString();
    } else {
      return this + str;
    }
  };
  String.prototype.isEmpty = function () {
    if (this.length === 0) {
      return true;
    } else {
      return false;
    }
  };
  String.prototype.truncate = function (n) {
    if (n < 4) {
      return ".".repeat(n);
    } else if (this.length <= n) {
      return this.toString();
    }
    if (this.includes(" ")) {
      let words = this.split(" ");
      let res = [];
      for (let word of words) {
        if (res.join(" ").length + word.length + 3 <= n) {
          res.push(word);
        } else {
          break;
        }
      }
      return res.join(" ") + "...";
    }
    return this.slice(0, n - 3) + "...";
  };
  String.format = function (str, ...params) {
    for (let i = 0; i < params.length; i++) {
      str = str.replace(`{${i}}`, params[i]);
    }
    return str;
  };
})();

let str = "my string";
console.log((str = str.ensureStart("my")));
console.log((str = str.ensureStart("hello ")));
console.log((str = str.truncate(16)));
console.log((str = str.truncate(14)));
console.log((str = str.truncate(8)));
console.log((str = str.truncate(4)));
console.log((str = str.truncate(2)));
console.log((str = String.format("The {0} {1} fox", "quick", "brown")));
console.log((str = String.format("jumps {0} {1}", "dog")));
