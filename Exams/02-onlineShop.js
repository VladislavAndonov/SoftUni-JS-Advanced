class OnlineShop {
  constructor(warehouseSpace) {
    this.warehouseSpace = warehouseSpace;
    this.products = [];
    this.sales = [];
  }

  loadingStore(product, quantity, spaceRequired) {
    if (spaceRequired > this.warehouseSpace) {
      throw new Error("Not enough space in the warehouse.");
    }

    this.products.push({ product, quantity });
    this.warehouseSpace -= spaceRequired;

    return `The ${product} has been successfully delivered in the warehouse.`;
  }

  quantityCheck(product, minimalQuantity) {
    if (minimalQuantity <= 0) {
      throw new Error(`The quantity cannot be zero or negative.`);
    }

    const foundProduct = this.products.find((p) => p.product === product);
    if (!foundProduct) {
      throw new Error(`There is no ${product} in the warehouse.`);
    }

    if (minimalQuantity <= foundProduct.quantity) {
      return `You have enough from product ${product}.`;
    } else {
      const difference = minimalQuantity - foundProduct.quantity;
      foundProduct.quantity = minimalQuantity;
      return `You added ${difference} more from the ${product} products.`;
    }
  }

  sellProduct(product) {
    const foundProduct = this.products.find((p) => p.product === product);
    if (!foundProduct) {
      throw new Error(`There is no ${product} in the warehouse.`);
    }

    if (foundProduct.quantity <= 0) {
      throw new Error(`There are no ${product} in the warehouse.`);
    }

    foundProduct.quantity--;
    const soldProduct = this.sales.find((s) => s.product === product);
    if (soldProduct) {
      soldProduct.quantity++;
    } else {
      this.sales.push({ product, quantity: 1 });
    }

    return `The ${product} has been successfully sold.`;
  }

  revision() {
    if (this.sales.length === 0) {
      throw new Error(`There are no sales today!`);
    }

    const totalSales = this.sales.reduce((total, sale) => total + sale.quantity, 0);
    let result = `You sold ${totalSales} products today!\n`;
    result += "Products in the warehouse:\n";
    this.products.forEach(({ product, quantity }) => {
      result += `${product}-${quantity} more left\n`;
    });

    return result;
  }
}
const myOnlineShop = new OnlineShop(500);
console.log(myOnlineShop.loadingStore("headphones", 10, 200));
console.log(myOnlineShop.loadingStore("laptop", 5, 200));
console.log(myOnlineShop.loadingStore("TV", 40, 500));
console.log(myOnlineShop.quantityCheck("headphones", 10));
console.log(myOnlineShop.sellProduct("headphones"));
console.log(myOnlineShop.revision());
