const getNumber = number => {
  let output = '';

  output = (isFizz(number)) ? 'Fizz' : '';
  output = (isBuzz(number)) ? (output+'Buzz') :
    (output === '' ? number : output);

  return output;
}

const isFizz = (number) =>
  (number % 3 === 0 || String(number).split('').filter(n => n === '3').length > 0);

const isBuzz = (number) =>
  (number % 5 === 0 || String(number).split('').filter(n => n === '5').length > 0);

module.exports = number => {
  return getNumber(number);
}
