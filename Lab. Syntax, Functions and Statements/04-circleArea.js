function circleArea(arg) {
  let argType = typeof arg;
  if (argType != "number") {
    console.log(
      `We can not calculate the circle area, because we receive a ${argType}.`
    );
  } else {
    let area = Math.PI * arg ** 2;
    console.log(area.toFixed(2));
  }
}
circleArea(5);
