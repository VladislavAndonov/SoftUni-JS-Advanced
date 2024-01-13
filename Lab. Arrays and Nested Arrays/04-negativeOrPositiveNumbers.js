function solve(arr) {
  let result = [];
  for (let el of arr) {
    if (el < 0) {
      result.unshift(el);
    } else {
      result.push(el);
    }
  }
  console.log(result.join("\n"));
}
solve([7, -2, 8, 9]);
