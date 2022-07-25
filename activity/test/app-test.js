//Import assert
const assert = require('assert');
const { add } = require("../../answers/app");

//Import add function from app.js
describe("tests for the add function", () => {
  it("return add two numbers", () => {
    //set up
    let numberVariable1 = 1;
    let numberVariable2 = 2;
    let expectedSum = numberVariable1 + numberVariable2;
    let result = add(numberVariable1, numberVariable2);
    assert.strictEqual(result, expectedSum);
  });
  it("recieve one argument", () => {
    //set up 
    let numValue = 9;
    let expectedSum = numValue + 0;
    //Exercise
    let result = add(numValue);
    //Verify
    assert.strictEqual(result, expectedSum)

  })
  it("handle to 0", () => {
    //set up 
    let numberVariable1 = 0;
    let numberVariable2 = 0;
    let expectedSum = numberVariable1 + numberVariable2;
    //Exercise
    let result = add(numberVariable1, numberVariable2);
    //Verify
    assert.strictEqual(result, expectedSum)

  })
  it("handle string case", () => {
    let string1 = "hello";
    let string2 = 'there';
    let expectedSum = 0;
    let result = add(string1, string2);
    assert.strictEqual(result, expectedSum);
  })
})

/*
   * Create unit tests for the add function
   1 - should add 2 numbers as arguments
   2 - should handle only one number as arguments
   // extension challenge
   3 - should be able to accept 0 as arguments
   4 - should return 0 if one argument is not a number
   You will be following the Google doc steps to do this using TDD.
 */
