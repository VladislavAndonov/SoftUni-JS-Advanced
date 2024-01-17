function listOfNames(arr) {
  let sorted = arr.sort((a, b) => a.localeCompare(b));
  let counter = 1;
  for (let name of sorted) {
    console.log(`${counter}.${name}`);
    counter++;
  }
}
listOfNames(["John", "Bob", "Christina", "Ema"]);
