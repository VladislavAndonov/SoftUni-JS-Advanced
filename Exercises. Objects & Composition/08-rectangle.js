function rectangle(width, height, color) {
  color = color.replace(color[0], color[0].toUpperCase());
  let rectangle = {
    width,
    height,
    color,
    calcArea: function () {
      return this.width * this.height;
    },
  };
  return rectangle;
}
let rect = rectangle(4, 5, "red");
console.log(rect.width);
console.log(rect.height);
console.log(rect.color);
console.log(rect.calcArea());
