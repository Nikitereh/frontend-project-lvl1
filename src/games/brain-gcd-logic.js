import func from '../index.js';
import getRandomNumber from '../getRandomNumber.js';

const rules = 'Find the greatest common divisor of given numbers.';

const divisor = (num1, num2) => {
  if (num2 === 0) {
    return num1;
  }
  return divisor(num2, num1 % num2);
};

const check = () => {
  const number1 = getRandomNumber(1, 100);
  const number2 = getRandomNumber(1, 100);
  const question = `${number1} ${number2}`;
  const correctAnswer = `${divisor(number1, number2)}`;
  return [question, correctAnswer];
};

const braingcd = () => func(rules, check);

export default braingcd;
