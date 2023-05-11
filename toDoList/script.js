'use strict';

const itemForm = document.querySelector('#item-form');
const itemInput = document.querySelector('#item-form-input');
const itemList = document.querySelector('#item-list');
const itemsClear = document.querySelector('#btn-clear');
const itemFilter = document.querySelector('#item-filter');
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
  filterState();
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
    // event.target.parentElement.parentElement.remove();
    event.target.closest('li').remove();
  }
}

function clearItems() {
  if (confirm('Are you sure?')) {
    itemList.innerHTML = '';
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

// console.log(typeof itemList);

// Event listeners
itemForm.addEventListener('submit', addItem);
itemList.addEventListener('click', removeItem);
itemsClear.addEventListener('click', clearItems);
itemFilter.addEventListener('input', filterItems);
// buttonSub.addEventListener('click', addItem);
