function solution() {
    let storage = {
      protein: 0,
      carbohydrate: 0,
      fat: 0,
      flavour: 0,
    };
  
    const recipes = {
      apple: {
        carbohydrate: 1,
        flavour: 2,
      },
      lemonade: {
        carbohydrate: 10,
        flavour: 20,
      },
      burger: {
        carbohydrate: 5,
        fat: 7,
        flavour: 3,
      },
      eggs: {
        protein: 5,
        fat: 1,
        flavour: 1,
      },
      turkey: {
        protein: 10,
        carbohydrate: 10,
        fat: 10,
        flavour: 10,
      },
    };
  
    return function (input) {
      let [action, product, qty] = input.split(" ");
  
      switch (action) {
        case "restock":
          return restock(product, qty);
        case "prepare":
          return prepare(product, qty);
        case "report":
          return report();
      }
    };
  
    function restock(product, qty) {
      storage[product] += Number(qty);
      return "Success";
    }
  
    function prepare(product, qty) {
      let prepareRecipe = {};
      for (let [el, value] of Object.entries(recipes[product])) {
        let neededElQty = value * qty;
        if (storage[el] < neededElQty) {
          return `Error: not enough ${el} in stock`;
        }
        prepareRecipe[el] = neededElQty;
      }
      for (let [el, value] of Object.entries(prepareRecipe)) {
        storage[el] -= value;
      }
      return "Success";
    }
  
    function report() {
      return `protein=${storage.protein} carbohydrate=${storage.carbohydrate} fat=${storage.fat} flavour=${storage.flavour}`;
    }
  }

let manager = solution();
console.log(manager("restock flavour 50")); // Success
console.log(manager("prepare lemonade 4")); // Error: not enough carbohydrate in stock
