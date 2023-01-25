// 'use strict';
const input = document.getElementById('pass');
const div = document.querySelector('.message');

const passwords = ['uSer1', 'uSer2', 'uSer3'];
const messages = [
  'authorized access for User 1',
  'authorized access for User 2',
  'authorized access for User 3',
];

input.addEventListener('input', (e) => {
  div.textContent = ''; // disable message (only when password is correct)
  const text = e.target.value;

  // console.log(text);

  passwords.forEach((password, index) => {
    if (password.toLowerCase() === text.toLowerCase()) {
      console.log('password: ', password, 'index: ', index);
      div.textContent = messages[index];
      e.target.value = '';
    }
  });

  //  console.log(e.target.value);
  // if (passwords === e.target.value) {
  //   div.textContent = message;
  //   // e.target.value = '';
  // } else {
  //   // div.textContent = '';
  // }
});

console.log(input);
