import gameLogic from '../index.js';
import getRandomNumber from '../getRandomNumber.js';

const gameRule = 'Find the greatest common divisor of given numbers.';

const checkBiggestDivisor = (num1, num2) => {
  if (num2 === 0) {
    return num1;
  }
  return checkBiggestDivisor(num2, num1 % num2);
};

const generateData = () => {
  const number1 = getRandomNumber(1, 100);
  const number2 = getRandomNumber(1, 100);
  const question = `${number1} ${number2}`;
  const correctAnswer = `${checkBiggestDivisor(number1, number2)}`;
  return [question, correctAnswer];
};

const brainGcd = () => gameLogic(gameRule, generateData);

export default brainGcd;
