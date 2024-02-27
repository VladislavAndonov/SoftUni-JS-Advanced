function solve(arr) {
  let result = {};
  for (let line of arr) {
    let [product, price] = line.split(" : ");
    price = Number(price);

    let letters = product[0].toUpperCase();

    if (!result.hasOwnProperty(letters)) {
      result[letters] = [];
    }
    result[letters].push({ product, price });
  }

  let sortedLetters = Object.keys(result).sort();

  for (let letter of sortedLetters) {
    console.log(letter);
    result[letter]
      .sort((a, b) => a.product.localeCompare(b.product))
      .forEach((el) => {
        console.log(`  ${el.product}: ${el.price}`);
      });
  }
}

solve([
  "Appricot : 20.4",
  "Fridge : 1500",
  "TV : 1499",
  "Deodorant : 10",
  "Boiler : 300",
  "Apple : 1.25",
  "Anti-Bug Spray : 15",
  "T-Shirt : 10",
]);
