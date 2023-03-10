'use strict';
const div = document.querySelector('div');
let divX = 150;
let divY = 50;
div.style.left = divX + 'px';
div.style.top = `${divY}px`;

let drawActive = false; //flag to control the flow of a function or statement

let insertDivX;
let insertDivY;

div.addEventListener('mousedown', (e) => {
  div.style.backgroundColor = 'red';
  drawActive = !drawActive;

  insertDivX = e.offsetX; // the outer border of the current element
  insertDivY = e.offsetY;
  console.log(insertDivX, insertDivY);
});

div.addEventListener('mousemove', (e) => {
  if (drawActive) {
    divX = e.clientX - insertDivX;
    divY = e.clientY - insertDivY;

    div.style.left = `${divX}px`;
    div.style.top = `${divY}px`;
  }
});

div.addEventListener('mouseup', () => {
  console.log('mouseUp');
  div.style.backgroundColor = 'black';
  drawActive = !drawActive;
});
