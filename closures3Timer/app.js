'use strict';

const clock = () => {
  let seconds = 0;
  document.body.textContent = 0 + ' seconds';

  const timer = () => {
    seconds++;
    document.body.textContent = seconds + ' seconds';
  };
  return timer;
};

const start = clock();

setInterval(start, 1000);
