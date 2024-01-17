function sorting(arr) {
  let sorted = arr.sort((a, b) => a - b);
  let result = [];
  let counter = 0;
  for (let i = 0; i < sorted.length; i++) {
    if (i % 2 == 0) {
      result.push(sorted[counter]);
      counter++;
    } else {
      result.push(sorted[sorted.length - counter]);
    }
  }
  console.log(result);
}
sorting([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]);
