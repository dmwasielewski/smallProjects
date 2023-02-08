'use strict';

const optionsArray = ['test1', 'test2', 'test3'];
const input = document.querySelector('input');

const showAdvice = (event) => {
  event.preventDefault();
  const index = Math.floor(Math.random() * optionsArray.length);
  console.log(index);
  document.querySelector('h3').textContent = optionsArray[index];
  input.value = '';
};

const addAdvice = (event) => {
  event.preventDefault();
  optionsArray.push(input.value);
  alert('Done. You added: ' + input.value);
  // console.log(optionsArray);
  input.value = '';
};

const resetAdvice = (event) => {
  // event.preventDefault(); used outside form, so I don't need use preventDefault or use in html button type="button"
  optionsArray.length = 0;
  // console.log(optionsArray);
  // alert('reset advice ok');
  document.querySelector('h3').textContent = '';
  input.value = '';
};

const showOptions = (event) => {
  // event.preventDefault();
  alert('Your options are: \n' + optionsArray.join(',\n'));
  input.value = '';
};

document.querySelector('.addAdvice').addEventListener('click', addAdvice);

document.querySelector('.resetAdvice').addEventListener('click', resetAdvice);

document.querySelector('.showAdvice').addEventListener('click', showAdvice);

document.querySelector('.showOptions').addEventListener('click', showOptions);
