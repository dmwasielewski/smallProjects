'use strict';

const itemForm = document.querySelector('#item-form');
const itemInput = document.querySelector('#item-form-input');
const itemList = document.querySelector('#item-list');
// const buttonSub = document.querySelector('.btn-add');

function addItem(event) {
  event.preventDefault();

  const newInputItem = itemInput.value;

  // Validate user input and handle the error
  try {
    if (newInputItem === '') {
      throw new Error('Item missing');
    }
  } catch (error) {
    console.error('User error:', error.message);
    alert('Please write an item');
  }

  // Create list item
  const li = document.createElement('li');
  li.append(document.createTextNode(newInputItem));

  const button = createButton('remove-item btn-item-del');
}

function createButton(classes) {
  const button = document.createElement('button');
  button.className = classes;
  return button;
}

// Event listeners
itemForm.addEventListener('submit', addItem);
// buttonSub.addEventListener('click', addItem);
