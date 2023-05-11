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
    return; //Preventing creation an empty li element
  }

  // Create list item
  const li = document.createElement('li');
  li.append(document.createTextNode(newInputItem));

  const button = createButton('remove-item btn-item-del');
  li.append(button);
  itemList.append(li);
  itemInput.value = '';
}

function createButton(classes) {
  const button = document.createElement('button');
  button.className = classes;
  const icon = createIcon('fa-solid fa-square-xmark');
  button.append(icon);
  return button;
}

function createIcon(classes) {
  const icon = document.createElement('i');
  icon.className = classes;
  return icon;
}

// Event listeners
itemForm.addEventListener('submit', addItem);
// buttonSub.addEventListener('click', addItem);
