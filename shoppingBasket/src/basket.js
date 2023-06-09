'use strict';

class Basket {
  constructor() {
    this.items = [];
    this.totalValue = 0;
  }

  add(item) {
    this.items.push(item);
    // this.addToTotalValue(item.price);
  }

  //   addToTotalValue(newPrice) {
  //     this.totalValue += newPrice;
  //   }
  remove(number) {
    this.items.splice(number - 1, 1);
  }

  setNewPrice(newPrice) {
    this.price = newPrice;
  }

  getTotalValue() {
    return Number(
      this.items.reduce((prev, productPrice) => prev + productPrice.price, 0)
    );
  }

  getBasketSummary() {
    return this.items.map(
      (product, i) =>
        `${i + 1} - ${product.name} - £${product.price.toFixed(2)}`
    );
    // .forEach((item) => console.log(item));
  }
}

class Product {
  constructor(productName, productPrice) {
    this.name = productName;
    this.price = productPrice;
  }
}
