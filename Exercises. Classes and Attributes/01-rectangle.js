class Rectangle {
  constructor(width, height, color) {
    (this.width = width), (this.height = height), (this.color = color);
  }

  get width() {
    return this._width;
  }
  get height() {
    return this._height;
  }
  get color() {
    return this._color;
  }

  set width(width) {
    if (typeof width === "number") {
      this._width = width;
    }
  }
  set height(height) {
    if (typeof height === "number") {
      this._height = height;
    }
  }
  set color(color) {
    if (typeof color === "string") {
      this._color = color;
    }
  }

  calcArea() {
    return this.width * this.height;
  }
}

let rect = new Rectangle(4, 5, "Red");
console.log(rect.width);
console.log(rect.height);
console.log(rect.color);
console.log(rect.calcArea());
