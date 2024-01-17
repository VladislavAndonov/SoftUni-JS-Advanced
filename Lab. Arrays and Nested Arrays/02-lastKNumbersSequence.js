function numSequence(n, k) {
  let arr = [1];
  for (let i = 1; i < n; i++) {
    let sum = arr.slice(-k).reduce((a, b) => a + b, 0);
    arr.push(sum);
  }
  return arr;
}
numSequence(6, 3);
