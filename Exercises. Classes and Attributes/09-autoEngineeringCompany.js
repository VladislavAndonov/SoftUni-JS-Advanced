function carCompany(arr) {
  let result = {};
  for (let line of arr) {
    let [carBrand, carModel, producedCars] = line.split(" | ");
    producedCars = Number(producedCars);

    if (!result.hasOwnProperty(carBrand)) {
      result[carBrand] = {};
    }

    if (!result[carBrand].hasOwnProperty(carModel)) {
      result[carBrand][carModel] = producedCars;
    } else {
      result[carBrand][carModel] += producedCars;
    }
  }

  for (let brand in result) {
    console.log(brand);
    for (let model in result[brand]) {
      console.log(`###${model} -> ${result[brand][model]}`);
    }
  }
}

carCompany([
  "Audi | Q7 | 1000",
  "Audi | Q6 | 100",
  "BMW | X5 | 1000",
  "BMW | X6 | 100",
  "Citroen | C4 | 123",
  "Volga | GAZ-24 | 1000000",
  "Lada | Niva | 1000000",
  "Lada | Jigula | 1000000",
  "Citroen | C4 | 22",
  "Citroen | C5 | 10",
]);
