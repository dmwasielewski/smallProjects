'use strict';

const itemForm = document.querySelector('#item-form');
const itemInput = document.querySelector('#item-form-input');
const itemList = document.querySelector('#item-list');

function addItem(e) {
  e.preventDefault();

  const newItem = itemInput.value;
  //Validate input
  if (newItem === '') {
    alert('Please add an item');
    return;
  }
  console.log('success'); //?
  console.log('ss'); //?
}

// Event listeners
itemForm.addEventListener('submit', addItem);
