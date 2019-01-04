/**
 * TDD Kata.
 * =========================
 * Guidesmiths Spain. 2019
 * @author Germán D. Schneck
 * @author Jose M. Torralvo
 */

const getNumber = require('./utils');
const assert = require('assert');

describe('FizzBuzz Test - Step 1', () => {

  it('says if the number is 1, it must return 1', () => {
    assert.equal(getNumber(1), 1);
  })
  
  it('says if the number is 3, it must return Fizz', () => {
    assert.equal(getNumber(3), 'Fizz');
  })

  it('says if the number is 5, it must return Buzz', () => {
    assert.equal(getNumber(5), 'Buzz');
  })

  it('says if the number is 15, it must return FizzBuzz', () => {
    assert.equal(getNumber(15), 'FizzBuzz');
  })
});

describe('FizzBuzz Test - Step 2', () => {
  it('says if the number is 17, it must return 17', () => {
    assert.equal(getNumber(17), 17);
  })

  it('says if the number is 37, it must return Fizz', () => {
    assert.equal(getNumber(37), 'Fizz');
  })

  it('says if the number is 52, it must return Buzz', () => {
    assert.equal(getNumber(52), 'Buzz');
  })
})