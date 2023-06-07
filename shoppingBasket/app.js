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
      this.items
        .reduce((prev, productPrice) => prev + productPrice.price, 0)
        .toFixed(2)
    );
  }

  showBasket() {
    this.items
      .map(
        (product, i) =>
          `${i + 1} - ${product.name} - £${product.price.toFixed(2)}`
      )
      .forEach((item) => console.log(item));
  }
}

class Product {
  constructor(productName, productPrice) {
    this.name = productName;
    this.price = productPrice;
  }
}

const shopBasket = new Basket();

const oranges = new Product('Oranges', 14.23);
const potatoes = new Product('Potatoes', 14.21);
const milk = new Product('Milk', 15.2);
const banana = new Product('Banana', 1.2);

shopBasket.add(oranges);
shopBasket.add(potatoes);
shopBasket.add(milk);
shopBasket.add(banana);

// shopBasket.add('qwerty');
// console.log(shopBasket);

console.log(shopBasket.getTotalValue());
shopBasket.remove(4);
shopBasket.showBasket();
console.log('Next line: ');
console.log(shopBasket.getTotalValue());

// console.log(oranges);
