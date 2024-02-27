function argInfo(...argArr) {
  let result = {};
  for (let arg of argArr) {
    let type = typeof arg;
    console.log(`${type}: ${arg}`);
    if (!result.hasOwnProperty(type)) {
      result[type] = 0;
    }
    result[type] += 1;
  }
  let sortedResult = Object.entries(result).sort((a, b) => b[1] - a[1]);

  for (let [type, count] of sortedResult) {
    console.log(`${type} = ${count}`);
  }
}
argInfo("cat", 42, function () {
  console.log("Hello world!");
});
