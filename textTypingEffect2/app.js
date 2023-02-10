'use strict';

const spanCaret = document.querySelector('.caret');
const spanText = document.querySelector('.text');
const txt = ['test1', 'test2', 'test3'];

let activeLetter = -15; //delayed start
let activeText = 0;

const addLetter = () => {
  if (activeLetter >= 0) {
    spanText.textContent += txt[activeText][activeLetter];
  }
  activeLetter++;
  if (activeLetter === txt[activeText].length) {
    activeText++; // next text in array
    if (activeText === txt.length) return; // stop addLetter function

    return setTimeout(() => {
      activeLetter = -15; //reset letter index number from txt, with delayed start
      spanText.textContent = '';
      addLetter();
    }, 2000);
  }

  setTimeout(addLetter, 100);
};

addLetter();

const caretAnimation = () => {
  spanCaret.classList.toggle('active');
};

setInterval(caretAnimation, 450);
