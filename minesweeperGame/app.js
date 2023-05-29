'use strict';
const elements = document.querySelector('#elements');
const pointsElement = document.querySelector('#points');
const message = document.querySelector('#message');
const btn = document.querySelector('#btn');

// console.log(pointsElement);
let points = 0;

function selectElement(event) {
  const td = event.target.closest('td');
  event.target.classList.add('show');

  if (td.dataset.points) {
    points += Number(td.dataset.points);
    pointsElement.innerText = points;
  } else {
    console.log('game over');
    removeGameEvent();
    message.innerText = 'Game over!';
    removeBtn();
  }

  if (points >= 150) {
    message.innerText = 'You Won!';
    removeGameEvent();
    removeBtn();
  }

  //   console.log(td);
  //   console.log('Points: ', points);
}

function removeGameEvent() {
  elements.removeEventListener('click', selectElement);
}

function removeBtn() {
  btn.classList.remove('btn');
}

function reloadPage() {
  location.reload();
}

elements.addEventListener('click', selectElement);
btn.addEventListener('click', reloadPage);
