'use strict';

const spanCaret = document.querySelector('.caret');
const spanText = document.querySelector('.text');
const txt = ['test1', 'test2', 'test3'];

const addLetter = () => {};

addLetter();

const caretAnimation = () => {
  spanCaret.classList.toggle('active');
};

setInterval(caretAnimation, 450);
