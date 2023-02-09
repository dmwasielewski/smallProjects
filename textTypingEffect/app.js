'use strict';

const spanCaret = document.querySelector('.caret');
const spanText = document.querySelector('.text');
const txt =
  'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias, porro voluptatem iste odio odit impedit dolorem quam possimus. Adipisci minima libero quos rem facilis magni reprehenderit qui facere cum vitae?';

let indexText = 0;
const time = 100;

const addLetter = () => {
  spanText.textContent += txt[indexText];
  indexText++;
  if (indexText === txt.length) {
    clearInterval(indexTyping); //I can use a numeric value instead of a name example 1
  }
};

const caretAnimation = () => {
  spanCaret.classList.toggle('active');
};

const indexTyping = setInterval(addLetter, time);

setInterval(caretAnimation, 450);
