function equalNums(matrix) {
  let equalPairs = 0;
  for (let i = 1; i < matrix.length; i++) {
    for (let k = 0; k < matrix[i].length; k++) {
      if (matrix[i][k] == matrix[i - 1][k]) {
        equalPairs++;
      }
    }
  }
  for (let i = 0; i < matrix.length; i++) {
    for (let k = 1; k < matrix[i].length; k++) {
      if (matrix[i][k] == matrix[i][k - 1]) {
        equalPairs++;
      }
    }
  }
  return equalPairs;
}
equalNums([
  ["2", "2", "5", "7", "4"],
  ["4", "0", "5", "3", "4"],
  ["2", "5", "5", "4", "2"],
]);
// equalNums([
//   ["2", "2", "yo", "ho"],
//   ["well", "done", "yo", "6"],
//   ["not", "done", "yet", "5"],
// ]);
