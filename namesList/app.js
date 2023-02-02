'use strict';

const div = document.querySelector('div');

const names = [];

const addName = (e) => {
  e.preventDefault();
  const input = document.querySelector('input');
  const name = input.value;
  names.push(name);
  console.log(names);
  div.textContent += name + ', ';
  input.value = '';
};

const btn = document.querySelector('button').addEventListener('click', addName);
