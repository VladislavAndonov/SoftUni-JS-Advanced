function smallestNum(arr) {
  let sorted = arr.sort((a, b) => a - b);
  let result = sorted.splice(0, 2);
  console.log(result.join(" "));
}
smallestNum([30, 15, 50, 5]);
