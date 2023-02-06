// 'use strict';
const elementsArray = [];
const div = document.querySelector('div');

const addElement = (e) => {
  e.preventDefault();

  const input = document.querySelector('input');
  const newElement = input.value;
  if (input.value.length) {
    for (element of elementsArray) {
      if (element === newElement) {
        alert('already exists');
        return;
      }
    }
    elementsArray.push(newElement);

    div.textContent += newElement + ', ';
    input.value = '';
  }
};

document.querySelector('button').addEventListener('click', addElement);
