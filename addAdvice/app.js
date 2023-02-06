// 'use strict';

const adviceArray = [];
const h1 = document.querySelector('h1');

const addAdvice = (e) => {
  e.preventDefault();

  const input = document.querySelector('input');
  const newAdvice = input.value;
  if (input.value.length) {
    for (element of adviceArray) {
      if (element === newAdvice) {
        alert('already exists');
        return;
      }
    }
    adviceArray.push(newAdvice);

    h1.textContent += newAdvice + ', ';
    input.value = '';
  }
};

document.querySelector('.addAdvice').addEventListener('click', addAdvice);
