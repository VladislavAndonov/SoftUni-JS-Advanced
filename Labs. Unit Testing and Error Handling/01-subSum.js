function sumEls(arr, startInx, endInx) {
  if (!Array.isArray(arr)) {
    return NaN;
  }
  if (startInx < 0) {
    startInx = 0;
  }
  if (endInx > arr.length - 1) {
    endInx = arr.length - 1;
  }
  let sum = 0;

  for (let i = Number(startInx); i <= Number(endInx); i++) {
    sum += Number(arr[i]);
  }
  return sum
}
sumEls([10, 20, 30, 40, 50, 60], 3, 300);
