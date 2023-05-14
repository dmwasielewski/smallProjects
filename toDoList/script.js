'use strict';

const itemForm = document.querySelector('#item-form');
const itemInput = document.querySelector('#item-form-input');
const itemList = document.querySelector('#item-list');
const itemsClear = document.querySelector('#btn-clear');
const itemFilter = document.querySelector('#item-filter');
// const buttonSub = document.querySelector('.btn-add');

function displayItems() {
  const itemsFromStorage = getItemsFromStorage();
  itemsFromStorage.forEach((item) => addItemToDom(item));
}

function addItemSubmit(event) {
  event.preventDefault();

  const newInputItem = itemInput.value;

  // const pattern = /^[a-zA-Z]+$/;
  // const isLetterOnly = pattern.test(newInputItem);
  // Validate user input and handle the error
  try {
    if (newInputItem === '') {
      throw new Error('Item missing');
    }
  } catch (error) {
    console.error('User error:', error.message);
    alert('Please write an item');
    return newInputItem; //Preventing creation an empty li element
  }

  //Check duplicates
  const itemsFromStorage = getItemsFromStorage();
  if (itemsFromStorage.includes(newInputItem)) {
    alert('This item already exists!');

    // removeItem(item);
  } else {
    addItemToDom(newInputItem);
    //Add item to localStorage
    addItemToStorage(newInputItem);
    itemInput.value = '';
    filterState();
  }

  //Create item DOM element
}

// Add item to the DOM
function addItemToDom(itemText) {
  // Create list item
  const li = document.createElement('li');
  li.append(document.createTextNode(itemText));

  const button = createButton('remove-item btn-item-del');
  li.append(button);
  itemList.append(li);
}

//Get & Add item to the localStorage
function addItemToStorage(itemText) {
  const itemsFromStorage = getItemsFromStorage();

  //Add new item to array
  itemsFromStorage.push(itemText);

  //Convert to JSON string and set to local localStorage
  localStorage.setItem('items', JSON.stringify(itemsFromStorage));
}

//Get items from localStorage
function getItemsFromStorage() {
  let itemsFromStorage;
  //Check items in localStorage and get them to array
  if (localStorage.getItem('items') === null) {
    itemsFromStorage = [];
  } else {
    itemsFromStorage = JSON.parse(localStorage.getItem('items'));
  }
  return itemsFromStorage;
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

function removeItem(event) {
  if (event.target.parentElement.classList.contains('remove-item')) {
    //Remove item from DOM
    // event.target.parentElement.parentElement.remove();
    event.target.closest('li').remove();
    removeItemFromStorage(event.target.closest('li').textContent);
    // removeItemFromStorage(event.target.closest('li'));
  }
}

function removeItemFromStorage(item) {
  let itemsFromStorage = getItemsFromStorage();
  // console.log(itemsFromStorage);
  // Filter out item to be removed and save only !== ones
  itemsFromStorage = itemsFromStorage.filter((i) => i !== item);

  //Re-set to localStorage
  // console.log(
  //   'items from storage: ',
  //   itemsFromStorage,
  //   'last deleted !== item: ',
  //   item
  // );
  localStorage.setItem('items', JSON.stringify(itemsFromStorage));
}

function clearItems() {
  if (confirm('Are you sure?')) {
    itemList.innerText = '';
    localStorage.clear('items');
    filterState();
  }
}

// Disable or enable filter state;
function filterState() {
  if (itemList.innerHTML === '') {
    itemFilter.style.display = 'none';
    itemList.style.display = 'none';
  } else {
    itemFilter.style.display = 'flex';
    itemList.style.display = 'flex';
  }
}

// Filtering list
function filterItems(event) {
  const items = itemList.querySelectorAll('li'); //its NodeList
  // const items = Array.from(itemList.querySelectorAll('li'));
  // const items = [...itemList.querySelectorAll('li')];

  const filterText = event.target.value.toLowerCase();

  items.forEach((item) => {
    const itemName = item.textContent.toLowerCase(); //its string not NodeList, so I can use .includes method
    if (itemName.includes(filterText)) {
      item.style.display = 'flex'; // Show matching items
      // console.log(`Item text: ${itemName}`);
      // console.log(Array.isArray(itemName));
    } else {
      item.style.display = 'none'; // Hide non-matching items
    }
  });

  //   console.log(item);
  // console.log(filterText);
  // console.log(items);
}

// const re = /[]/g;
// console.log(typeof itemList);

// Initialize (app) event listeners with IIFE
(() => {
  itemForm.addEventListener('submit', addItemSubmit);
  itemList.addEventListener('click', removeItem);
  itemsClear.addEventListener('click', clearItems);
  itemFilter.addEventListener('input', filterItems);
  document.addEventListener('DOMContentLoaded', displayItems);
  // buttonSub.addEventListener('click', addItemSubmit);
})();
