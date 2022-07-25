// Step 1. First and foremost, set up mocha. Make sure you are in the bonusChallenge folder!
// How to: Remember to npm init, npm install mocha -D, add script test line to package.json
// Follow the Google doc steps of how you did in the activity folder if you forget.

//Import assert
const assert = require("assert");

//Import functions from app.js
const { fizzBuzz, gatherNamesOf } = require("../app");

describe("tests for the fizzBuzz function", () => {});

/*
  * Step 2. Create unit tests for FizzBuzz. 
  You should create an unit test for each functionality of the FizzBuzz function. 
  Unit tests to write: 
    1. it should return Fizz when the value is multiple of 3 
    2. it should return Buzz when the value is multiple of 5 
    3. it should return FizzBuzz when the value is multiple of 3 and 5
    4. should return the number given when the value is not multiple of 3 or 5
  NOTE: After each unit test, use it to guide you on what code you need to write in app.js 
  to pass the test and make sure it passes (run npm test) before writing the next it test.
  Don't forget to use the steps of setup, exercise and verify to guide you in writing tests. 
*/

describe("tests for the gatherNamesOf function", () => {});

/* Step 3. Create unit tests for the gatherNamesOf function. 
This function should take an array of objects. It should look at the array and return the key name values of each.
Unit tests to write:
    1. It should should return an answer with a typeof array (remembering, using .map() on the array it's passed would return such an array )
    2. It should give me the same output array' length as the input array's length
    3. It should give me an array filled with the property name value of the array of objects passed in
  NOTE: After each unit test, use it to guide you on what code you need to write in app.js to 
  pass the test and make sure it passes (run npm test) before writing the next it test.
  * CHALLENGE: use beforeEach method to write a more concise test code and refactor code that gets repeated in each test.
 */
