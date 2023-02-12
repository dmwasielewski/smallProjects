'use strict';

//closure gives you access to an outer function’s scope from an inner function

const add = (start = 0) => {
  let number = start;
  return () => {
    number++;
    document.body.textContent = `Number =  ${number}`;
  };
};

const counter = add();
const counter5 = add(5);

document.addEventListener('click', counter5);
