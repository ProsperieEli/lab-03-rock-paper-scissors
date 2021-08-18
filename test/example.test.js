// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { didUserWin } from "../get-random-throw.js";
import { getRandomThrow } from "../get-random-throw.js";

const test = QUnit.test;

test('Should return Rock, paper or scissors at random', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const options = ['rock', 'paper', 'scissors'];
    const expected = true;
    
    //Act 
    // Call the function you're testing and set the result to a const
    
    const actual = options.includes(getRandomThrow());
    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('Rock vs Scissors', (expect) => {
    const expected = 'You Win!';

    const actual = didUserWin('rock', 'scissors');

    expect.equal(actual, expected);
});
test('Rock vs paper', (expect) => {
    const expected = 'You lose!';

    const actual = didUserWin('rock', 'paper');

    expect.equal(actual, expected);
});
test('Rock vs rock', (expect) => {
    const expected = 'draw';

    const actual = didUserWin('rock', 'rock');

    expect.equal(actual, expected);
});
test('Scissors vs Scissors', (expect) => {
    const expected = 'draw';

    const actual = didUserWin('scissors', 'scissors');

    expect.equal(actual, expected);
});
test('Scissors vs Rock', (expect) => {
    const expected = 'You lose!';

    const actual = didUserWin('scissors', 'rock');

    expect.equal(actual, expected);
});
test('Scissors vs Paper', (expect) => {
    const expected = 'You Win!';

    const actual = didUserWin('scissors', 'paper');

    expect.equal(actual, expected);
});
test('Paper vs Rock', (expect) => {
    const expected = 'You Win!';

    const actual = didUserWin('paper', 'rock');

    expect.equal(actual, expected);
});
test('Paper vs Paper', (expect) => {
    const expected = 'draw';

    const actual = didUserWin('paper', 'paper');

    expect.equal(actual, expected);
});
test('Paper vs Scissors', (expect) => {
    const expected = 'You lose!';

    const actual = didUserWin('paper', 'scissors');

    expect.equal(actual, expected);
});
