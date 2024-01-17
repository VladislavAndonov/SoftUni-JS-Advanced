function addAndRemove(arr) {
  let result = [];
  let counter = 1;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == "add") {
      result.push(counter);
    } else if (arr[i] == "remove") {
      result.pop(counter);
    }
    counter++;
  }
  if (result.length > 0) {
    console.log(result.join("\n"));
  } else {
    console.log("Empty");
  }
}
// addAndRemove(["add", "add", "add", "add"]);
addAndRemove(["add", "add", "remove", "add", "add"]);
// addAndRemove(["remove", "remove", "remove"]);
