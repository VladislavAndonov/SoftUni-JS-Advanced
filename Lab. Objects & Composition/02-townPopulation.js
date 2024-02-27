function townPopulation(arr) {
  let towns = {};

  for (let el of arr) {
    let [town, population] = el.split(" <-> ");
    population = Number(population);
    if (towns.hasOwnProperty(town)) {
      towns[town] += population;
    } else {
      towns[town] = population;
    }
  }
  for (let town in towns) {
    console.log(`${town} : ${towns[town]}`);
  }
}
townPopulation([
  "Sofia <-> 1200000",
  "Montana <-> 20000",
  "New York <-> 10000000",
  "Washington <-> 2345000",
  "Las Vegas <-> 1000000",
]);
