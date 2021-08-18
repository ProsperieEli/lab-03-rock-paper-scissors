// IMPORT MODULES under test here:
// import { example } from '../example.js';

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
