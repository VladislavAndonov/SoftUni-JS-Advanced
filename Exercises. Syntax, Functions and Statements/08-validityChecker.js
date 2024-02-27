function isValidDistance(x1, y1, x2, y2) {
  const distanceToOrigin1 = Math.sqrt(x1 ** 2 + y1 ** 2);
  const distanceToOrigin2 = Math.sqrt(x2 ** 2 + y2 ** 2);
  const distanceBetweenPoints = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);

  const isValid = (distance) => Number.isInteger(distance);

  const printResult = (point1, point2, distance) => {
    console.log(
      `${point1} to ${point2} is ${isValid(distance) ? "valid" : "invalid"}`
    );
  };

  printResult(`{${x1}, ${y1}}`, `{0, 0}`, distanceToOrigin1);
  printResult(`{${x2}, ${y2}}`, `{0, 0}`, distanceToOrigin2);
  printResult(`{${x1}, ${y1}}`, `{${x2}, ${y2}}`, distanceBetweenPoints);
}
isValidDistance(3, 0, 0, 4);
