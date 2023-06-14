'use strict';

// const oranges = new Product('Oranges', 14.23);
// const potatoes = new Product('Potatoes', 14.21);
// const milk = new Product('Milk', 15.2);
// const banana = new Product('Banana', 1.2);

// basket.add(oranges);
// basket.add(potatoes);
// basket.add(milk);
// basket.add(banana);

// // basket.add('qwerty');
// // console.log(basket);

// console.log(basket.getTotalValue());
// basket.remove(4);
// basket.showBasket();
// console.log('Next line: ');
// console.log(basket.getTotalValue());

// // console.log(oranges);

const buyBtns = [...document.querySelectorAll('[data-name]')];
const basketUl = document.querySelector('.basket-list');
const buyAllBtn = document.querySelector('.btn-buy-all');

const basket = new Basket();

const removeItem = (event) => {
  // const element = event.target.dataset.name;
  // console.log('deleting: ', event.target.dataset.id);
  const id = Number(event.target.dataset.id);
  basket.remove(id);
  createBasketUi();
};

const createBasketUi = () => {
  basketUl.innerText = '';
  const summary = basket.getBasketSummary();

  for (const { id, text } of summary) {
    // console.log(oneProductInfo);
    // const { id, text } = oneProductInfo;

    const newLi = document.createElement('li');
    // newLi.innerText = oneProductInfo.text;
    newLi.innerText = text;
    newLi.addEventListener('click', removeItem);
    // newLi.dataset.id = oneProductInfo.id;
    newLi.dataset.id = id;
    basketUl.appendChild(newLi);
  }

  const basketTotalValue = basket.getTotalValue();
  buyAllBtn.innerText = `Buy all for: £${basketTotalValue.toFixed(2)}`;
  if (basketTotalValue > 0) {
    buyAllBtn.removeAttribute('disabled');
  } else {
    buyAllBtn.setAttribute('disabled', true); //two arguments required
  }
  // buyAllBtn.disabled = basketTotalValue === 0; //different way
};

const addProductToBasket = (event) => {
  const name = event.target.dataset.name;
  const price = Number(event.target.dataset.price);

  const newProduct = new Product(name, price);
  //   console.log(newProduct);
  basket.add(newProduct);
  //   basket.getBasketSummary();
  //   console.log(basket.getBasketSummary());
  createBasketUi();
};

const buyAllProducts = () => {
  const basketTotalValue = basket.getTotalValue();
  alert(`Thank you. Total price: £${basketTotalValue.toFixed(2)}`);
  basket.clear();
  createBasketUi();
};

for (const btn of buyBtns) {
  btn.addEventListener('click', addProductToBasket);
}

// buyBtns[0].addEventListener('click', (event) => {
//   console.log('Clicked:', event.target.dataset.id);
//   console.log('Second line: ', this);
// });

// buyBtns[0].addEventListener('click', function (event) {
//   console.log('Clicked:', event.target.dataset.id);
//   console.log('Second line: ', this.getAttribute('data-id'));
// });

// console.log(buyBtns);

buyAllBtn.addEventListener('click', buyAllProducts);

createBasketUi();
