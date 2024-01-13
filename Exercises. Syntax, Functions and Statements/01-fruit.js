function fruit(type, num1, num2) {
  let weight = num1 / 1000;
  let price = weight * num2;
  console.log(
    `I need $${price.toFixed(2)} to buy ${weight.toFixed(2)} kilograms ${type}.`
  );
}
fruit("orange", 2500, 1.8);
