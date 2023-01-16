'use strict';

let counterElements = 1;
const btn = document.querySelector('button');
const list = document.querySelector('ul');

const addElement = function () {
    const li = document.createElement('li');
    li.textContent = counterElements;
    if (counterElements % 3 == 0) {
        li.classList.add('big');
    }
    list.appendChild(li);
    counterElements += 2;
    console.log(counterElements);
};

btn.addEventListener('click', addElement);
