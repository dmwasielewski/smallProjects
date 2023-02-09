'use strict';

const gameSummary = {
  numbers: 0,
  wins: 0,
  losses: 0,
  draws: 0,
};

const game = {
  playerHand: '',
  aiHand: '',
};

// selecting image and unmark others

const hands = [...document.querySelectorAll('.select img')];

function handSelection() {
  game.playerHand = this.dataset.option;
  console.log(game.playerHand);
  hands.forEach((hand) => (hand.style.border = ''));
  this.style.border = '4px solid hsl(0, 89%, 70%)';
  //   this.style.boxShadow = '0 0 0 4px hsl(0, 89%, 70%)';
}

// const handSelection = (event) => {
//   game.playerHand = event.target.dataset;
//   console.log(game.playerHand);
// };

// ai choice
function aiChoice() {
  return hands[Math.floor(Math.random() * 3)].dataset.option;
  //   console.log(aiHand);
  // return aiHand;
}

// checking result
function checkResult(user, ai) {
  //   console.log(user, ai);
  if (user === ai) {
    // console.log('draw');
    return 'draw';

    //   all user win conditions
  } else if (
    (user === 'paper' && ai === 'rock') ||
    (user === 'rock' && ai === 'scissors') ||
    (user === 'scissors' && ai === 'paper')
  ) {
    // console.log('win');
    return 'win';
  } else {
    // console.log('lost');
    return 'loss';
  }
}

function publishResult(user, ai, result) {
  document.querySelector('[data-summary="your-choice"]').textContent = user;
  document.querySelector('[data-summary="ai-choice"]').textContent = ai;

  document.querySelector('p.numbers span').textContent = ++gameSummary.numbers;

  if (result === 'win') {
    document.querySelector('p.wins span').textContent = ++gameSummary.wins;
    document.querySelector('[data-summary="who-win"]').textContent = 'You won!';
    document.querySelector('[data-summary="who-win"]').style.color = 'green';
  } else if (result === 'loss') {
    document.querySelector('p.losses span').textContent = ++gameSummary.losses;
    document.querySelector('[data-summary="who-win"]').textContent = 'AI won!';
    document.querySelector('[data-summary="who-win"]').style.color = 'blue';
  } else {
    document.querySelector('p.draws span').textContent = ++gameSummary.draws;
    document.querySelector('[data-summary="who-win"]').textContent = 'draw';
    document.querySelector('[data-summary="who-win"]').style.color = 'gray';
  }
}

function endGame() {
  document.querySelector(`[data-option='${game.playerHand}']`).style.border =
    '4px solid hsl(0, 0%, 40%)';
  game.playerHand = '';
  game.aiHand = '';
}

// MAIN function
const startGame = () => {
  // checking if selected
  if (!game.playerHand) {
    return alert('Choose one of the options');
  }
  // aiHand random
  game.aiHand = aiChoice();
  // comparison of game results
  const gameResult = checkResult(game.playerHand, game.aiHand);
  console.log(gameResult);
  // publishing the results of the game
  publishResult(game.playerHand, game.aiHand, gameResult);
  endGame();
};

// console.log(game.playerHand);
// console.log(game.aiHand);

hands.forEach((hand) => hand.addEventListener('click', handSelection));

document.querySelector('.start').addEventListener('click', startGame);
