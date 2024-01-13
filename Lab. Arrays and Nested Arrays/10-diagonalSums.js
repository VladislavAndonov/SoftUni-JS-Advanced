function diagonalsSums(matrix) {
  let mainSum = 0;
  let secondarySum = 0;
  for (let i = 0; i < matrix.length; i++) {
    mainSum += matrix[i][i];
    secondarySum += matrix[i][matrix.length - 1 - i];
  }
  console.log(mainSum, secondarySum);
}
diagonalsSums([
  [20, 40],
  [10, 60],
]);
