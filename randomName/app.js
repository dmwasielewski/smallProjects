'use strict';

const btn = document.querySelector('.btn');
const text = document.querySelector('.text');

const names = [
  'Adam',
  'Arden',
  'Azalea',
  'Birdie',
  'Blythe',
  'Clover',
  'Lilac',
  'Lavender',
  'Posey',
  'Wally',
];
// console.log(names.length);
const nameGenerator = () => {
  const index = Math.floor(Math.random() * names.length);
  text.textContent = `Best name for you is: ${names[index]}`;
};

btn.addEventListener('click', nameGenerator);
