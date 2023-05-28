'use strict';

function fetchUser() {
  fetch('https://randomuser.me/api/')
    .then((response) => response.json())
    .then((data) => {
      // console.log(data);
      // console.log(data.results[0]);

      displayUser(data.results[0]);
    });
}

function displayUser(userData) {
  console.log(userData);
  console.log(userData.name.first);

  const userDisplay = document.querySelector('#user');

  if (userData.gender === 'male') {
    document.body.style.backgroundColor = 'MediumSlateBlue';
  } else {
    document.body.style.backgroundColor = 'MediumOrchid';
  }

  userDisplay.innerHTML = `<div class="flex justify-between">
                <div class="flex">
                    <img class="w-48 h-48 rounded-full mr-8" src=${userData.picture.large} />
                    <div class="space-y-3">
                        <p class="text-xl">
                            <span class="font-bold">Name: </span>${userData.name.first} ${userData.name.last}
                        </p>
                        <p class="text-xl">
                            <span class="font-bold">Email: </span> ${userData.email}
                        </p>
                        <p class="text-xl">
                            <span class="font-bold">Phone: </span> ${userData.phone}
                        </p>
                        <p class="text-xl">
                            <span class="font-bold">Location: </span> ${userData.location.city}
                        </p>
                        <p class="text-xl"><span class="font-bold">Age: </span> ${userData.dob.age}</p>
                    </div>
                </div>
            </div>`;
}

document.querySelector('#generate').addEventListener('click', fetchUser);
document.addEventListener('DOMContentLoaded', fetchUser);
