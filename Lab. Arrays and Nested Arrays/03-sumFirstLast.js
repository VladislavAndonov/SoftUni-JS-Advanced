function solve(arr) {
  let arrToNums = arr.map((el) => Number(el));
  let result = arrToNums.shift() + arrToNums.pop();
  console.log(result);
}
solve(["20", "30", "40"]);
