'use strict';

class Basket {
  constructor() {
    this.items = [];
    this.totalValue = 0;
  }

  clear() {
    this.items.length = 0;
    // this.items.slice(0);
    // this.items = [];
    // console.log('cleared');
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
    return this.items.map((product, i) => {
      return {
        id: i + 1,
        text: `${i + 1} - ${product.name} - £${product.price.toFixed(2)}`,
      };
    });
    // .forEach((item) => console.log(item));
  }
}

class Product {
  constructor(productName, productPrice) {
    this.name = productName;
    this.price = productPrice;
  }
}
