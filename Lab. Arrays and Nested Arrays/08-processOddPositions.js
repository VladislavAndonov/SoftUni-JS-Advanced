function solve(arr) {
  let oddPositions = arr.filter((el, i) => i % 2 != 0);
  let doubled = oddPositions.map((el) => el * 2);
  let reversed = doubled.reverse();
  let result = reversed.join(" ");
  console.log(result);
}
solve([10, 15, 20, 25]);
