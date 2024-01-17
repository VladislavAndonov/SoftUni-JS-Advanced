function solve(el, ...actions) {
  let elToNum = Number(el);

  for (let action of actions) {
    if (action == "chop") {
      elToNum /= 2;
      console.log(elToNum);
    } else if (action == "dice") {
      elToNum = Math.sqrt(elToNum);
      console.log(elToNum);
    } else if (action == "spice") {
      elToNum++;
      console.log(elToNum);
    } else if (action == "bake") {
      elToNum *= 3;
      console.log(elToNum);
    } else if (action == "fillet") {
      elToNum *= 0.8;
      console.log(elToNum.toFixed(1));
    }
  }
}
solve("9", "dice", "spice", "chop", "bake", "fillet");
