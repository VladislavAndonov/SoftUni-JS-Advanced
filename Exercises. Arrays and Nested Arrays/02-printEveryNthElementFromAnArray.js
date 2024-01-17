function printElement(arr, elNum) {
  let elCount = elNum;
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (elCount == elNum) {
      result.push(arr[i]);
      elCount = 0;
    }
    elCount++;
  }
 return result;
}
printElement(["5", "20", "31", "4", "20"], 2);
