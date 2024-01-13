function biggestEl(matrix) {
  let biggestEl = matrix[0][0];
  for (let arr of matrix) {
    for (el of arr) {
      if (el > biggestEl) {
        biggestEl = el;
      }
    }
  }
  console.log(biggestEl);
}
biggestEl([
  [20, 50, 10],
  [8, 33, 145],
]);
