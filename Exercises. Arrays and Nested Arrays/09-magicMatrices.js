function magicMatrices(matrix) {
  isMagical = true;
  for (let i = 0; i < matrix.length - 1; i++) {
    let firstRow = matrix.reduce((acc, value) => {
      acc += value[i];
      return acc;
    }, 0);
    let secondRow = matrix.reduce((acc, value) => {
      acc += value[i + 1];
      return acc;
    }, 0);
    let firstCol = matrix[i].reduce((acc, value) => acc + value);
    let secondCol = matrix[i + 1].reduce((acc, value) => acc + value);
    if (firstRow !== secondRow || firstCol !== secondCol) {
      isMagical = false;
    }
  }
  console.log(isMagical);
}
magicMatrices([
  [4, 5, 6],
  [6, 5, 4],
  [5, 5, 5],
]);
