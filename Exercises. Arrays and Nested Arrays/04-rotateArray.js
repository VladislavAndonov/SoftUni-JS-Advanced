function rotateArray(arr, rotationCount) {
  for (let i = 0; i < rotationCount; i++) {
    let curNum = arr.pop();
    arr.unshift(curNum);
  }
  console.log(arr.join(" "));
}
rotateArray(["1", "2", "3", "4"], 2);
