'use strict';

const daysD = document.querySelector('.d');
const hoursH = document.querySelector('.h');
const minutesM = document.querySelector('.m');
const secondsS = document.querySelector('.s');

const endTime = new Date('2023-09-24 00:00:00').getTime();

setInterval(() => {
  const nowTime = parseInt(new Date().getTime()); //getTime() returns the number of milliseconds since January 1, 1970 00:00:00.

  // const time = String(endTime - nowTime).slice(0, -3);
  // cut milliseconds from index 0 to index -3 save or just divided by 1000 with Math.floor

  const time = endTime - nowTime;

  const days = Math.floor(time / (1000 * 60 * 60 * 24));
  const hours = Math.floor(time / (1000 * 60 * 60)) % 24;
  const minutes = Math.floor(time / (1000 * 60)) % 60;
  const seconds = Math.floor(time / 1000) % 60;

  daysD.textContent = days;
  hoursH.textContent = hours;
  minutesM.textContent = minutes;
  secondsS.textContent = seconds;
}, 1000);
