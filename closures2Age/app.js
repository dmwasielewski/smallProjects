'use strict';

const user = (name = '', age = 18) => {
  let userName = name; // heap memory (long lived) - more memory
  let userAge = age;

  // self contained
  function showName() {
    console.log(
      `Hi ${userName}, ${userAge >= 18 ? 'You can access' : 'KLOCHAM MISIA'}`
    );
  }
  console.log('User: ' + userName, 'Age: ' + userAge);
  return showName;
};

const damian = user('Karol', 20);
damian();
