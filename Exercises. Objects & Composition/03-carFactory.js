function carFactory(carComponents) {
  let result = {};
  let components = Object.entries(carComponents);
  for (let component of components) {
    if (component[0] == "model") {
      result[component[0]] = component[1];
    } else if (component[0] == "power") {
      if (component[1] <= 90) {
        result["engine"] = { power: 90, volume: 1800 };
      } else if (component[1] <= 120) {
        result["engine"] = { power: 120, volume: 2400 };
      } else if (component[1] >= 200) {
        result["engine"] = { power: 200, volume: 3500 };
      }
    } else if (component[0] == "color") {
      result["carriage"] = { type: undefined, color: component[1] };
    } else if (component[0] == "carriage") {
      result.carriage.type = component[1];
    } else if (component[0] == "wheelsize") {
      result["wheels"] = [];
      for (let i = 0; i < 4; i++) {
        if (component[1] % 2 == 0) {
          result.wheels.push(component[1] - 1);
        } else {
          result.wheels.push(component[1]);
        }
      }
    }
  }
  return result;
}
carFactory({
  model: "VW Golf II",
  power: 90,
  color: "blue",
  carriage: "hatchback",
  wheelsize: 14,
});
