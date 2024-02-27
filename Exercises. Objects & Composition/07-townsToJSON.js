function townsToJSON(arr) {
  let parameters = arr[0]
    .split("|")
    .filter((a) => a !== "")
    .map((a) => a.trim());
  let towns = [];

  class TownInfo {
    constructor(town, latitude, longitude) {
      this[parameters[0]] = town;
      this[parameters[1]] = Number(latitude.toFixed(2));
      this[parameters[2]] = Number(longitude.toFixed(2));
    }
  }
  for (let i = 1; i < arr.length; i++) {
    let currentTown = arr[i].split("|").filter((a) => a !== "");
    let town = new TownInfo(
      currentTown[0].trim(),
      Number(currentTown[1]),
      Number(currentTown[2])
    );
    towns.push(town);
  }
  return JSON.stringify(towns);
}
// console.log(
//   townsToJSON([
//     "| Town | Latitude | Longitude |",
//     "| Sofia | 42.696552 | 23.32601 |",
//     "| Beijing | 39.913818 | 116.363625 |",
//   ])
// );

console.log(
  townsToJSON([
    "| Town | Latitude | Longitude |",
    "| Veliko Turnovo | 43.0757 | 25.6172 |",
    "| Monatevideo | 34.50 | 56.11 |",
  ])
);
