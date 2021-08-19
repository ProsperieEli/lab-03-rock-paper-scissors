// import functions and grab DOM elements
import { didUserWin, getRandomThrow } from "./get-random-throw.js";

const myButton = document.querySelector('#submit');
const myResultsEl = document.querySelector('#results');
const myWinsEl = document.querySelector('#wins');
const myDrawEl = document.querySelector('#draws');
const myLosesEl = document.querySelector('#loses');
const myTotalEl = document.querySelector('#total');
const myPercentageEl = document.querySelector('#percentage');
// initialize global state
let wins= 0;
let loses = 0;
let draw = 0;
// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
  myButton.addEventListener('click', () => {
    let player = document.querySelector('input:checked');
    let computer = getRandomThrow();
    const winning = didUserWin(player.value, computer);
    console.log(player.value, computer);

    if (winning === 'You Win!'){
      wins++;
      myResultsEl.textContent = 'You Win!';
    } else if( winning === 'You lose!'){
      loses--;
      myResultsEl.textContent = 'You Lose!';
    } else {
      draw ++;
      myResultsEl.textContent = 'Draw!';
    }

    myWinsEl.textContent = `Wins!: ${wins}`;
    myLosesEl.textContent = `Loses!: ${loses}`;
    myDrawEl.textContent = `Draws!: ${draw}`;
  })
  

 