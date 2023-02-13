'use strict';

const clock = () => {
  const time = new Date();
  // .padStart method pads the current string with another string the given length
  const seconds = String(time.getSeconds()).padStart(2, '0');

  // .slice(-2) 0 + -2 will stay
  const minutes = ('0' + time.getMinutes()).slice(-2);
  // ternary operator : trythy : falsy
  const hours = time.getHours() < 10 ? '0' + time.getHours() : time.getHours();

  // console.log(seconds);
  // console.log(minutes);
  // console.log(hours);

  document.querySelector(
    '.clock span'
  ).textContent = `${hours}:${minutes}:${seconds}`;
};

setInterval(clock, 500);
