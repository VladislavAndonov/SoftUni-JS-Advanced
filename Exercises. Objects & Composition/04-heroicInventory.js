function inventory(arr) {
  let result = [];
  for (let line of arr) {
    let [name, level, itemsStr] = line.split(" / ");
    level = Number(level);
    let obj = {
      name,
      level,
      items: itemsStr ? itemsStr.split(", ") : [],
    };
    result.push(obj);
  }
  return JSON.stringify(result);
}
console.log(
  inventory([
    "Isacc / 25 / Apple, GravityGun",
    "Derek / 12 / BarrelVest, DestructionSword",
    "Hes / 1 / Desolator, Sentinel, Antara",
  ])
);
