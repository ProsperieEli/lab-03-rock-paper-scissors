// import functions and grab DOM elements
import { didUserWin, getRandomThrow } from "./get-random-throw.js";

const myButton = document.querySelector('#submit');
const myReset = document.querySelector('#reset');
const myResultsEl = document.querySelector('#results');
const myWinsEl = document.querySelector('#wins');
const myDrawEl = document.querySelector('#draws');
const myLosesEl = document.querySelector('#loses');
const myTotalEl = document.querySelector('#total');
const myPercentageEl = document.querySelector('#percentage');
// initialize global state
let wins= 0;
let loses = 0;

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state

  myButton.addEventListener('click', () => {
    didUserWin();
    getRandomThrow();
    
  })