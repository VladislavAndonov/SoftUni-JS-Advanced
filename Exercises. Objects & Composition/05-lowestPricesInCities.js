function lowestPrice(arr) {
  let result = [];
  let products = {};
  for (let line of arr) {
    let [town, product, price] = line.split(" | ");
    price = Number(price);

    if (!products.hasOwnProperty(product)) {
      products[product] = { price, town };
    } else if (price < products[product].price) {
      products[product] = { price, town };
    }
  }
  for (let product in products) {
    result.push(
      `${product} -> ${products[product].price} (${products[product].town})`
    );
  }
  console.log(result.join("\n"));
}
lowestPrice([
  "Sample Town | Sample Product | 1000",
  "Sample Town | Orange | 2",
  "Sample Town | Peach | 1",
  "Sofia | Orange | 3",
  "Sofia | Peach | 2",
  "New York | Sample Product | 1000.1",
  "New York | Burger | 10",
]);
