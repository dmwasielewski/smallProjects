'use strict';
let size = 100;
let grow = true;

document.body.style.height = '1000px';

const div = document.createElement('div');
document.body.appendChild(div);
div.style.position = 'fixed';
div.style.top = 0;
div.style.left = 0;
div.style.width = '100%';
div.style.backgroundColor = 'green';
div.style.height = size + 'px';

const changeHeight = function () {
    if (size > window.innerHeight / 2) {
        grow = !grow;
        div.style.backgroundColor = 'red';
    } else if (size <= 0) {
        grow = !grow;
        div.style.backgroundColor = 'green';
    }
    if (grow) {
        size += 10;
    } else {
        size -= 10;
    }
    div.style.height = size + 'px';
};

window.addEventListener('scroll', changeHeight);
