'use strict';
fetch('https://randomuser.me/api/')
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    document.querySelector('h1').textContent = data.name;
  });
