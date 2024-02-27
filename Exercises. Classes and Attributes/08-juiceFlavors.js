function solve(flavours) {
  let juices = {};
  let result = {};

  for (let tokens of flavours) {
    let [flavour, qty] = tokens.split(" => ");
    qty = Number(qty);
    if (juices.hasOwnProperty(flavour)) {
      juices[flavour] += qty;
    } else {
      juices[flavour] = qty;
    }
    if (juices[flavour] / 1000 >= 1) {
      if (!result.hasOwnProperty(flavour)) {
        result[flavour] = parseInt(juices[flavour] / 1000);
        juices[flavour] = juices[flavour] - result[flavour] * 1000;
      } else {
        result[flavour] += parseInt(juices[flavour] / 1000);
        juices[flavour] = juices[flavour] - result[flavour] * 1000;
      }
    }
  }
  let kvps = Object.entries(result);
  for (let kvp of kvps) {
    console.log(`${kvp[0]} => ${kvp[1]}`);
  }
}
solve([
  "Orange => 2000",
  "Peach => 1432",
  "Banana => 450",
  "Peach => 600",
  "Strawberry => 549",
]);
