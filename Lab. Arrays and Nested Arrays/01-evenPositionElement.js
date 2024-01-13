function evenPosition(arr) {
  let evenNums = [];
  for (let i = 0; i < arr.length; i++) {
    if (i % 2 == 0) {
      evenNums.push(arr[i]);
    }
  }
  console.log(evenNums.join(" "));
}
evenPosition(["20", "30", "40", "50", "60"]);
