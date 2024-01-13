function solve(arr) {
  let sum = 0;
  let inverseSum = 0;
  let concatSum = "";

  for (let i = 0; i < arr.length; i++) {
    let num = arr[i];
    sum += num;
    inverseSum += 1 / num;
    concatSum += String(num);
  }
  console.log(sum);
  console.log(inverseSum);
  console.log(concatSum);
}
solve([1, 2, 3]);
