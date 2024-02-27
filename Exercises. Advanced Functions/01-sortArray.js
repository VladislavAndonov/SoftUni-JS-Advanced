function sortArray(arr, sortOrder) {
  if (sortOrder == "asc") {
    arr.sort((a, b) => a - b);
  } else {
    arr.sort((a, b) => b - a);
  }
  return arr;
}
sortArray([14, 7, 17, 6, 8], "asc");
